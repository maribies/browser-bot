//**
/* A worker performs in the background, parallel to the main thread, so we can run the heavy modeling computation asynchronously and without affecting the UI.
//  */

import {
  pipeline,
  dot,
  type AllTasks,
  type FeatureExtractionPipeline,
  type PipelineType,
  type ProgressCallback,
  type ProgressInfo,
} from "@huggingface/transformers";
import { rankChunks } from "./lib/rank";
import { type Chunk, flattenSiteContentIntoChunks } from "./lib/chunks";
import {
  botContentSchema,
  questionsSchema,
  type Question,
} from "./lib/schemas";
// TODO: test using optimum.onnxruntime, as suggested by the model card.

type BotSiteData = Promise<{ chunks: Chunk[]; questions: Question[] }>;

// Search / embeddings - Encoder
class MyChatEncoderPipeline {
  static task = "feature-extraction" as const satisfies PipelineType;
  static model: string = "Xenova/all-MiniLM-L6-v2";
  static instance: Promise<FeatureExtractionPipeline> | null = null;
  static revision: string = "751bff37182d3f1213fa05d7196b954e230abad9";
  static chunkVectors: number[][] | null = null;
  static siteData: BotSiteData | null = null;

  static async getInstance(progress_callback?: ProgressCallback) {
    this.instance ??= getInstance(
      this.task,
      this.model,
      progress_callback,
      this.revision,
    );
    return this.instance;
  }

  static async getSiteData() {
    this.siteData ??= getSiteData();
    return this.siteData;
  }

  static async getSiteChunkVectors() {
    const extractor = await this.getInstance();
    if (!extractor) {
      return null;
    }

    const { chunks } = await this.getSiteData();

    let perf = performance.now();
    console.log(`embed content chunks: ${perf}`);
    // options are for returning one vector per sentence, instead of the default, per word
    this.chunkVectors ??= (
      await extractor(
        chunks.map((c) => c.text),
        { pooling: "mean", normalize: true },
      )
    ).tolist();
    perf = performance.now();
    console.log(`after embed content chunks: ${perf}`);

    return this.chunkVectors;
  }
}

// Question answering (generative) - Decoder
// TODO:
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class MyChatDecoderPipeline {
  static task = "text-generation" as const;
}

async function getInstance<T extends PipelineType>(
  task: T,
  model: string,
  progress_callback?: ProgressCallback,
  revision?: string,
  // TODO: Try { device: "webgpu" }, and compare. Should be much faster, but has less support. Figure out how to tell if it is supported from the user's browser version.
): Promise<AllTasks[T]> {
  return pipeline(task, model, { progress_callback, revision });
}

// TODO: Consider if getting the site data needs to be grouped or it should be done separately. Probably together, but think it through more later.
async function getSiteData(): BotSiteData {
  // normally we would want to embed the event.data.text instad of the questions, but for these testing purposes, we are looping through the questions json file instead
  const [contentResp, questionsResp] = await Promise.all([
    fetch("/api/bot.json"), // TODO: Run tests switching out with copy.json to see if voice matters.
    fetch("/api/questions.json"),
  ]);

  const content = botContentSchema.parse(await contentResp.json());
  const questions = questionsSchema.parse(await questionsResp.json());

  const chunks = flattenSiteContentIntoChunks(content);

  return { chunks, questions };
}

self.addEventListener("message", async (event) => {
  const { type } = event.data;

  if (type == "load") {
    // To determine download time.
    let perf = performance.now();
    console.log(`load: ${perf}`);
    await MyChatEncoderPipeline.getInstance((x: ProgressInfo) => {
      self.postMessage({ type, ...x });
    });
    perf = performance.now();
    console.log(`after load await: ${perf}`);

    // store the site data as chunks
    await MyChatEncoderPipeline.getSiteChunkVectors();
  }

  if (type == "embed") {
    const extractor = await MyChatEncoderPipeline.getInstance();
    const chunkVectors = await MyChatEncoderPipeline.getSiteChunkVectors();
    const { questions, chunks } = await MyChatEncoderPipeline.getSiteData();

    // loop through questions
    for (let index = 0; index < questions.length; index++) {
      const question = questions[index];
      const { q, c } = question;

      let perf = performance.now();
      console.log(`embed question: ${perf}`);
      const questionVector = await extractor(q, {
        pooling: "mean",
        normalize: true,
      });
      perf = performance.now();
      console.log(`after embed question: ${perf}`);

      // const questionVector = await extractor(text, {
      //   pooling: "mean",
      //   normalize: true,
      // });
      // // only ever one tensor, at least for this prototype
      // // at least one library, "ai", supports streaming, but
      // // would be good exercise to possibly write own
      const questionConvertedTensor = questionVector.tolist()[0];

      const scores: number[] = [];
      chunkVectors?.map((cv: number[]) => {
        // dot is the method to compare (dot product), could've used cosine
        const score = dot(questionConvertedTensor, cv);
        scores.push(score);
      });

      // TODO: Eventually want only the top scores, e.g. ranked.slice(0, 3)
      const ranked = rankChunks(scores, chunks);
      console.log({ question: q });
      console.log("expected chunk", ...c);
      console.table(ranked);
    }

    // TODO: after embedding route to search, if necessary
  }

  if (type == "generation") {
    // TODO
  }

  self.postMessage({
    type,
    status: "complete",
    output: "nothing for now",
  });
});

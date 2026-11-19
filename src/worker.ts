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
// TODO: test using optimum.onnxruntime, as suggested by the model card.

type Chunk = { id: string; text: string };
type Question = { q: string; c: string[]; e: string; d: string };
type SiteData = Promise<{ chunks: Chunk[]; questions: Question[] }>;

// Search / embeddings - Encoder
class MyChatEncoderPipeline {
  static task = "feature-extraction" as const satisfies PipelineType;
  static model: string = "Xenova/all-MiniLM-L6-v2";
  static instance: Promise<FeatureExtractionPipeline> | null = null;
  static revision: string = "751bff37182d3f1213fa05d7196b954e230abad9";
  static chunkVectors: number[][] | null = null;
  static siteData: SiteData | null = null;

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
async function getSiteData(): SiteData {
  // normally we would want to embed the event.data.text instad of the questions, but for these testing purposes, we are looping through the questions json file instead
  const [contentResp, questionsResp] = await Promise.all([
    fetch("/api/bot.json"), // TODO: Run tests switching out with copy.json to see if voice matters.
    fetch("/api/questions.json"),
  ]);

  const content = await contentResp.json();
  const questions = await questionsResp.json();

  // flatten the content.json
  // TODO: (lodash or a helper function would be helpful for more content), this could be used for a test
  const { hero, info } = content.home;
  const { role: heroRole, summary: heroSummary, aka: heroAka } = hero;
  const { title: infoTitle, summary: infoSummary } = info;
  const chunks = [
    { id: "home.hero.role", text: heroRole },
    { id: "home.hero.summary", text: heroSummary },
    { id: "home.hero.aka", text: heroAka },
    { id: "home.info.title", text: infoTitle },
    { id: "home.info.summary", text: infoSummary },
  ];

  return { chunks, questions };
}

self.addEventListener("message", async (event) => {
  const { text, type } = event.data;

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
    // const { questions } = await MyChatEncoderPipeline.getSiteData();

    // loop through questions like a user would
    // for (let index = 0; index < questions.length; index++) {
    //   const question = questions[index];
    //   const { q } = question;

    //   perf = performance.now();
    //   console.log(`embed question: ${perf}`);
    //   const questionVector = await extractor(q, {pooling: "mean", normalize: true})
    //   perf = performance.now();
    //   console.log(`after embed question: ${perf}`);

    //   // score and sort
    // }

    let perf = performance.now();
    console.log(`embed question: ${perf}`);
    const questionVector = await extractor(text, {
      pooling: "mean",
      normalize: true,
    });
    perf = performance.now();
    console.log(`after embed question: ${perf}`);
    // only ever one tensor, at least for this prototype
    // at least one library, "ai", supports streaming, but
    // would be good exercise to possibly write own
    const questionConvertedTensor = questionVector.tolist()[0];

    const scores: number[] = [];
    chunkVectors?.map((cv: number[]) => {
      // dot is the method to compare (dot product), could've used cosine
      const score = dot(questionConvertedTensor, cv);
      scores.push(score);
    });
    // the index maps back to the chunks to see if the chunks id expected is the first in the score table
    console.table(scores);

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

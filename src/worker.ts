//**
/* A worker performs in the background, parallel to the main thread, so we can run the heavy modeling computation asynchronously and without affecting the UI.
//  */

import {
  pipeline,
  type AllTasks,
  type FeatureExtractionPipeline,
  type PipelineType,
  type ProgressCallback,
  type ProgressInfo,
} from "@huggingface/transformers";

// Question answering (extractive) - Encoder
class MyChatEncoderPipeline {
  static task = "feature-extraction" as const satisfies PipelineType;
  static model: string = "Xenova/all-MiniLM-L6-v2";
  static instance: Promise<FeatureExtractionPipeline> | null = null;
  static revision: string = "751bff37182d3f1213fa05d7196b954e230abad9";

  static async getInstance(progress_callback?: ProgressCallback) {
    this.instance ??= getInstance(this.task, this.model, progress_callback, this.revision);
    return this.instance
  }
}

// Question answering (generative) - Encoder-Decoder or Decoder
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
): Promise<AllTasks[T]>{
  return pipeline(task, model, { progress_callback, revision });
}

self.addEventListener("message", async (event) => {
  const { text, type } = event.data;

  // To determine download time.
  let perf = performance.now();
  console.log(`load: ${perf}`);
  const extractor = await MyChatEncoderPipeline.getInstance((x: ProgressInfo) => {
    self.postMessage({ type, ...x });
  });
  perf = performance.now();
  console.log(`after await: ${perf}`);
 
  let output;
  if (type == "embed") {
    // options are for returning one vector per sentence, instead of the default, per word 
    output = await extractor(text, { pooling: "mean", normalize: true });

    // Tensor
    console.log({output});
    // nested js array
    console.log(output.tolist());
  }

  if (type == "generation") {
    // TODO
  }

  self.postMessage({
    type,
    status: "complete",
    output: output,
  });
});

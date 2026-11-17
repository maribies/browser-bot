# Browser Bot Experiment

## What this repo is
A prototype for a small chatbot that will live on a personal portfolio site.

The first question: can an embedding model and a small generative model load in the browser, locally, and answer usefully from the content?

## Hard constraints

- **Zero budget.** No hosted model APIs, no paid hosting, no service that could produce a bill. Everything will run in the browser.
- **Nothing is collected.** No analytics, no error reporting, no logging of questions, nothing.
- **This repo is public.** Nothing private goes in: no secrets, no private contact details, no unpublished personal information.
- **Do not commit model weights.** Git rejects files over 100 MB. Load models from Hugging Face at runtime; keep any local copies git-ignored.
- **Accuracy over cleverness.**A bot that invents job history is worse than no bot.

## Development

Built with [Vite](https://vite.dev) and React. Pages are pre-rendered to static HTML at build time.

- `npm run dev`: local dev server.
- `npm run build`: builds and pre-renders the site into `dist/`.
- `npm run preview`: serves the built site locally.

### Process

1. **Minimal data.** Copying over the basics of the site, with the main site content.
2. **Search test.** Load one embedding model in the browser and check it ranks sensible chunks for about ten questions.
3. **Model test.** Load one generative model on WebGPU, give it the correct chunks by hand, and ask about ten open questions.
4. **Record what happened** under [Results](#results).

#### Results

##### 2026-11-17: Embedding model load time

| | |
|---|---|
| Model | `Xenova/all-MiniLM-L6-v2` (`model_quantized.onnx`) |
| Revision | `main` (not pinned), at commit `751bff37182d3f1213fa05d7196b954e230abad9` |
| Library | `@huggingface/transformers` 4.3.2 |
| Device | default (`device` not set) |
| Browser | Brave 1.98.63 (arm64), Chromium 156.0.8078.80 |
| Machine / GPU | MacBook Pro, Apple M3 Pro (integrated GPU), 36 GB memory, macOS Tahoe 26.7.3 |
| Storage | 994.66 GB disk, 838.8 GB free; browser storage quota for the origin ≈ 596,798 MB, 50.6 MB used after loading |

Measured in the worker with `performance.now()` around the first `getInstance` call, so it covers download (if any), tokenizer setup and ONNX session creation.

| Load | Time | Runs |
|---|---|---|
| Cold (browser cache cleared) | ≈ 1,830 ms | 1 |
| Cached | ≈ 404 ms | 1 |

Ranking quality not yet tested.

### 2026-11-17: Embedding model load time, pinned revision

Same setup as above, except `revision: "751bff37182d3f1213fa05d7196b954e230abad9"` is passed to `pipeline()`. Each cached run followed a page refresh, so each started a fresh worker.

| Load | Run 1 | Run 2 | Run 3 |
|---|---|---|---|
| Cold (first load of the pinned revision) | ≈ 2,162 ms | | |
| Cached | ≈ 794 ms | ≈ 764 ms | ≈ 787 ms |

Cached loads with the pinned revision are consistent at about 0.76–0.79 s. That is about double the single unpinned cached run above (≈ 404 ms); the cause is not yet known.

## Licence

Code is [MIT](LICENSE). The site content in `public/api/` is not covered by the licence: © 2026 Marissa Biesecker, all rights reserved.
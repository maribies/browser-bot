# Browser Bot Experiment

## What this repo is

A prototype for a small chatbot that will live on a personal portfolio site.

The first question: can an embedding model and a small generative model load in the browser, locally, and answer usefully from the content?

## Hard constraints

- **Zero budget.** No hosted model APIs, no paid hosting, no service that could produce a bill. Everything will run in the browser.
- **Nothing is collected.** No analytics, no error reporting, no logging of questions, nothing.
- **This repo is public.** Nothing private goes in: no secrets, no private contact details, no unpublished personal information.
- **Do not commit model weights.** Git rejects files over 100 MB. Load models from Hugging Face at runtime; keep any local copies git-ignored.
- **Accuracy over cleverness.** A bot that invents job history is worse than no bot.

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

Development notes to consider when moving out of the prototype:

- If the third person voice makes a difference, for the real implementation, supporting two nearly identical json files and making sure they don't drift is unrealistic. A programmatic solution should be implemented.
- We are only submitting one answer at a time, but keeping the chat viewable in history would be expected. And keeping the history in component state would make it easy to input back into a model later if work goes in that direction.

#### Results

##### 2026-11-17: Embedding model load time

|               |                                                                                                              |
| ------------- | ------------------------------------------------------------------------------------------------------------ |
| Model         | `Xenova/all-MiniLM-L6-v2` (`model_quantized.onnx`)                                                           |
| Revision      | `main` (not pinned), at commit `751bff37182d3f1213fa05d7196b954e230abad9`                                    |
| Library       | `@huggingface/transformers` 4.3.2                                                                            |
| Device        | default (`device` not set)                                                                                   |
| Browser       | Brave 1.98.63 (arm64), Chromium 156.0.8078.80                                                                |
| Machine / GPU | MacBook Pro, Apple M3 Pro (integrated GPU), 36 GB memory, macOS Tahoe 26.7.3                                 |
| Storage       | 994.66 GB disk, 838.8 GB free; browser storage quota for the origin ≈ 596,798 MB, 50.6 MB used after loading |

Measured in the worker with `performance.now()` around the first `getInstance` call, so it covers download (if any), tokenizer setup and ONNX session creation.

| Load                         | Time       | Runs |
| ---------------------------- | ---------- | ---- |
| Cold (browser cache cleared) | ≈ 1,830 ms | 1    |
| Cached                       | ≈ 404 ms   | 1    |

Ranking quality not yet tested.

##### 2026-11-17: Embedding model load time, pinned revision

Same setup as above, except `revision: "751bff37182d3f1213fa05d7196b954e230abad9"` is passed to `pipeline()`. Each cached run followed a page refresh, so each started a fresh worker.

| Load                                     | Run 1      | Run 2    | Run 3    |
| ---------------------------------------- | ---------- | -------- | -------- |
| Cold (first load of the pinned revision) | ≈ 2,162 ms |          |          |
| Cached                                   | ≈ 794 ms   | ≈ 764 ms | ≈ 787 ms |

Cached loads with the pinned revision are consistent at about 0.76–0.79 s. That is about double the single unpinned cached run above (≈ 404 ms); the cause is not yet known.

##### 2026-11-19: Search ranking, 19 questions

Moved to [docs/results/2026-11-19-search-ranking.md](docs/results/2026-11-19-search-ranking.md).

##### 2026-11-20: Search ranking rerun after ranking refactor

Same setup as the 2026-11-19 run: model, pinned revision, library, device, browser, machine, chunks and questions unchanged. Cache not cleared.

The scoring output was refactored; every question's ranking and scores were identical to the 2026-11-19 run, to full precision, so the refactor changed only the output format, not the results.

| Step               | Time                              |
| ------------------ | --------------------------------- |
| Cached load        | ≈ 866 ms                          |
| Embed 5 chunks     | ≈ 446 ms                          |
| Embed one question | ≈ 9–34 ms (the first was slowest) |

##### 2026-11-23: Search ranking, 33 chunks and 39 questions

Same model, pinned revision, library, device and machine as above. Browser unchanged since 2026-11-19: Brave 1.100.58 (arm64), Chromium 158.0.8127.42. Browser cache cleared before the run.

**What changed since 2026-11-19**

- **Content.** `public/api/bot.json` now has 33 chunks instead of 5:
  - 5 home chunks, as before, with one small change in `home.info.title`, which lost "Hi! She is Marissa."
  - 3 projects (`browserBot`, `garmentSegmentation`, `pixelPup`), each with `overview`, `roleSummary` and `keywords` as one chunk each, and one chunk per `skills` item (3, 10 and 6).
- **Name and pronouns.** The name was removed from all content. Home chunks refer to her as "she"; experience chunks have no subject and start with the project name (e.g. "Pixel Pup: Designed and implemented…").
- **Questions.** `public/api/questions.json` now has 39 questions: 27 with expected chunks, 12 with none. A question can list several expected chunks (`c`), all treated as equally correct; `e` records the expected result and `d` the desired result.

Scores are not directly comparable with the 2026-11-19 run: the content, the number of chunks, and the questions all changed.

**Timing**

| Step                      | Time                                                  |
| ------------------------- | ----------------------------------------------------- |
| Cold load (cache cleared) | ≈ 2,200 ms                                            |
| Embed 33 chunks           | ≈ 2,862 ms                                            |
| Embed one question        | median ≈ 12.0 ms (8.9–31.5 ms; the first was slowest) |

**Results:** [docs/results/2026-11-23-search-ranking.md](docs/results/2026-11-23-search-ranking.md) has a summary table for each group of questions (27 with expected chunks, 12 without), the full 33-chunk ranking for every question, notes, and the conclusions.

## Licence

Code is [MIT](LICENSE). The site content in `public/api/` is not covered by the licence: © 2026 Marissa Biesecker, all rights reserved.

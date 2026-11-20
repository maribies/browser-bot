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

Same model, revision (pinned), library, device and machine as above. **Browser changed:** Brave 1.100.58 (arm64), Chromium 158.0.8127.42.

Five chunks from `public/api/bot.json` (third person, one per text field, `aka` title and body joined), embedded once as a batch. Each question from `public/api/questions.json` embedded one at a time, then scored against every chunk by dot product (vectors normalized, so this is cosine similarity). Browser cache cleared before the run.

**Timing**

| Step                      | Time                                                  |
| ------------------------- | ----------------------------------------------------- |
| Cold load (cache cleared) | ≈ 2,482 ms                                            |
| Embed 5 chunks            | ≈ 450 ms                                              |
| Embed one question        | median ≈ 11.7 ms (8.8–27.1 ms; the first was slowest) |

**Questions with an expected chunk (11)**

| Question                                  | Expected                   | Ranked first (score)     | Second (score)       | Actual rank of Expected | Margin of top scores |
| ----------------------------------------- | -------------------------- | ------------------------ | -------------------- | ----------------------- | -------------------- |
| What kind of engineer is she?             | hero.role                  | **hero.role** (0.735)    | info.title (0.485)   | 1                       | 0.250                |
| What does she enjoy doing?                | hero.summary, info.summary | **hero.summary** (0.564) | hero.role (0.347)    | 1, 3                    | 0.217                |
| What has she built before?                | hero.summary, info.summary | hero.role (0.546)        | hero.summary (0.448) | 2, 3                    | 0.098                |
| What did her soccer coach call her?       | hero.aka                   | **hero.aka** (0.655)     | hero.role (0.368)    | 1                       | 0.287                |
| What position did Marissa play in soccer? | hero.aka                   | **hero.aka** (0.597)     | info.title (0.426)   | 1                       | 0.171                |
| Does she know anything about AI?          | info.title                 | **info.title** (0.531)   | hero.role (0.436)    | 1                       | 0.095                |
| What languages does she know?             | info.title                 | hero.role (0.353)        | info.title (0.335)   | 2                       | 0.018                |
| Does she like to learn?                   | info.title                 | hero.summary (0.417)     | info.title (0.330)   | 2                       | 0.087                |
| Did she go to business school?            | info.summary               | **info.summary** (0.628) | hero.role (0.487)    | 1                       | 0.141                |
| Did she go to design school?              | info.summary               | **info.summary** (0.587) | hero.role (0.490)    | 1                       | 0.097                |
| Did Marissa have a previous career?       | info.summary               | info.title (0.568)       | hero.role (0.414)    | 3                       | 0.155                |

**Questions with no answer in the content (8)**

| Question                                                  | Ranked first (score) | Second (score)       | Margin of top scores |
| --------------------------------------------------------- | -------------------- | -------------------- | -------------------- |
| Can I speak to a human?                                   | info.title (0.168)   | hero.aka (0.098)     | 0.071                |
| What is her favorite color?                               | hero.summary (0.323) | info.title (0.246)   | 0.077                |
| How many years of experience does she have?               | hero.role (0.495)    | info.summary (0.379) | 0.116                |
| What should I ask her about in an interview?              | hero.role (0.337)    | hero.summary (0.307) | 0.030                |
| What is the meaning of life?                              | hero.aka (0.144)     | hero.summary (0.108) | 0.036                |
| What do you think about her?                              | info.title (0.374)   | hero.role (0.349)    | 0.025                |
| Did she go to school for engineering or computer science? | hero.role (0.573)    | info.summary (0.503) | 0.069                |
| Ela sabe falar português?                                 | info.summary (0.166) | hero.aka (0.138)     | 0.028                |

**Notes:**

- Of the 11 questions with expected answers:
  - 7 had the expected chunk ranked highest.
  - 3 had the expected chunk ranked second highest.
  - 10 had the expected chunk ranked the highest or second highest.
  - 1 had the expected chunk ranked at 3.
  - The highest expected chunk score was 0.735 and the lowest 0.330, with mean of 0.523 and median 0.564.
  - The margin between first and second scores varied between 0.287 and 0.018.
  - The margin for the top 2 chunks for the 1 that "failed" (not finding the expected chunk in the top 2) was 0.155, which was the 5th highest margin.
  - The first place scores had a highest score of 0.735 and lowest of 0.353, with a mean of 0.562 and median 0.568.
  - The lowest first-place score that was also correct was 0.531; so a range could be 0.531-0.735.
- Of the 8 questions with no expected answers:
  - The first place scores had the highest score of 0.573 and lowest 0.144, with a mean of 0.322 and median of 0.330.
  - The margins varied between 0.116 and 0.025.
  - Of all of these, the one with the highest, the second to last listed, with "school" and "engineering" would be most likely to match; none of the other questions have words likely to match the content.

- Overall:
  - There might not be enough content for a good test. There are only 5 chunks, so top two is theoretically 40%. However, having over half ranked highest is rather meaningful. Keeping in mind as well, `info.summary` is already 2x bigger than the next biggest chunk:

    | Chunk        | Characters | Words |
    | ------------ | ---------- | ----- |
    | hero.role    | 28         | 5     |
    | info.title   | 97         | 14    |
    | hero.aka     | 124        | 23    |
    | hero.summary | 228        | 37    |
    | info.summary | 486        | 86    |

  - So the one that failed with the expected `info.summary` in third rank, makes some sense, especially because it wasn't keying off of a specific word like the other two that expected `info.summary` ranked first.
    - Additionally for this failure, it was one of 2 that used the proper name instead of pronoun and the other one also had `info.title` highly ranked, likely because `info.title` is the only chunk with the proper name, which is also the second smallest characters and word count.
  - Likewise, `hero.role` being so short puts higher emphasis on the word "she" that matches to a lot of the questions with "she".
  - The highest first place score for a non-expected answer seems to be a bit of an outlier, the only one that could have been over a cut-off, and is likely because engineering matched the `hero.role`.
  - The smallest margin of the known answers might not have been the fairest question to expect an answer, as it expected a match between polyglot and languages.
  - The Portuguese question didn't expect an answer and ranked low. Might not be the best test of Portuguese, so a Portuguese question with an expected answer should be added.

- Conclusion: This test round wasn't enough. The direct questions do the best, as expected, and indirect wording was missed (polyglot for languages, lifelong learner for learn). A score cutoff can't be determined from this data. The plan will be to add more content, test to see what changes, and then more questions. But first, a ranked mapping to make the data comparison easier for these tests, and eventually it would be needed for the full text generation hookup (but not the testing). And when adding more content, it will be important to try not to add content that will result in an expected answer chunk to existing questions, or at least not without adding the new expectation.

##### 2026-11-20: Search ranking rerun after ranking refactor

Same setup as the 2026-11-19 run: model, pinned revision, library, device, browser, machine, chunks and questions unchanged. Cache not cleared.

The scoring output was refactored; every question's ranking and scores were identical to the 2026-11-19 run, to full precision, so the refactor changed only the output format, not the results.

| Step               | Time                              |
| ------------------ | --------------------------------- |
| Cached load        | ≈ 866 ms                          |
| Embed 5 chunks     | ≈ 446 ms                          |
| Embed one question | ≈ 9–34 ms (the first was slowest) |

## Licence

Code is [MIT](LICENSE). The site content in `public/api/` is not covered by the licence: © 2026 Marissa Biesecker, all rights reserved.

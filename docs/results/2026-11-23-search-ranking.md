# Search ranking, 2026-11-23

Full results for the 2026-11-23 run recorded in the [README](../../README.md#2026-11-23-search-ranking-33-chunks-and-39-questions). Setup and timing are there.

- **#** is the question's index in `public/api/questions.json`.
- Chunk ids drop the `experiencesProjects.` prefix: `pixelPup.skills.2` is `experiencesProjects.pixelPup.skills.2`.
- Scores are rounded to three decimals. **Bold** chunks are expected chunks for that question.
- **Expected (rank)** lists every expected chunk with its rank out of 33. **Best rank** is the rank of the highest-ranked expected chunk.
- **Margin** is the first score minus the second.

## Questions with expected chunks (27)

| #   | Question                                                                 | Expected (rank)                                                                                                                                                                                                                               | Best rank | First (score)                            | Second (score)                       | Third (score)                            | Margin |
| --- | ------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------------------------------------- | ------------------------------------ | ---------------------------------------- | ------ |
| 0   | What kind of engineer is she?                                            | home.hero.role (1), browserBot.overview (6), pixelPup.overview (8), garmentSegmentation.overview (16)                                                                                                                                         | 1         | **home.hero.role** (0.743)               | home.info.title (0.610)              | home.info.summary (0.470)                | 0.133  |
| 1   | What does she enjoy doing?                                               | home.hero.summary (1), home.info.summary (4)                                                                                                                                                                                                  | 1         | **home.hero.summary** (0.563)            | home.info.title (0.435)              | home.hero.role (0.364)                   | 0.128  |
| 2   | What has she built before?                                               | home.hero.summary (3), home.info.summary (4), garmentSegmentation.skills.8 (10), pixelPup.overview (14), browserBot.overview (21), garmentSegmentation.roleSummary (22), garmentSegmentation.overview (25), garmentSegmentation.skills.4 (29) | 3         | home.hero.role (0.552)                   | home.info.title (0.453)              | **home.hero.summary** (0.442)            | 0.099  |
| 3   | What did her soccer coach call her?                                      | home.hero.aka (1)                                                                                                                                                                                                                             | 1         | **home.hero.aka** (0.664)                | home.hero.role (0.368)               | home.info.summary (0.335)                | 0.297  |
| 4   | What position did Marissa play in soccer?                                | home.hero.aka (1)                                                                                                                                                                                                                             | 1         | **home.hero.aka** (0.608)                | home.hero.role (0.355)               | home.info.summary (0.304)                | 0.253  |
| 5   | Does she know anything about AI?                                         | home.info.title (1), browserBot.overview (9), pixelPup.overview (16), garmentSegmentation.overview (20), garmentSegmentation.keywords (21)                                                                                                    | 1         | **home.info.title** (0.643)              | home.hero.role (0.445)               | home.hero.summary (0.423)                | 0.198  |
| 6   | What languages does she know?                                            | home.info.title (1), browserBot.keywords (7), garmentSegmentation.keywords (8), pixelPup.keywords (9)                                                                                                                                         | 1         | **home.info.title** (0.469)              | home.hero.role (0.355)               | home.hero.aka (0.270)                    | 0.114  |
| 7   | Does she like to learn?                                                  | home.info.title (1), pixelPup.overview (10), garmentSegmentation.overview (12), browserBot.overview (19)                                                                                                                                      | 1         | **home.info.title** (0.470)              | home.hero.summary (0.423)            | home.info.summary (0.340)                | 0.047  |
| 8   | Did she go to business school?                                           | home.info.summary (1)                                                                                                                                                                                                                         | 1         | **home.info.summary** (0.625)            | home.hero.role (0.488)               | home.info.title (0.428)                  | 0.137  |
| 9   | Did she go to design school?                                             | home.info.summary (1)                                                                                                                                                                                                                         | 1         | **home.info.summary** (0.586)            | home.info.title (0.496)              | home.hero.role (0.495)                   | 0.090  |
| 10  | Did Marissa have a previous career?                                      | home.info.summary (2)                                                                                                                                                                                                                         | 2         | home.hero.role (0.402)                   | **home.info.summary** (0.337)        | home.hero.aka (0.333)                    | 0.065  |
| 11  | Marissa joga futebol?                                                    | home.info.summary (3)                                                                                                                                                                                                                         | 3         | home.hero.aka (0.452)                    | home.hero.role (0.373)               | **home.info.summary** (0.351)            | 0.079  |
| 12  | Where is she located?                                                    | home.info.summary (4)                                                                                                                                                                                                                         | 4         | home.hero.role (0.486)                   | home.info.title (0.371)              | home.hero.aka (0.361)                    | 0.115  |
| 13  | What companies has Marissa worked for?                                   | home.info.summary (2)                                                                                                                                                                                                                         | 2         | home.hero.role (0.438)                   | **home.info.summary** (0.333)        | home.info.title (0.306)                  | 0.105  |
| 14  | Does she still play soccer?                                              | home.info.summary (3)                                                                                                                                                                                                                         | 3         | home.hero.aka (0.554)                    | home.hero.role (0.376)               | **home.info.summary** (0.348)            | 0.179  |
| 15  | Ela sabe usar ferramentas de IA, como o Claude?                          | browserBot.roleSummary (1), pixelPup.keywords (6), pixelPup.skills.2 (13), pixelPup.roleSummary (15)                                                                                                                                          | 1         | **browserBot.roleSummary** (0.182)       | garmentSegmentation.keywords (0.161) | garmentSegmentation.skills.4 (0.158)     | 0.022  |
| 16  | Does Marissa like dogs?                                                  | pixelPup.roleSummary (4)                                                                                                                                                                                                                      | 4         | home.info.title (0.302)                  | home.hero.summary (0.276)            | home.hero.role (0.273)                   | 0.025  |
| 17  | Has she ever used FastAPI?                                               | garmentSegmentation.skills.8 (3), garmentSegmentation.roleSummary (6), garmentSegmentation.keywords (14)                                                                                                                                      | 3         | home.hero.role (0.355)                   | home.info.title (0.313)              | **garmentSegmentation.skills.8** (0.266) | 0.042  |
| 18  | Has Marissa ever worked on open source projects?                         | pixelPup.keywords (5), garmentSegmentation.overview (11), browserBot.overview (14), pixelPup.overview (16)                                                                                                                                    | 5         | home.hero.role (0.457)                   | home.info.title (0.426)              | home.info.summary (0.383)                | 0.031  |
| 19  | What does she know about testing?                                        | garmentSegmentation.skills.7 (5), garmentSegmentation.skills.6 (7), pixelPup.skills.2 (9), browserBot.skills.0 (11), pixelPup.roleSummary (14)                                                                                                | 5         | home.info.title (0.424)                  | home.hero.role (0.415)               | home.info.summary (0.354)                | 0.010  |
| 20  | What kind of models has she worked with?                                 | garmentSegmentation.skills.0 (7), garmentSegmentation.roleSummary (10), garmentSegmentation.keywords (11), garmentSegmentation.overview (12), browserBot.skills.1 (16), browserBot.skills.0 (31), browserBot.skills.2 (32)                    | 7         | home.hero.role (0.544)                   | home.info.title (0.506)              | home.info.summary (0.500)                | 0.038  |
| 21  | What was Claude's role for the browser bot?                              | browserBot.roleSummary (1)                                                                                                                                                                                                                    | 1         | **browserBot.roleSummary** (0.772)       | browserBot.overview (0.604)          | browserBot.keywords (0.475)              | 0.168  |
| 22  | What was the primary language used for the browser bot project?          | browserBot.keywords (2)                                                                                                                                                                                                                       | 2         | browserBot.roleSummary (0.705)           | **browserBot.keywords** (0.671)      | browserBot.overview (0.625)              | 0.033  |
| 23  | What was the primary language used for the garment segmentation project? | garmentSegmentation.keywords (1)                                                                                                                                                                                                              | 1         | **garmentSegmentation.keywords** (0.643) | garmentSegmentation.skills.0 (0.637) | garmentSegmentation.overview (0.634)     | 0.006  |
| 24  | Did Claude play a role in the pixel pup project?                         | pixelPup.skills.2 (1), pixelPup.roleSummary (4)                                                                                                                                                                                               | 1         | **pixelPup.skills.2** (0.640)            | pixelPup.skills.1 (0.604)            | pixelPup.keywords (0.571)                | 0.036  |
| 25  | What was the primary language used for the pixel pup project?            | pixelPup.keywords (1)                                                                                                                                                                                                                         | 1         | **pixelPup.keywords** (0.668)            | pixelPup.skills.0 (0.649)            | pixelPup.skills.1 (0.617)                | 0.019  |
| 26  | What does Marissa know about working with artificial intelligence?       | home.info.title (1), browserBot.overview (11), garmentSegmentation.overview (13), garmentSegmentation.keywords (16), pixelPup.overview (17)                                                                                                   | 1         | **home.info.title** (0.549)              | home.hero.role (0.449)               | home.info.summary (0.366)                | 0.100  |

## Questions with no answer in the content (12)

| #   | Question                                                    | First (score)                        | Second (score)                       | Third (score)                        | Margin |
| --- | ----------------------------------------------------------- | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------ |
| 27  | Did Claude play a role in the garment segmentation project? | garmentSegmentation.overview (0.547) | garmentSegmentation.keywords (0.536) | garmentSegmentation.skills.0 (0.536) | 0.011  |
| 28  | Can I speak to a human?                                     | browserBot.overview (0.279)          | browserBot.skills.0 (0.201)          | browserBot.roleSummary (0.184)       | 0.078  |
| 29  | What is her favorite color?                                 | home.hero.summary (0.328)            | home.info.title (0.314)              | home.hero.role (0.249)               | 0.014  |
| 30  | How many years of experience does she have?                 | home.hero.role (0.496)               | home.info.title (0.445)              | home.info.summary (0.379)            | 0.051  |
| 31  | What should I ask her about in an interview?                | home.info.title (0.346)              | home.hero.role (0.337)               | home.hero.summary (0.308)            | 0.009  |
| 32  | What is the meaning of life?                                | home.hero.aka (0.140)                | browserBot.skills.2 (0.134)          | browserBot.overview (0.130)          | 0.006  |
| 33  | What do you think about her?                                | home.info.title (0.379)              | home.hero.role (0.352)               | home.hero.summary (0.317)            | 0.027  |
| 34  | Did she go to school for engineering or computer science?   | home.hero.role (0.580)               | home.info.summary (0.497)            | home.info.title (0.485)              | 0.083  |
| 35  | Ela sabe falar português?                                   | home.info.summary (0.171)            | home.hero.aka (0.141)                | pixelPup.keywords (0.091)            | 0.030  |
| 36  | Does Marissa know Java?                                     | home.info.title (0.435)              | home.hero.role (0.391)               | home.info.summary (0.345)            | 0.044  |
| 37  | Where was Marissa born?                                     | home.hero.role (0.378)               | home.hero.aka (0.286)                | home.info.title (0.245)              | 0.092  |
| 38  | Where is Marissa authorized to work?                        | home.hero.role (0.374)               | home.info.summary (0.288)            | home.info.title (0.252)              | 0.086  |

## Breakdown

### Questions with expected chunks (27)

Rank of the best expected chunk:

| Rank | Count | Questions                                         |
| ---- | ----- | ------------------------------------------------- |
| 1    | 15    | 0, 1, 3, 4, 5, 6, 7, 8, 9, 15, 21, 23, 24, 25, 26 |
| 2    | 3     | 10, 13, 22                                        |
| 3    | 4     | 2, 11, 14, 17                                     |
| 4    | 2     | 12, 16                                            |
| 5    | 2     | 18, 19                                            |
| 7    | 1     | 20                                                |

Cumulative: 15 in the top 1 (56%), 18 in the top 2 (67%), 22 in the top 3 (81%), 26 in the top 5 (96%).

| Measure                                       | Max   | Min   | Mean  | Median |
| --------------------------------------------- | ----- | ----- | ----- | ------ |
| Best expected chunk's score                   | 0.772 | 0.182 | 0.485 | 0.470  |
| First-place score (all 27)                    | 0.772 | 0.182 | 0.537 | 0.552  |
| First-place score, expected ranked first (15) | 0.772 | 0.182 | 0.588 | 0.625  |
| First-place score, expected not first (12)    | 0.705 | 0.302 | 0.473 | 0.454  |
| Margin (all 27)                               | 0.297 | 0.006 | 0.095 | 0.090  |
| Margin, expected ranked first (15)            | 0.297 | 0.006 | 0.116 | 0.114  |
| Margin, expected not first (12)               | 0.179 | 0.010 | 0.068 | 0.053  |

- The lowest correct first-place score is 0.182 (#15). The next lowest is 0.469 (#6).
- Of the 12 questions where the expected chunk was not first, the first-place chunk was a home chunk in 11: `hero.role` (7), `hero.aka` (2) and `info.title` (2). The other was #22, where `browserBot.roleSummary` (0.705) ranked above `browserBot.keywords`.

### Questions with no answer in the content (12)

| Measure           | Max   | Min   | Mean  | Median |
| ----------------- | ----- | ----- | ----- | ------ |
| First-place score | 0.580 | 0.140 | 0.371 | 0.376  |
| Margin            | 0.092 | 0.006 | 0.044 | 0.037  |

First-place scores, highest first:

| #   | Question                                                    | First score | Margin |
| --- | ----------------------------------------------------------- | ----------- | ------ |
| 34  | Did she go to school for engineering or computer science?   | 0.580       | 0.083  |
| 27  | Did Claude play a role in the garment segmentation project? | 0.547       | 0.011  |
| 30  | How many years of experience does she have?                 | 0.496       | 0.051  |
| 36  | Does Marissa know Java?                                     | 0.435       | 0.044  |
| 33  | What do you think about her?                                | 0.379       | 0.027  |
| 37  | Where was Marissa born?                                     | 0.378       | 0.092  |
| 38  | Where is Marissa authorized to work?                        | 0.374       | 0.086  |
| 31  | What should I ask her about in an interview?                | 0.346       | 0.009  |
| 29  | What is her favorite color?                                 | 0.328       | 0.014  |
| 28  | Can I speak to a human?                                     | 0.279       | 0.078  |
| 35  | Ela sabe falar português?                                   | 0.171       | 0.030  |
| 32  | What is the meaning of life?                                | 0.140       | 0.006  |

### Home and experience chunks in first place (all 39)

- First place: 31 home chunks, 8 experience chunks.
- The 8 with an experience chunk first are #15, 21, 22, 23, 24, 25, 27 and 28. Their top 3 are all experience chunks. Seven name a project or Claude (#15 in Portuguese); #28 ("Can I speak to a human?") names neither, and its top 3 are all Browser Bot chunks.
- Top 3 all home chunks: 28 questions. Mixed top 3: #17 (home, home, `garmentSegmentation.skills.8`), #32 (home, `browserBot.skills.2`, `browserBot.overview`) and #35 (home, home, `pixelPup.keywords`).

### Answered questions repeated from 2026-11-19 (11)

Not like-for-like: the content changed, and #2, 5, 6 and 7 have more expected chunks than on 2026-11-19.

| #   | Question                            | 2026-11-19: first (score), margin, rank of expected | 2026-11-23: first (score), margin, rank of best expected |
| --- | ----------------------------------- | --------------------------------------------------- | -------------------------------------------------------- |
| 0   | What kind of engineer is she?       | hero.role (0.735), 0.250, 1                         | hero.role (0.743), 0.133, 1                              |
| 1   | What does she enjoy doing?          | hero.summary (0.564), 0.217, 1                      | hero.summary (0.563), 0.128, 1                           |
| 2   | What has she built before?          | hero.role (0.546), 0.098, 2                         | hero.role (0.552), 0.099, 3                              |
| 3   | What did her soccer coach call her? | hero.aka (0.655), 0.287, 1                          | hero.aka (0.664), 0.297, 1                               |
| 4   | What position did Marissa play...?  | hero.aka (0.597), 0.171, 1                          | hero.aka (0.608), 0.253, 1                               |
| 5   | Does she know anything about AI?    | info.title (0.531), 0.095, 1                        | info.title (0.643), 0.198, 1                             |
| 6   | What languages does she know?       | hero.role (0.353), 0.018, 2                         | info.title (0.469), 0.114, 1                             |
| 7   | Does she like to learn?             | hero.summary (0.417), 0.087, 2                      | info.title (0.470), 0.047, 1                             |
| 8   | Did she go to business school?      | info.summary (0.628), 0.141, 1                      | info.summary (0.625), 0.137, 1                           |
| 9   | Did she go to design school?        | info.summary (0.587), 0.097, 1                      | info.summary (0.586), 0.090, 1                           |
| 10  | Did Marissa have a previous career? | info.title (0.568), 0.155, 3                        | hero.role (0.402), 0.065, 2                              |

For #0, the second-place chunk `info.title` rose from 0.485 to 0.610.

**Notes:**

- Predictions were largely confirmed.
  - Clear, direct questions did well and grew slightly more confident: #3 and #4 rose in both score and margin.
  - #0 still ranked its expected chunk first with a high score (0.743), but its margin shrank from 0.250 to 0.133 as `info.title` rose.
  - Indirect questions are still a challenge.
  - The questions expected to do poorly did (#2, 12, 14 and 16). The plan is to write better chunks for them.
- No-answer questions had small margins (at most 0.092, median 0.037).
  - The three highest-scoring were #34 (0.580), #27 (0.547) and #30 (0.496). These are questions that would be answered more explicitly with more context.
  - However, neither margin nor score alone separates them from answered questions. Some correct first places have smaller margins (#23 at 0.006, #25 at 0.019, #15 at 0.022), and #34 scored above correct first places such as #6 (0.469) and #7 (0.470).
  - Right now no-answer questions reach 0.580 and correct answers go as low as 0.469 (0.182 counting Portuguese).
  - The lowest score among correct answers should sit clearly above the highest no-answer score, and stay there across rounds.
- Portuguese questions scored low, except #15, which shares the word "Claude" with the content.
  - The interface should say the bot works best in English, next to the line saying it is AI and can make mistakes.
- Search favours home chunks. 31 of 39 questions ranked a home chunk first. The 8 that ranked an experience chunk first all name a project or Claude, except #28.
  - General skills questions (#17–20) defaulted to home chunks.
  - Wording may be part of the cause: home chunks are sentences about "she", like most questions, while experience chunks have no subject.
  - It could be worthwhile to potentially re-write the home chunks to not have the pronouns as well.
- The content changes revealed instability in the scores.
  - The loss of "Hi! She is Marissa." in `info.title` increased scores for both #5 and #0, which also resulted in lower margin for #0.
  - The new chunks change the rankings, not the scores. This is good, because we only want to take the top few, but can also make a singular cut-off number harder to determine across the chunks.
  - Unchanged chunks still had slight differences, probably from "batching". Because the extractor embeds all the content as chunks in one call, and that changed between this run and the last, there appears to be a small drift in scores where the content didn't change.
  - Margin, especially between the top two might not matter so much. The search will likely need to pass multiple high ranked chunks. Top-k is likely a better selection cutoff, which as shown above shows that 81% were in the top 3.
    - A variable k might be justified - include every chunk within some distance of the top score, so keeping an eye out for a drop after a certain number of chunks in future tests will be necessary.

- Conclusion: No cutoff can be set from this run either. The eventual relevance check will need to combine signals. So, next steps are to pause here and start testing a generator, where chunks will be given by hand. It should be started now because it does not depend on search and is the bigger unknown, and its results may change what the content needs. Then another search round with more bot-only content, with more attention to top-k and less to margin. Written summaries of skills and of what to highlight, plus better chunks for the weak questions. Try the summaries with pronouns like the `home` section to see if that makes a difference. Otherwise, those might need to be rewritten to not use pronouns. More questions might be needed, especially for no-answer questions, but that's also why the move towards the generation. There are designs to help guide the content, like keyword search, the router, and answer checker.

## Full ranking per question

<details>
<summary>0. What kind of engineer is she?</summary>

| Rank | Expected | Chunk                           | Score  |
| ---- | -------- | ------------------------------- | ------ |
| 1    | ✓        | home.hero.role                  | 0.743  |
| 2    |          | home.info.title                 | 0.610  |
| 3    |          | home.info.summary               | 0.470  |
| 4    |          | home.hero.summary               | 0.451  |
| 5    |          | home.hero.aka                   | 0.428  |
| 6    | ✓        | browserBot.overview             | 0.263  |
| 7    |          | pixelPup.keywords               | 0.258  |
| 8    | ✓        | pixelPup.overview               | 0.185  |
| 9    |          | browserBot.keywords             | 0.184  |
| 10   |          | pixelPup.skills.1               | 0.182  |
| 11   |          | browserBot.roleSummary          | 0.158  |
| 12   |          | browserBot.skills.1             | 0.156  |
| 13   |          | pixelPup.roleSummary            | 0.154  |
| 14   |          | pixelPup.skills.0               | 0.151  |
| 15   |          | garmentSegmentation.skills.8    | 0.144  |
| 16   | ✓        | garmentSegmentation.overview    | 0.144  |
| 17   |          | pixelPup.skills.5               | 0.141  |
| 18   |          | garmentSegmentation.keywords    | 0.132  |
| 19   |          | pixelPup.skills.2               | 0.112  |
| 20   |          | garmentSegmentation.roleSummary | 0.100  |
| 21   |          | garmentSegmentation.skills.9    | 0.096  |
| 22   |          | garmentSegmentation.skills.6    | 0.095  |
| 23   |          | pixelPup.skills.3               | 0.093  |
| 24   |          | garmentSegmentation.skills.7    | 0.087  |
| 25   |          | browserBot.skills.2             | 0.082  |
| 26   |          | pixelPup.skills.4               | 0.078  |
| 27   |          | garmentSegmentation.skills.0    | 0.070  |
| 28   |          | garmentSegmentation.skills.5    | 0.064  |
| 29   |          | garmentSegmentation.skills.4    | 0.064  |
| 30   |          | browserBot.skills.0             | 0.057  |
| 31   |          | garmentSegmentation.skills.3    | 0.002  |
| 32   |          | garmentSegmentation.skills.1    | -0.007 |
| 33   |          | garmentSegmentation.skills.2    | -0.029 |

</details>

<details>
<summary>1. What does she enjoy doing?</summary>

| Rank | Expected | Chunk                           | Score  |
| ---- | -------- | ------------------------------- | ------ |
| 1    | ✓        | home.hero.summary               | 0.563  |
| 2    |          | home.info.title                 | 0.435  |
| 3    |          | home.hero.role                  | 0.364  |
| 4    | ✓        | home.info.summary               | 0.350  |
| 5    |          | home.hero.aka                   | 0.267  |
| 6    |          | pixelPup.keywords               | 0.116  |
| 7    |          | pixelPup.skills.0               | 0.106  |
| 8    |          | browserBot.overview             | 0.095  |
| 9    |          | garmentSegmentation.keywords    | 0.082  |
| 10   |          | browserBot.skills.1             | 0.078  |
| 11   |          | browserBot.skills.2             | 0.074  |
| 12   |          | pixelPup.roleSummary            | 0.074  |
| 13   |          | pixelPup.skills.3               | 0.063  |
| 14   |          | pixelPup.skills.5               | 0.062  |
| 15   |          | browserBot.keywords             | 0.060  |
| 16   |          | pixelPup.skills.1               | 0.054  |
| 17   |          | garmentSegmentation.skills.8    | 0.051  |
| 18   |          | browserBot.roleSummary          | 0.048  |
| 19   |          | garmentSegmentation.skills.9    | 0.047  |
| 20   |          | pixelPup.skills.4               | 0.044  |
| 21   |          | pixelPup.overview               | 0.027  |
| 22   |          | garmentSegmentation.overview    | 0.023  |
| 23   |          | garmentSegmentation.roleSummary | 0.022  |
| 24   |          | garmentSegmentation.skills.5    | 0.022  |
| 25   |          | garmentSegmentation.skills.4    | 0.016  |
| 26   |          | garmentSegmentation.skills.3    | 0.014  |
| 27   |          | pixelPup.skills.2               | 0.010  |
| 28   |          | garmentSegmentation.skills.0    | -0.007 |
| 29   |          | browserBot.skills.0             | -0.008 |
| 30   |          | garmentSegmentation.skills.6    | -0.015 |
| 31   |          | garmentSegmentation.skills.1    | -0.023 |
| 32   |          | garmentSegmentation.skills.2    | -0.038 |
| 33   |          | garmentSegmentation.skills.7    | -0.055 |

</details>

<details>
<summary>2. What has she built before?</summary>

| Rank | Expected | Chunk                           | Score |
| ---- | -------- | ------------------------------- | ----- |
| 1    |          | home.hero.role                  | 0.552 |
| 2    |          | home.info.title                 | 0.453 |
| 3    | ✓        | home.hero.summary               | 0.442 |
| 4    | ✓        | home.info.summary               | 0.393 |
| 5    |          | home.hero.aka                   | 0.354 |
| 6    |          | pixelPup.keywords               | 0.276 |
| 7    |          | pixelPup.skills.1               | 0.241 |
| 8    |          | pixelPup.skills.5               | 0.209 |
| 9    |          | pixelPup.skills.0               | 0.202 |
| 10   | ✓        | garmentSegmentation.skills.8    | 0.174 |
| 11   |          | pixelPup.skills.3               | 0.159 |
| 12   |          | pixelPup.roleSummary            | 0.156 |
| 13   |          | browserBot.skills.1             | 0.152 |
| 14   | ✓        | pixelPup.overview               | 0.151 |
| 15   |          | pixelPup.skills.2               | 0.137 |
| 16   |          | garmentSegmentation.keywords    | 0.129 |
| 17   |          | garmentSegmentation.skills.6    | 0.124 |
| 18   |          | pixelPup.skills.4               | 0.123 |
| 19   |          | browserBot.roleSummary          | 0.121 |
| 20   |          | browserBot.skills.2             | 0.114 |
| 21   | ✓        | browserBot.overview             | 0.101 |
| 22   | ✓        | garmentSegmentation.roleSummary | 0.099 |
| 23   |          | garmentSegmentation.skills.5    | 0.096 |
| 24   |          | garmentSegmentation.skills.3    | 0.095 |
| 25   | ✓        | garmentSegmentation.overview    | 0.081 |
| 26   |          | garmentSegmentation.skills.7    | 0.076 |
| 27   |          | garmentSegmentation.skills.0    | 0.067 |
| 28   |          | browserBot.skills.0             | 0.065 |
| 29   | ✓        | garmentSegmentation.skills.4    | 0.058 |
| 30   |          | browserBot.keywords             | 0.056 |
| 31   |          | garmentSegmentation.skills.2    | 0.045 |
| 32   |          | garmentSegmentation.skills.1    | 0.041 |
| 33   |          | garmentSegmentation.skills.9    | 0.031 |

</details>

<details>
<summary>3. What did her soccer coach call her?</summary>

| Rank | Expected | Chunk                           | Score  |
| ---- | -------- | ------------------------------- | ------ |
| 1    | ✓        | home.hero.aka                   | 0.664  |
| 2    |          | home.hero.role                  | 0.368  |
| 3    |          | home.info.summary               | 0.335  |
| 4    |          | home.info.title                 | 0.256  |
| 5    |          | browserBot.skills.1             | 0.130  |
| 6    |          | garmentSegmentation.skills.1    | 0.121  |
| 7    |          | browserBot.roleSummary          | 0.109  |
| 8    |          | home.hero.summary               | 0.102  |
| 9    |          | garmentSegmentation.overview    | 0.101  |
| 10   |          | garmentSegmentation.roleSummary | 0.099  |
| 11   |          | pixelPup.keywords               | 0.094  |
| 12   |          | garmentSegmentation.skills.4    | 0.093  |
| 13   |          | pixelPup.skills.1               | 0.081  |
| 14   |          | pixelPup.roleSummary            | 0.080  |
| 15   |          | browserBot.overview             | 0.079  |
| 16   |          | pixelPup.skills.3               | 0.077  |
| 17   |          | pixelPup.skills.2               | 0.077  |
| 18   |          | browserBot.keywords             | 0.068  |
| 19   |          | garmentSegmentation.skills.9    | 0.067  |
| 20   |          | pixelPup.overview               | 0.067  |
| 21   |          | garmentSegmentation.skills.0    | 0.064  |
| 22   |          | garmentSegmentation.skills.3    | 0.061  |
| 23   |          | garmentSegmentation.keywords    | 0.060  |
| 24   |          | garmentSegmentation.skills.8    | 0.050  |
| 25   |          | pixelPup.skills.0               | 0.045  |
| 26   |          | garmentSegmentation.skills.5    | 0.044  |
| 27   |          | browserBot.skills.2             | 0.044  |
| 28   |          | garmentSegmentation.skills.2    | 0.042  |
| 29   |          | garmentSegmentation.skills.6    | 0.017  |
| 30   |          | browserBot.skills.0             | 0.003  |
| 31   |          | garmentSegmentation.skills.7    | -0.012 |
| 32   |          | pixelPup.skills.5               | -0.012 |
| 33   |          | pixelPup.skills.4               | -0.036 |

</details>

<details>
<summary>4. What position did Marissa play in soccer?</summary>

| Rank | Expected | Chunk                           | Score  |
| ---- | -------- | ------------------------------- | ------ |
| 1    | ✓        | home.hero.aka                   | 0.608  |
| 2    |          | home.hero.role                  | 0.355  |
| 3    |          | home.info.summary               | 0.304  |
| 4    |          | home.info.title                 | 0.198  |
| 5    |          | garmentSegmentation.roleSummary | 0.095  |
| 6    |          | garmentSegmentation.skills.0    | 0.090  |
| 7    |          | garmentSegmentation.skills.4    | 0.085  |
| 8    |          | garmentSegmentation.skills.5    | 0.078  |
| 9    |          | garmentSegmentation.overview    | 0.078  |
| 10   |          | home.hero.summary               | 0.069  |
| 11   |          | pixelPup.skills.3               | 0.066  |
| 12   |          | garmentSegmentation.keywords    | 0.064  |
| 13   |          | pixelPup.skills.1               | 0.064  |
| 14   |          | garmentSegmentation.skills.1    | 0.062  |
| 15   |          | pixelPup.roleSummary            | 0.060  |
| 16   |          | garmentSegmentation.skills.2    | 0.057  |
| 17   |          | garmentSegmentation.skills.6    | 0.057  |
| 18   |          | pixelPup.skills.2               | 0.054  |
| 19   |          | pixelPup.keywords               | 0.051  |
| 20   |          | browserBot.skills.2             | 0.050  |
| 21   |          | garmentSegmentation.skills.9    | 0.050  |
| 22   |          | garmentSegmentation.skills.8    | 0.044  |
| 23   |          | browserBot.roleSummary          | 0.041  |
| 24   |          | browserBot.skills.1             | 0.031  |
| 25   |          | pixelPup.skills.0               | 0.030  |
| 26   |          | garmentSegmentation.skills.7    | 0.028  |
| 27   |          | pixelPup.overview               | 0.024  |
| 28   |          | garmentSegmentation.skills.3    | 0.021  |
| 29   |          | pixelPup.skills.5               | 0.010  |
| 30   |          | browserBot.keywords             | 0.006  |
| 31   |          | browserBot.skills.0             | -0.026 |
| 32   |          | browserBot.overview             | -0.037 |
| 33   |          | pixelPup.skills.4               | -0.048 |

</details>

<details>
<summary>5. Does she know anything about AI?</summary>

| Rank | Expected | Chunk                           | Score  |
| ---- | -------- | ------------------------------- | ------ |
| 1    | ✓        | home.info.title                 | 0.643  |
| 2    |          | home.hero.role                  | 0.445  |
| 3    |          | home.hero.summary               | 0.423  |
| 4    |          | home.info.summary               | 0.347  |
| 5    |          | home.hero.aka                   | 0.298  |
| 6    |          | browserBot.keywords             | 0.260  |
| 7    |          | browserBot.roleSummary          | 0.258  |
| 8    |          | pixelPup.roleSummary            | 0.221  |
| 9    | ✓        | browserBot.overview             | 0.221  |
| 10   |          | pixelPup.keywords               | 0.213  |
| 11   |          | browserBot.skills.0             | 0.198  |
| 12   |          | pixelPup.skills.1               | 0.196  |
| 13   |          | browserBot.skills.2             | 0.195  |
| 14   |          | pixelPup.skills.0               | 0.181  |
| 15   |          | pixelPup.skills.5               | 0.173  |
| 16   | ✓        | pixelPup.overview               | 0.169  |
| 17   |          | pixelPup.skills.2               | 0.167  |
| 18   |          | browserBot.skills.1             | 0.157  |
| 19   |          | pixelPup.skills.4               | 0.131  |
| 20   | ✓        | garmentSegmentation.overview    | 0.119  |
| 21   | ✓        | garmentSegmentation.keywords    | 0.116  |
| 22   |          | garmentSegmentation.skills.9    | 0.100  |
| 23   |          | garmentSegmentation.skills.5    | 0.092  |
| 24   |          | garmentSegmentation.roleSummary | 0.092  |
| 25   |          | pixelPup.skills.3               | 0.091  |
| 26   |          | garmentSegmentation.skills.0    | 0.072  |
| 27   |          | garmentSegmentation.skills.8    | 0.063  |
| 28   |          | garmentSegmentation.skills.3    | 0.061  |
| 29   |          | garmentSegmentation.skills.4    | 0.052  |
| 30   |          | garmentSegmentation.skills.7    | 0.052  |
| 31   |          | garmentSegmentation.skills.1    | 0.026  |
| 32   |          | garmentSegmentation.skills.2    | 0.026  |
| 33   |          | garmentSegmentation.skills.6    | -0.002 |

</details>

<details>
<summary>6. What languages does she know?</summary>

| Rank | Expected | Chunk                           | Score  |
| ---- | -------- | ------------------------------- | ------ |
| 1    | ✓        | home.info.title                 | 0.469  |
| 2    |          | home.hero.role                  | 0.355  |
| 3    |          | home.hero.aka                   | 0.270  |
| 4    |          | home.info.summary               | 0.268  |
| 5    |          | home.hero.summary               | 0.259  |
| 6    |          | browserBot.skills.1             | 0.129  |
| 7    | ✓        | browserBot.keywords             | 0.114  |
| 8    | ✓        | garmentSegmentation.keywords    | 0.099  |
| 9    | ✓        | pixelPup.keywords               | 0.099  |
| 10   |          | garmentSegmentation.skills.4    | 0.081  |
| 11   |          | garmentSegmentation.skills.3    | 0.080  |
| 12   |          | browserBot.roleSummary          | 0.066  |
| 13   |          | garmentSegmentation.skills.5    | 0.063  |
| 14   |          | browserBot.skills.2             | 0.059  |
| 15   |          | browserBot.overview             | 0.058  |
| 16   |          | garmentSegmentation.roleSummary | 0.057  |
| 17   |          | garmentSegmentation.skills.8    | 0.053  |
| 18   |          | pixelPup.roleSummary            | 0.053  |
| 19   |          | garmentSegmentation.skills.7    | 0.050  |
| 20   |          | pixelPup.skills.0               | 0.050  |
| 21   |          | garmentSegmentation.skills.0    | 0.043  |
| 22   |          | pixelPup.skills.2               | 0.038  |
| 23   |          | garmentSegmentation.skills.1    | 0.032  |
| 24   |          | garmentSegmentation.overview    | 0.032  |
| 25   |          | garmentSegmentation.skills.9    | 0.024  |
| 26   |          | pixelPup.skills.3               | 0.018  |
| 27   |          | pixelPup.overview               | 0.014  |
| 28   |          | pixelPup.skills.5               | 0.001  |
| 29   |          | browserBot.skills.0             | -0.002 |
| 30   |          | pixelPup.skills.1               | -0.006 |
| 31   |          | garmentSegmentation.skills.6    | -0.015 |
| 32   |          | pixelPup.skills.4               | -0.015 |
| 33   |          | garmentSegmentation.skills.2    | -0.026 |

</details>

<details>
<summary>7. Does she like to learn?</summary>

| Rank | Expected | Chunk                           | Score  |
| ---- | -------- | ------------------------------- | ------ |
| 1    | ✓        | home.info.title                 | 0.470  |
| 2    |          | home.hero.summary               | 0.423  |
| 3    |          | home.info.summary               | 0.340  |
| 4    |          | home.hero.role                  | 0.314  |
| 5    |          | home.hero.aka                   | 0.205  |
| 6    |          | pixelPup.roleSummary            | 0.101  |
| 7    |          | browserBot.skills.2             | 0.085  |
| 8    |          | pixelPup.skills.0               | 0.065  |
| 9    |          | browserBot.skills.1             | 0.058  |
| 10   | ✓        | pixelPup.overview               | 0.055  |
| 11   |          | browserBot.keywords             | 0.053  |
| 12   | ✓        | garmentSegmentation.overview    | 0.050  |
| 13   |          | pixelPup.keywords               | 0.042  |
| 14   |          | browserBot.skills.0             | 0.041  |
| 15   |          | browserBot.roleSummary          | 0.038  |
| 16   |          | garmentSegmentation.skills.1    | 0.034  |
| 17   |          | garmentSegmentation.skills.3    | 0.032  |
| 18   |          | pixelPup.skills.5               | 0.031  |
| 19   | ✓        | browserBot.overview             | 0.030  |
| 20   |          | garmentSegmentation.keywords    | 0.027  |
| 21   |          | pixelPup.skills.2               | 0.026  |
| 22   |          | pixelPup.skills.4               | 0.025  |
| 23   |          | pixelPup.skills.1               | 0.016  |
| 24   |          | pixelPup.skills.3               | 0.010  |
| 25   |          | garmentSegmentation.skills.9    | -0.001 |
| 26   |          | garmentSegmentation.skills.7    | -0.008 |
| 27   |          | garmentSegmentation.skills.0    | -0.012 |
| 28   |          | garmentSegmentation.skills.4    | -0.012 |
| 29   |          | garmentSegmentation.roleSummary | -0.018 |
| 30   |          | garmentSegmentation.skills.8    | -0.018 |
| 31   |          | garmentSegmentation.skills.2    | -0.027 |
| 32   |          | garmentSegmentation.skills.5    | -0.032 |
| 33   |          | garmentSegmentation.skills.6    | -0.076 |

</details>

<details>
<summary>8. Did she go to business school?</summary>

| Rank | Expected | Chunk                           | Score  |
| ---- | -------- | ------------------------------- | ------ |
| 1    | ✓        | home.info.summary               | 0.625  |
| 2    |          | home.hero.role                  | 0.488  |
| 3    |          | home.info.title                 | 0.428  |
| 4    |          | home.hero.aka                   | 0.331  |
| 5    |          | home.hero.summary               | 0.295  |
| 6    |          | garmentSegmentation.skills.9    | 0.118  |
| 7    |          | garmentSegmentation.skills.6    | 0.113  |
| 8    |          | garmentSegmentation.overview    | 0.111  |
| 9    |          | pixelPup.skills.1               | 0.097  |
| 10   |          | pixelPup.keywords               | 0.096  |
| 11   |          | garmentSegmentation.keywords    | 0.090  |
| 12   |          | garmentSegmentation.roleSummary | 0.073  |
| 13   |          | garmentSegmentation.skills.5    | 0.065  |
| 14   |          | garmentSegmentation.skills.3    | 0.061  |
| 15   |          | browserBot.skills.1             | 0.058  |
| 16   |          | garmentSegmentation.skills.7    | 0.057  |
| 17   |          | garmentSegmentation.skills.4    | 0.047  |
| 18   |          | browserBot.keywords             | 0.041  |
| 19   |          | garmentSegmentation.skills.8    | 0.040  |
| 20   |          | garmentSegmentation.skills.0    | 0.038  |
| 21   |          | garmentSegmentation.skills.1    | 0.030  |
| 22   |          | browserBot.roleSummary          | 0.025  |
| 23   |          | browserBot.skills.0             | 0.020  |
| 24   |          | garmentSegmentation.skills.2    | 0.016  |
| 25   |          | pixelPup.skills.3               | 0.012  |
| 26   |          | pixelPup.skills.0               | 0.007  |
| 27   |          | pixelPup.skills.5               | 0.001  |
| 28   |          | browserBot.skills.2             | 0.000  |
| 29   |          | browserBot.overview             | -0.018 |
| 30   |          | pixelPup.roleSummary            | -0.022 |
| 31   |          | pixelPup.overview               | -0.036 |
| 32   |          | pixelPup.skills.2               | -0.043 |
| 33   |          | pixelPup.skills.4               | -0.089 |

</details>

<details>
<summary>9. Did she go to design school?</summary>

| Rank | Expected | Chunk                           | Score |
| ---- | -------- | ------------------------------- | ----- |
| 1    | ✓        | home.info.summary               | 0.586 |
| 2    |          | home.info.title                 | 0.496 |
| 3    |          | home.hero.role                  | 0.495 |
| 4    |          | home.hero.summary               | 0.316 |
| 5    |          | home.hero.aka                   | 0.301 |
| 6    |          | pixelPup.keywords               | 0.261 |
| 7    |          | pixelPup.skills.1               | 0.238 |
| 8    |          | garmentSegmentation.overview    | 0.189 |
| 9    |          | pixelPup.skills.5               | 0.171 |
| 10   |          | garmentSegmentation.keywords    | 0.162 |
| 11   |          | garmentSegmentation.skills.7    | 0.147 |
| 12   |          | garmentSegmentation.skills.8    | 0.139 |
| 13   |          | pixelPup.roleSummary            | 0.128 |
| 14   |          | garmentSegmentation.roleSummary | 0.120 |
| 15   |          | garmentSegmentation.skills.9    | 0.118 |
| 16   |          | browserBot.roleSummary          | 0.109 |
| 17   |          | garmentSegmentation.skills.0    | 0.108 |
| 18   |          | pixelPup.skills.4               | 0.104 |
| 19   |          | garmentSegmentation.skills.3    | 0.102 |
| 20   |          | pixelPup.overview               | 0.102 |
| 21   |          | pixelPup.skills.0               | 0.098 |
| 22   |          | garmentSegmentation.skills.5    | 0.096 |
| 23   |          | pixelPup.skills.2               | 0.092 |
| 24   |          | garmentSegmentation.skills.6    | 0.087 |
| 25   |          | garmentSegmentation.skills.1    | 0.087 |
| 26   |          | pixelPup.skills.3               | 0.084 |
| 27   |          | browserBot.keywords             | 0.067 |
| 28   |          | browserBot.skills.1             | 0.065 |
| 29   |          | browserBot.skills.0             | 0.059 |
| 30   |          | browserBot.skills.2             | 0.026 |
| 31   |          | garmentSegmentation.skills.2    | 0.025 |
| 32   |          | garmentSegmentation.skills.4    | 0.018 |
| 33   |          | browserBot.overview             | 0.005 |

</details>

<details>
<summary>10. Did Marissa have a previous career?</summary>

| Rank | Expected | Chunk                           | Score  |
| ---- | -------- | ------------------------------- | ------ |
| 1    |          | home.hero.role                  | 0.402  |
| 2    | ✓        | home.info.summary               | 0.337  |
| 3    |          | home.hero.aka                   | 0.333  |
| 4    |          | home.info.title                 | 0.303  |
| 5    |          | home.hero.summary               | 0.128  |
| 6    |          | garmentSegmentation.skills.9    | 0.121  |
| 7    |          | pixelPup.skills.1               | 0.116  |
| 8    |          | pixelPup.keywords               | 0.104  |
| 9    |          | browserBot.skills.2             | 0.093  |
| 10   |          | garmentSegmentation.skills.5    | 0.091  |
| 11   |          | garmentSegmentation.skills.3    | 0.082  |
| 12   |          | garmentSegmentation.skills.0    | 0.081  |
| 13   |          | garmentSegmentation.overview    | 0.080  |
| 14   |          | pixelPup.skills.3               | 0.079  |
| 15   |          | browserBot.keywords             | 0.075  |
| 16   |          | garmentSegmentation.roleSummary | 0.073  |
| 17   |          | garmentSegmentation.keywords    | 0.066  |
| 18   |          | garmentSegmentation.skills.7    | 0.065  |
| 19   |          | garmentSegmentation.skills.2    | 0.064  |
| 20   |          | garmentSegmentation.skills.4    | 0.060  |
| 21   |          | pixelPup.overview               | 0.055  |
| 22   |          | garmentSegmentation.skills.6    | 0.050  |
| 23   |          | browserBot.skills.1             | 0.036  |
| 24   |          | pixelPup.roleSummary            | 0.034  |
| 25   |          | garmentSegmentation.skills.8    | 0.031  |
| 26   |          | browserBot.roleSummary          | 0.029  |
| 27   |          | browserBot.skills.0             | 0.016  |
| 28   |          | pixelPup.skills.5               | 0.014  |
| 29   |          | garmentSegmentation.skills.1    | 0.009  |
| 30   |          | pixelPup.skills.0               | 0.009  |
| 31   |          | pixelPup.skills.2               | -0.006 |
| 32   |          | browserBot.overview             | -0.008 |
| 33   |          | pixelPup.skills.4               | -0.057 |

</details>

<details>
<summary>11. Marissa joga futebol?</summary>

| Rank | Expected | Chunk                           | Score  |
| ---- | -------- | ------------------------------- | ------ |
| 1    |          | home.hero.aka                   | 0.452  |
| 2    |          | home.hero.role                  | 0.373  |
| 3    | ✓        | home.info.summary               | 0.351  |
| 4    |          | home.info.title                 | 0.263  |
| 5    |          | home.hero.summary               | 0.127  |
| 6    |          | pixelPup.overview               | 0.104  |
| 7    |          | browserBot.skills.1             | 0.090  |
| 8    |          | pixelPup.skills.1               | 0.087  |
| 9    |          | garmentSegmentation.skills.4    | 0.086  |
| 10   |          | browserBot.skills.2             | 0.081  |
| 11   |          | garmentSegmentation.roleSummary | 0.081  |
| 12   |          | pixelPup.roleSummary            | 0.073  |
| 13   |          | garmentSegmentation.skills.5    | 0.071  |
| 14   |          | browserBot.roleSummary          | 0.066  |
| 15   |          | garmentSegmentation.skills.3    | 0.066  |
| 16   |          | garmentSegmentation.overview    | 0.066  |
| 17   |          | garmentSegmentation.skills.9    | 0.060  |
| 18   |          | pixelPup.keywords               | 0.051  |
| 19   |          | garmentSegmentation.skills.8    | 0.050  |
| 20   |          | browserBot.skills.0             | 0.048  |
| 21   |          | browserBot.overview             | 0.045  |
| 22   |          | pixelPup.skills.3               | 0.042  |
| 23   |          | garmentSegmentation.keywords    | 0.041  |
| 24   |          | browserBot.keywords             | 0.039  |
| 25   |          | garmentSegmentation.skills.2    | 0.037  |
| 26   |          | pixelPup.skills.2               | 0.036  |
| 27   |          | garmentSegmentation.skills.1    | 0.034  |
| 28   |          | garmentSegmentation.skills.0    | 0.033  |
| 29   |          | garmentSegmentation.skills.7    | 0.032  |
| 30   |          | garmentSegmentation.skills.6    | 0.009  |
| 31   |          | pixelPup.skills.0               | -0.003 |
| 32   |          | pixelPup.skills.5               | -0.017 |
| 33   |          | pixelPup.skills.4               | -0.036 |

</details>

<details>
<summary>12. Where is she located?</summary>

| Rank | Expected | Chunk                           | Score  |
| ---- | -------- | ------------------------------- | ------ |
| 1    |          | home.hero.role                  | 0.486  |
| 2    |          | home.info.title                 | 0.371  |
| 3    |          | home.hero.aka                   | 0.361  |
| 4    | ✓        | home.info.summary               | 0.346  |
| 5    |          | home.hero.summary               | 0.257  |
| 6    |          | pixelPup.skills.0               | 0.142  |
| 7    |          | pixelPup.overview               | 0.119  |
| 8    |          | pixelPup.keywords               | 0.115  |
| 9    |          | pixelPup.skills.1               | 0.111  |
| 10   |          | garmentSegmentation.skills.8    | 0.108  |
| 11   |          | browserBot.skills.1             | 0.085  |
| 12   |          | pixelPup.roleSummary            | 0.078  |
| 13   |          | pixelPup.skills.5               | 0.077  |
| 14   |          | pixelPup.skills.2               | 0.057  |
| 15   |          | garmentSegmentation.roleSummary | 0.056  |
| 16   |          | pixelPup.skills.3               | 0.037  |
| 17   |          | browserBot.roleSummary          | 0.037  |
| 18   |          | garmentSegmentation.keywords    | 0.035  |
| 19   |          | pixelPup.skills.4               | 0.032  |
| 20   |          | garmentSegmentation.overview    | 0.032  |
| 21   |          | garmentSegmentation.skills.5    | 0.030  |
| 22   |          | browserBot.overview             | 0.029  |
| 23   |          | garmentSegmentation.skills.1    | 0.024  |
| 24   |          | browserBot.keywords             | 0.003  |
| 25   |          | garmentSegmentation.skills.0    | 0.001  |
| 26   |          | garmentSegmentation.skills.6    | -0.003 |
| 27   |          | garmentSegmentation.skills.9    | -0.003 |
| 28   |          | garmentSegmentation.skills.4    | -0.023 |
| 29   |          | garmentSegmentation.skills.7    | -0.023 |
| 30   |          | browserBot.skills.2             | -0.035 |
| 31   |          | garmentSegmentation.skills.2    | -0.048 |
| 32   |          | garmentSegmentation.skills.3    | -0.051 |
| 33   |          | browserBot.skills.0             | -0.060 |

</details>

<details>
<summary>13. What companies has Marissa worked for?</summary>

| Rank | Expected | Chunk                           | Score  |
| ---- | -------- | ------------------------------- | ------ |
| 1    |          | home.hero.role                  | 0.438  |
| 2    | ✓        | home.info.summary               | 0.333  |
| 3    |          | home.info.title                 | 0.306  |
| 4    |          | garmentSegmentation.skills.9    | 0.272  |
| 5    |          | pixelPup.keywords               | 0.217  |
| 6    |          | home.hero.aka                   | 0.206  |
| 7    |          | home.hero.summary               | 0.205  |
| 8    |          | garmentSegmentation.roleSummary | 0.187  |
| 9    |          | garmentSegmentation.keywords    | 0.160  |
| 10   |          | garmentSegmentation.skills.5    | 0.159  |
| 11   |          | pixelPup.skills.1               | 0.155  |
| 12   |          | garmentSegmentation.skills.6    | 0.155  |
| 13   |          | garmentSegmentation.overview    | 0.155  |
| 14   |          | browserBot.keywords             | 0.151  |
| 15   |          | garmentSegmentation.skills.8    | 0.140  |
| 16   |          | pixelPup.skills.0               | 0.132  |
| 17   |          | garmentSegmentation.skills.7    | 0.122  |
| 18   |          | garmentSegmentation.skills.4    | 0.121  |
| 19   |          | garmentSegmentation.skills.3    | 0.117  |
| 20   |          | garmentSegmentation.skills.0    | 0.117  |
| 21   |          | pixelPup.overview               | 0.106  |
| 22   |          | garmentSegmentation.skills.2    | 0.104  |
| 23   |          | pixelPup.skills.5               | 0.101  |
| 24   |          | browserBot.skills.2             | 0.100  |
| 25   |          | pixelPup.skills.3               | 0.097  |
| 26   |          | pixelPup.skills.2               | 0.082  |
| 27   |          | pixelPup.roleSummary            | 0.074  |
| 28   |          | browserBot.overview             | 0.058  |
| 29   |          | garmentSegmentation.skills.1    | 0.052  |
| 30   |          | browserBot.skills.1             | 0.049  |
| 31   |          | browserBot.roleSummary          | 0.047  |
| 32   |          | pixelPup.skills.4               | 0.023  |
| 33   |          | browserBot.skills.0             | -0.012 |

</details>

<details>
<summary>14. Does she still play soccer?</summary>

| Rank | Expected | Chunk                           | Score  |
| ---- | -------- | ------------------------------- | ------ |
| 1    |          | home.hero.aka                   | 0.554  |
| 2    |          | home.hero.role                  | 0.376  |
| 3    | ✓        | home.info.summary               | 0.348  |
| 4    |          | home.info.title                 | 0.302  |
| 5    |          | home.hero.summary               | 0.236  |
| 6    |          | pixelPup.skills.1               | 0.119  |
| 7    |          | pixelPup.skills.3               | 0.117  |
| 8    |          | pixelPup.roleSummary            | 0.081  |
| 9    |          | pixelPup.keywords               | 0.066  |
| 10   |          | pixelPup.overview               | 0.062  |
| 11   |          | browserBot.skills.1             | 0.058  |
| 12   |          | garmentSegmentation.skills.4    | 0.057  |
| 13   |          | pixelPup.skills.2               | 0.048  |
| 14   |          | browserBot.skills.0             | 0.048  |
| 15   |          | pixelPup.skills.0               | 0.042  |
| 16   |          | garmentSegmentation.skills.0    | 0.038  |
| 17   |          | garmentSegmentation.skills.5    | 0.036  |
| 18   |          | pixelPup.skills.5               | 0.035  |
| 19   |          | garmentSegmentation.skills.9    | 0.035  |
| 20   |          | garmentSegmentation.skills.8    | 0.034  |
| 21   |          | garmentSegmentation.skills.6    | 0.031  |
| 22   |          | garmentSegmentation.skills.2    | 0.030  |
| 23   |          | garmentSegmentation.overview    | 0.021  |
| 24   |          | garmentSegmentation.roleSummary | 0.015  |
| 25   |          | garmentSegmentation.keywords    | 0.014  |
| 26   |          | garmentSegmentation.skills.1    | 0.013  |
| 27   |          | browserBot.roleSummary          | 0.007  |
| 28   |          | browserBot.skills.2             | 0.006  |
| 29   |          | browserBot.keywords             | -0.001 |
| 30   |          | garmentSegmentation.skills.7    | -0.004 |
| 31   |          | browserBot.overview             | -0.006 |
| 32   |          | garmentSegmentation.skills.3    | -0.008 |
| 33   |          | pixelPup.skills.4               | -0.018 |

</details>

<details>
<summary>15. Ela sabe usar ferramentas de IA, como o Claude?</summary>

| Rank | Expected | Chunk                           | Score  |
| ---- | -------- | ------------------------------- | ------ |
| 1    | ✓        | browserBot.roleSummary          | 0.182  |
| 2    |          | garmentSegmentation.keywords    | 0.161  |
| 3    |          | garmentSegmentation.skills.4    | 0.158  |
| 4    |          | garmentSegmentation.skills.5    | 0.148  |
| 5    |          | garmentSegmentation.skills.3    | 0.142  |
| 6    | ✓        | pixelPup.keywords               | 0.142  |
| 7    |          | garmentSegmentation.skills.1    | 0.133  |
| 8    |          | garmentSegmentation.skills.0    | 0.129  |
| 9    |          | home.hero.aka                   | 0.127  |
| 10   |          | garmentSegmentation.roleSummary | 0.118  |
| 11   |          | garmentSegmentation.overview    | 0.118  |
| 12   |          | garmentSegmentation.skills.9    | 0.108  |
| 13   | ✓        | pixelPup.skills.2               | 0.096  |
| 14   |          | browserBot.overview             | 0.087  |
| 15   | ✓        | pixelPup.roleSummary            | 0.087  |
| 16   |          | home.info.title                 | 0.079  |
| 17   |          | garmentSegmentation.skills.2    | 0.076  |
| 18   |          | home.info.summary               | 0.069  |
| 19   |          | browserBot.skills.1             | 0.057  |
| 20   |          | garmentSegmentation.skills.7    | 0.051  |
| 21   |          | garmentSegmentation.skills.8    | 0.046  |
| 22   |          | garmentSegmentation.skills.6    | 0.032  |
| 23   |          | pixelPup.overview               | 0.028  |
| 24   |          | pixelPup.skills.4               | 0.026  |
| 25   |          | browserBot.keywords             | 0.023  |
| 26   |          | home.hero.summary               | 0.023  |
| 27   |          | pixelPup.skills.0               | 0.014  |
| 28   |          | browserBot.skills.0             | 0.012  |
| 29   |          | home.hero.role                  | 0.005  |
| 30   |          | browserBot.skills.2             | 0.005  |
| 31   |          | pixelPup.skills.5               | -0.006 |
| 32   |          | pixelPup.skills.1               | -0.019 |
| 33   |          | pixelPup.skills.3               | -0.093 |

</details>

<details>
<summary>16. Does Marissa like dogs?</summary>

| Rank | Expected | Chunk                           | Score  |
| ---- | -------- | ------------------------------- | ------ |
| 1    |          | home.info.title                 | 0.302  |
| 2    |          | home.hero.summary               | 0.276  |
| 3    |          | home.hero.role                  | 0.273  |
| 4    | ✓        | pixelPup.roleSummary            | 0.240  |
| 5    |          | home.hero.aka                   | 0.203  |
| 6    |          | pixelPup.skills.3               | 0.198  |
| 7    |          | pixelPup.skills.0               | 0.193  |
| 8    |          | pixelPup.skills.1               | 0.186  |
| 9    |          | browserBot.skills.2             | 0.184  |
| 10   |          | home.info.summary               | 0.179  |
| 11   |          | pixelPup.overview               | 0.141  |
| 12   |          | garmentSegmentation.skills.0    | 0.139  |
| 13   |          | pixelPup.skills.2               | 0.137  |
| 14   |          | garmentSegmentation.skills.5    | 0.133  |
| 15   |          | pixelPup.keywords               | 0.129  |
| 16   |          | browserBot.keywords             | 0.121  |
| 17   |          | garmentSegmentation.roleSummary | 0.118  |
| 18   |          | pixelPup.skills.5               | 0.114  |
| 19   |          | browserBot.skills.0             | 0.102  |
| 20   |          | garmentSegmentation.skills.8    | 0.095  |
| 21   |          | browserBot.roleSummary          | 0.085  |
| 22   |          | garmentSegmentation.overview    | 0.076  |
| 23   |          | garmentSegmentation.skills.9    | 0.072  |
| 24   |          | browserBot.skills.1             | 0.067  |
| 25   |          | garmentSegmentation.skills.4    | 0.065  |
| 26   |          | pixelPup.skills.4               | 0.059  |
| 27   |          | garmentSegmentation.keywords    | 0.056  |
| 28   |          | garmentSegmentation.skills.3    | 0.055  |
| 29   |          | browserBot.overview             | 0.055  |
| 30   |          | garmentSegmentation.skills.7    | 0.052  |
| 31   |          | garmentSegmentation.skills.2    | 0.016  |
| 32   |          | garmentSegmentation.skills.1    | 0.003  |
| 33   |          | garmentSegmentation.skills.6    | -0.005 |

</details>

<details>
<summary>17. Has she ever used FastAPI?</summary>

| Rank | Expected | Chunk                           | Score  |
| ---- | -------- | ------------------------------- | ------ |
| 1    |          | home.hero.role                  | 0.355  |
| 2    |          | home.info.title                 | 0.313  |
| 3    | ✓        | garmentSegmentation.skills.8    | 0.266  |
| 4    |          | home.hero.aka                   | 0.246  |
| 5    |          | home.info.summary               | 0.225  |
| 6    | ✓        | garmentSegmentation.roleSummary | 0.194  |
| 7    |          | home.hero.summary               | 0.191  |
| 8    |          | pixelPup.skills.2               | 0.152  |
| 9    |          | pixelPup.roleSummary            | 0.147  |
| 10   |          | garmentSegmentation.skills.6    | 0.132  |
| 11   |          | browserBot.skills.1             | 0.121  |
| 12   |          | pixelPup.skills.5               | 0.097  |
| 13   |          | garmentSegmentation.skills.9    | 0.094  |
| 14   | ✓        | garmentSegmentation.keywords    | 0.091  |
| 15   |          | browserBot.keywords             | 0.089  |
| 16   |          | garmentSegmentation.skills.3    | 0.088  |
| 17   |          | pixelPup.overview               | 0.088  |
| 18   |          | browserBot.roleSummary          | 0.084  |
| 19   |          | pixelPup.skills.1               | 0.081  |
| 20   |          | pixelPup.keywords               | 0.078  |
| 21   |          | browserBot.skills.0             | 0.078  |
| 22   |          | browserBot.skills.2             | 0.073  |
| 23   |          | garmentSegmentation.skills.5    | 0.065  |
| 24   |          | garmentSegmentation.skills.7    | 0.064  |
| 25   |          | pixelPup.skills.0               | 0.062  |
| 26   |          | pixelPup.skills.3               | 0.041  |
| 27   |          | garmentSegmentation.skills.4    | 0.040  |
| 28   |          | pixelPup.skills.4               | 0.036  |
| 29   |          | garmentSegmentation.skills.2    | 0.030  |
| 30   |          | garmentSegmentation.skills.0    | 0.018  |
| 31   |          | browserBot.overview             | 0.014  |
| 32   |          | garmentSegmentation.skills.1    | -0.005 |
| 33   |          | garmentSegmentation.overview    | -0.009 |

</details>

<details>
<summary>18. Has Marissa ever worked on open source projects?</summary>

| Rank | Expected | Chunk                           | Score  |
| ---- | -------- | ------------------------------- | ------ |
| 1    |          | home.hero.role                  | 0.457  |
| 2    |          | home.info.title                 | 0.426  |
| 3    |          | home.info.summary               | 0.383  |
| 4    |          | home.hero.summary               | 0.353  |
| 5    | ✓        | pixelPup.keywords               | 0.336  |
| 6    |          | pixelPup.skills.1               | 0.283  |
| 7    |          | browserBot.roleSummary          | 0.247  |
| 8    |          | browserBot.keywords             | 0.239  |
| 9    |          | home.hero.aka                   | 0.231  |
| 10   |          | garmentSegmentation.skills.9    | 0.227  |
| 11   | ✓        | garmentSegmentation.overview    | 0.215  |
| 12   |          | browserBot.skills.2             | 0.202  |
| 13   |          | browserBot.skills.0             | 0.188  |
| 14   | ✓        | browserBot.overview             | 0.182  |
| 15   |          | garmentSegmentation.skills.6    | 0.164  |
| 16   | ✓        | pixelPup.overview               | 0.164  |
| 17   |          | pixelPup.skills.2               | 0.145  |
| 18   |          | garmentSegmentation.keywords    | 0.143  |
| 19   |          | pixelPup.roleSummary            | 0.142  |
| 20   |          | garmentSegmentation.skills.5    | 0.126  |
| 21   |          | pixelPup.skills.5               | 0.123  |
| 22   |          | browserBot.skills.1             | 0.115  |
| 23   |          | garmentSegmentation.roleSummary | 0.105  |
| 24   |          | pixelPup.skills.0               | 0.094  |
| 25   |          | garmentSegmentation.skills.3    | 0.083  |
| 26   |          | garmentSegmentation.skills.8    | 0.082  |
| 27   |          | pixelPup.skills.3               | 0.076  |
| 28   |          | garmentSegmentation.skills.7    | 0.073  |
| 29   |          | pixelPup.skills.4               | 0.061  |
| 30   |          | garmentSegmentation.skills.0    | 0.060  |
| 31   |          | garmentSegmentation.skills.2    | 0.040  |
| 32   |          | garmentSegmentation.skills.4    | 0.028  |
| 33   |          | garmentSegmentation.skills.1    | -0.034 |

</details>

<details>
<summary>19. What does she know about testing?</summary>

| Rank | Expected | Chunk                           | Score  |
| ---- | -------- | ------------------------------- | ------ |
| 1    |          | home.info.title                 | 0.424  |
| 2    |          | home.hero.role                  | 0.415  |
| 3    |          | home.info.summary               | 0.354  |
| 4    |          | home.hero.summary               | 0.337  |
| 5    | ✓        | garmentSegmentation.skills.7    | 0.316  |
| 6    |          | home.hero.aka                   | 0.214  |
| 7    | ✓        | garmentSegmentation.skills.6    | 0.184  |
| 8    |          | pixelPup.skills.0               | 0.151  |
| 9    | ✓        | pixelPup.skills.2               | 0.124  |
| 10   |          | garmentSegmentation.skills.3    | 0.124  |
| 11   | ✓        | browserBot.skills.0             | 0.123  |
| 12   |          | garmentSegmentation.skills.9    | 0.111  |
| 13   |          | pixelPup.skills.1               | 0.109  |
| 14   | ✓        | pixelPup.roleSummary            | 0.107  |
| 15   |          | pixelPup.overview               | 0.105  |
| 16   |          | pixelPup.skills.5               | 0.098  |
| 17   |          | garmentSegmentation.keywords    | 0.091  |
| 18   |          | garmentSegmentation.roleSummary | 0.089  |
| 19   |          | pixelPup.skills.3               | 0.084  |
| 20   |          | browserBot.overview             | 0.080  |
| 21   |          | browserBot.roleSummary          | 0.075  |
| 22   |          | browserBot.keywords             | 0.074  |
| 23   |          | pixelPup.keywords               | 0.073  |
| 24   |          | garmentSegmentation.skills.1    | 0.067  |
| 25   |          | browserBot.skills.2             | 0.061  |
| 26   |          | garmentSegmentation.skills.4    | 0.059  |
| 27   |          | garmentSegmentation.skills.5    | 0.046  |
| 28   |          | browserBot.skills.1             | 0.041  |
| 29   |          | garmentSegmentation.skills.8    | 0.039  |
| 30   |          | garmentSegmentation.overview    | 0.036  |
| 31   |          | garmentSegmentation.skills.0    | 0.027  |
| 32   |          | garmentSegmentation.skills.2    | 0.023  |
| 33   |          | pixelPup.skills.4               | -0.002 |

</details>

<details>
<summary>20. What kind of models has she worked with?</summary>

| Rank | Expected | Chunk                           | Score |
| ---- | -------- | ------------------------------- | ----- |
| 1    |          | home.hero.role                  | 0.544 |
| 2    |          | home.info.title                 | 0.506 |
| 3    |          | home.info.summary               | 0.500 |
| 4    |          | home.hero.summary               | 0.369 |
| 5    |          | home.hero.aka                   | 0.355 |
| 6    |          | pixelPup.keywords               | 0.314 |
| 7    | ✓        | garmentSegmentation.skills.0    | 0.285 |
| 8    |          | garmentSegmentation.skills.8    | 0.275 |
| 9    |          | pixelPup.skills.5               | 0.273 |
| 10   | ✓        | garmentSegmentation.roleSummary | 0.258 |
| 11   | ✓        | garmentSegmentation.keywords    | 0.252 |
| 12   | ✓        | garmentSegmentation.overview    | 0.239 |
| 13   |          | pixelPup.skills.0               | 0.235 |
| 14   |          | pixelPup.roleSummary            | 0.218 |
| 15   |          | garmentSegmentation.skills.5    | 0.217 |
| 16   | ✓        | browserBot.skills.1             | 0.214 |
| 17   |          | garmentSegmentation.skills.9    | 0.213 |
| 18   |          | pixelPup.skills.1               | 0.206 |
| 19   |          | pixelPup.skills.2               | 0.199 |
| 20   |          | pixelPup.overview               | 0.180 |
| 21   |          | garmentSegmentation.skills.2    | 0.176 |
| 22   |          | pixelPup.skills.4               | 0.167 |
| 23   |          | garmentSegmentation.skills.7    | 0.164 |
| 24   |          | garmentSegmentation.skills.1    | 0.158 |
| 25   |          | pixelPup.skills.3               | 0.152 |
| 26   |          | garmentSegmentation.skills.4    | 0.146 |
| 27   |          | garmentSegmentation.skills.6    | 0.133 |
| 28   |          | browserBot.roleSummary          | 0.119 |
| 29   |          | browserBot.keywords             | 0.117 |
| 30   |          | garmentSegmentation.skills.3    | 0.106 |
| 31   | ✓        | browserBot.skills.0             | 0.102 |
| 32   | ✓        | browserBot.skills.2             | 0.070 |
| 33   |          | browserBot.overview             | 0.057 |

</details>

<details>
<summary>21. What was Claude's role for the browser bot?</summary>

| Rank | Expected | Chunk                           | Score  |
| ---- | -------- | ------------------------------- | ------ |
| 1    | ✓        | browserBot.roleSummary          | 0.772  |
| 2    |          | browserBot.overview             | 0.604  |
| 3    |          | browserBot.keywords             | 0.475  |
| 4    |          | browserBot.skills.0             | 0.465  |
| 5    |          | browserBot.skills.2             | 0.425  |
| 6    |          | pixelPup.skills.2               | 0.413  |
| 7    |          | browserBot.skills.1             | 0.399  |
| 8    |          | pixelPup.roleSummary            | 0.333  |
| 9    |          | pixelPup.keywords               | 0.325  |
| 10   |          | pixelPup.skills.1               | 0.241  |
| 11   |          | pixelPup.skills.0               | 0.219  |
| 12   |          | pixelPup.overview               | 0.218  |
| 13   |          | pixelPup.skills.3               | 0.196  |
| 14   |          | home.hero.aka                   | 0.194  |
| 15   |          | pixelPup.skills.5               | 0.158  |
| 16   |          | home.info.title                 | 0.149  |
| 17   |          | pixelPup.skills.4               | 0.143  |
| 18   |          | garmentSegmentation.keywords    | 0.136  |
| 19   |          | home.hero.role                  | 0.118  |
| 20   |          | garmentSegmentation.skills.8    | 0.088  |
| 21   |          | home.info.summary               | 0.084  |
| 22   |          | garmentSegmentation.skills.9    | 0.083  |
| 23   |          | garmentSegmentation.skills.7    | 0.078  |
| 24   |          | home.hero.summary               | 0.074  |
| 25   |          | garmentSegmentation.skills.0    | 0.061  |
| 26   |          | garmentSegmentation.skills.3    | 0.034  |
| 27   |          | garmentSegmentation.roleSummary | 0.033  |
| 28   |          | garmentSegmentation.overview    | 0.013  |
| 29   |          | garmentSegmentation.skills.4    | -0.005 |
| 30   |          | garmentSegmentation.skills.2    | -0.013 |
| 31   |          | garmentSegmentation.skills.6    | -0.027 |
| 32   |          | garmentSegmentation.skills.5    | -0.045 |
| 33   |          | garmentSegmentation.skills.1    | -0.051 |

</details>

<details>
<summary>22. What was the primary language used for the browser bot project?</summary>

| Rank | Expected | Chunk                           | Score  |
| ---- | -------- | ------------------------------- | ------ |
| 1    |          | browserBot.roleSummary          | 0.705  |
| 2    | ✓        | browserBot.keywords             | 0.671  |
| 3    |          | browserBot.overview             | 0.625  |
| 4    |          | browserBot.skills.0             | 0.541  |
| 5    |          | browserBot.skills.2             | 0.538  |
| 6    |          | browserBot.skills.1             | 0.500  |
| 7    |          | pixelPup.keywords               | 0.352  |
| 8    |          | pixelPup.roleSummary            | 0.263  |
| 9    |          | pixelPup.skills.2               | 0.249  |
| 10   |          | pixelPup.skills.1               | 0.236  |
| 11   |          | pixelPup.skills.0               | 0.220  |
| 12   |          | pixelPup.overview               | 0.216  |
| 13   |          | pixelPup.skills.3               | 0.171  |
| 14   |          | home.info.title                 | 0.166  |
| 15   |          | garmentSegmentation.keywords    | 0.158  |
| 16   |          | pixelPup.skills.5               | 0.145  |
| 17   |          | home.hero.role                  | 0.113  |
| 18   |          | home.hero.aka                   | 0.111  |
| 19   |          | pixelPup.skills.4               | 0.110  |
| 20   |          | garmentSegmentation.skills.8    | 0.085  |
| 21   |          | garmentSegmentation.skills.0    | 0.071  |
| 22   |          | garmentSegmentation.skills.7    | 0.070  |
| 23   |          | garmentSegmentation.skills.9    | 0.070  |
| 24   |          | garmentSegmentation.skills.3    | 0.070  |
| 25   |          | garmentSegmentation.roleSummary | 0.052  |
| 26   |          | garmentSegmentation.overview    | 0.039  |
| 27   |          | home.info.summary               | 0.032  |
| 28   |          | home.hero.summary               | 0.025  |
| 29   |          | garmentSegmentation.skills.5    | 0.000  |
| 30   |          | garmentSegmentation.skills.4    | -0.022 |
| 31   |          | garmentSegmentation.skills.2    | -0.041 |
| 32   |          | garmentSegmentation.skills.1    | -0.045 |
| 33   |          | garmentSegmentation.skills.6    | -0.056 |

</details>

<details>
<summary>23. What was the primary language used for the garment segmentation project?</summary>

| Rank | Expected | Chunk                           | Score |
| ---- | -------- | ------------------------------- | ----- |
| 1    | ✓        | garmentSegmentation.keywords    | 0.643 |
| 2    |          | garmentSegmentation.skills.0    | 0.637 |
| 3    |          | garmentSegmentation.overview    | 0.634 |
| 4    |          | garmentSegmentation.roleSummary | 0.587 |
| 5    |          | garmentSegmentation.skills.1    | 0.587 |
| 6    |          | garmentSegmentation.skills.3    | 0.539 |
| 7    |          | garmentSegmentation.skills.9    | 0.505 |
| 8    |          | garmentSegmentation.skills.8    | 0.484 |
| 9    |          | garmentSegmentation.skills.2    | 0.483 |
| 10   |          | garmentSegmentation.skills.7    | 0.454 |
| 11   |          | garmentSegmentation.skills.4    | 0.433 |
| 12   |          | garmentSegmentation.skills.5    | 0.403 |
| 13   |          | pixelPup.keywords               | 0.312 |
| 14   |          | garmentSegmentation.skills.6    | 0.308 |
| 15   |          | pixelPup.skills.0               | 0.186 |
| 16   |          | pixelPup.skills.2               | 0.185 |
| 17   |          | home.info.summary               | 0.162 |
| 18   |          | pixelPup.skills.1               | 0.161 |
| 19   |          | pixelPup.skills.5               | 0.152 |
| 20   |          | browserBot.keywords             | 0.152 |
| 21   |          | home.info.title                 | 0.149 |
| 22   |          | browserBot.skills.1             | 0.137 |
| 23   |          | browserBot.roleSummary          | 0.115 |
| 24   |          | pixelPup.skills.4               | 0.105 |
| 25   |          | pixelPup.roleSummary            | 0.104 |
| 26   |          | home.hero.aka                   | 0.085 |
| 27   |          | browserBot.skills.2             | 0.075 |
| 28   |          | home.hero.role                  | 0.074 |
| 29   |          | pixelPup.skills.3               | 0.065 |
| 30   |          | home.hero.summary               | 0.050 |
| 31   |          | browserBot.overview             | 0.047 |
| 32   |          | pixelPup.overview               | 0.033 |
| 33   |          | browserBot.skills.0             | 0.018 |

</details>

<details>
<summary>24. Did Claude play a role in the pixel pup project?</summary>

| Rank | Expected | Chunk                           | Score  |
| ---- | -------- | ------------------------------- | ------ |
| 1    | ✓        | pixelPup.skills.2               | 0.640  |
| 2    |          | pixelPup.skills.1               | 0.604  |
| 3    |          | pixelPup.keywords               | 0.571  |
| 4    | ✓        | pixelPup.roleSummary            | 0.571  |
| 5    |          | pixelPup.skills.0               | 0.563  |
| 6    |          | pixelPup.skills.3               | 0.518  |
| 7    |          | pixelPup.skills.5               | 0.504  |
| 8    |          | pixelPup.overview               | 0.435  |
| 9    |          | pixelPup.skills.4               | 0.396  |
| 10   |          | browserBot.roleSummary          | 0.368  |
| 11   |          | garmentSegmentation.skills.8    | 0.225  |
| 12   |          | browserBot.skills.0             | 0.218  |
| 13   |          | home.info.title                 | 0.211  |
| 14   |          | garmentSegmentation.skills.9    | 0.196  |
| 15   |          | browserBot.overview             | 0.196  |
| 16   |          | browserBot.skills.1             | 0.172  |
| 17   |          | garmentSegmentation.keywords    | 0.168  |
| 18   |          | home.hero.role                  | 0.167  |
| 19   |          | home.hero.aka                   | 0.162  |
| 20   |          | browserBot.keywords             | 0.159  |
| 21   |          | garmentSegmentation.overview    | 0.149  |
| 22   |          | browserBot.skills.2             | 0.148  |
| 23   |          | garmentSegmentation.roleSummary | 0.143  |
| 24   |          | garmentSegmentation.skills.0    | 0.139  |
| 25   |          | garmentSegmentation.skills.7    | 0.121  |
| 26   |          | home.info.summary               | 0.117  |
| 27   |          | home.hero.summary               | 0.109  |
| 28   |          | garmentSegmentation.skills.2    | 0.104  |
| 29   |          | garmentSegmentation.skills.1    | 0.094  |
| 30   |          | garmentSegmentation.skills.6    | 0.053  |
| 31   |          | garmentSegmentation.skills.5    | 0.039  |
| 32   |          | garmentSegmentation.skills.4    | 0.011  |
| 33   |          | garmentSegmentation.skills.3    | -0.006 |

</details>

<details>
<summary>25. What was the primary language used for the pixel pup project?</summary>

| Rank | Expected | Chunk                           | Score  |
| ---- | -------- | ------------------------------- | ------ |
| 1    | ✓        | pixelPup.keywords               | 0.668  |
| 2    |          | pixelPup.skills.0               | 0.649  |
| 3    |          | pixelPup.skills.1               | 0.617  |
| 4    |          | pixelPup.skills.2               | 0.588  |
| 5    |          | pixelPup.roleSummary            | 0.584  |
| 6    |          | pixelPup.skills.3               | 0.572  |
| 7    |          | pixelPup.skills.5               | 0.556  |
| 8    |          | pixelPup.overview               | 0.473  |
| 9    |          | pixelPup.skills.4               | 0.456  |
| 10   |          | browserBot.roleSummary          | 0.320  |
| 11   |          | browserBot.skills.1             | 0.310  |
| 12   |          | browserBot.keywords             | 0.301  |
| 13   |          | home.info.title                 | 0.279  |
| 14   |          | browserBot.overview             | 0.265  |
| 15   |          | browserBot.skills.2             | 0.249  |
| 16   |          | browserBot.skills.0             | 0.240  |
| 17   |          | garmentSegmentation.skills.8    | 0.239  |
| 18   |          | garmentSegmentation.keywords    | 0.196  |
| 19   |          | home.hero.role                  | 0.187  |
| 20   |          | garmentSegmentation.skills.9    | 0.182  |
| 21   |          | garmentSegmentation.overview    | 0.165  |
| 22   |          | garmentSegmentation.skills.0    | 0.153  |
| 23   |          | garmentSegmentation.roleSummary | 0.153  |
| 24   |          | home.hero.aka                   | 0.134  |
| 25   |          | home.info.summary               | 0.123  |
| 26   |          | home.hero.summary               | 0.114  |
| 27   |          | garmentSegmentation.skills.7    | 0.106  |
| 28   |          | garmentSegmentation.skills.1    | 0.100  |
| 29   |          | garmentSegmentation.skills.3    | 0.097  |
| 30   |          | garmentSegmentation.skills.5    | 0.080  |
| 31   |          | garmentSegmentation.skills.2    | 0.044  |
| 32   |          | garmentSegmentation.skills.6    | 0.037  |
| 33   |          | garmentSegmentation.skills.4    | -0.015 |

</details>

<details>
<summary>26. What does Marissa know about working with artificial intelligence?</summary>

| Rank | Expected | Chunk                           | Score |
| ---- | -------- | ------------------------------- | ----- |
| 1    | ✓        | home.info.title                 | 0.549 |
| 2    |          | home.hero.role                  | 0.449 |
| 3    |          | home.info.summary               | 0.366 |
| 4    |          | home.hero.summary               | 0.340 |
| 5    |          | browserBot.keywords             | 0.303 |
| 6    |          | home.hero.aka                   | 0.265 |
| 7    |          | pixelPup.keywords               | 0.254 |
| 8    |          | pixelPup.skills.1               | 0.243 |
| 9    |          | browserBot.skills.2             | 0.238 |
| 10   |          | browserBot.roleSummary          | 0.232 |
| 11   | ✓        | browserBot.overview             | 0.213 |
| 12   |          | pixelPup.skills.0               | 0.192 |
| 13   | ✓        | garmentSegmentation.overview    | 0.189 |
| 14   |          | browserBot.skills.0             | 0.182 |
| 15   |          | pixelPup.roleSummary            | 0.178 |
| 16   | ✓        | garmentSegmentation.keywords    | 0.174 |
| 17   | ✓        | pixelPup.overview               | 0.161 |
| 18   |          | garmentSegmentation.skills.5    | 0.159 |
| 19   |          | pixelPup.skills.2               | 0.158 |
| 20   |          | pixelPup.skills.5               | 0.156 |
| 21   |          | garmentSegmentation.skills.9    | 0.152 |
| 22   |          | browserBot.skills.1             | 0.146 |
| 23   |          | garmentSegmentation.roleSummary | 0.133 |
| 24   |          | garmentSegmentation.skills.0    | 0.131 |
| 25   |          | garmentSegmentation.skills.7    | 0.109 |
| 26   |          | garmentSegmentation.skills.3    | 0.106 |
| 27   |          | pixelPup.skills.3               | 0.097 |
| 28   |          | garmentSegmentation.skills.4    | 0.090 |
| 29   |          | garmentSegmentation.skills.8    | 0.082 |
| 30   |          | pixelPup.skills.4               | 0.069 |
| 31   |          | garmentSegmentation.skills.2    | 0.059 |
| 32   |          | garmentSegmentation.skills.6    | 0.048 |
| 33   |          | garmentSegmentation.skills.1    | 0.043 |

</details>

<details>
<summary>27. Did Claude play a role in the garment segmentation project?</summary>

| Rank | Expected | Chunk                           | Score  |
| ---- | -------- | ------------------------------- | ------ |
| 1    |          | garmentSegmentation.overview    | 0.547  |
| 2    |          | garmentSegmentation.keywords    | 0.536  |
| 3    |          | garmentSegmentation.skills.0    | 0.536  |
| 4    |          | garmentSegmentation.skills.1    | 0.521  |
| 5    |          | garmentSegmentation.roleSummary | 0.474  |
| 6    |          | garmentSegmentation.skills.9    | 0.457  |
| 7    |          | garmentSegmentation.skills.2    | 0.456  |
| 8    |          | garmentSegmentation.skills.3    | 0.425  |
| 9    |          | garmentSegmentation.skills.8    | 0.416  |
| 10   |          | garmentSegmentation.skills.7    | 0.395  |
| 11   |          | garmentSegmentation.skills.4    | 0.373  |
| 12   |          | garmentSegmentation.skills.5    | 0.312  |
| 13   |          | pixelPup.keywords               | 0.298  |
| 14   |          | pixelPup.skills.2               | 0.295  |
| 15   |          | garmentSegmentation.skills.6    | 0.293  |
| 16   |          | browserBot.roleSummary          | 0.212  |
| 17   |          | pixelPup.skills.1               | 0.204  |
| 18   |          | pixelPup.skills.5               | 0.166  |
| 19   |          | pixelPup.skills.0               | 0.160  |
| 20   |          | home.info.summary               | 0.158  |
| 21   |          | pixelPup.roleSummary            | 0.143  |
| 22   |          | home.info.title                 | 0.127  |
| 23   |          | pixelPup.skills.4               | 0.120  |
| 24   |          | home.hero.aka                   | 0.100  |
| 25   |          | home.hero.summary               | 0.082  |
| 26   |          | home.hero.role                  | 0.061  |
| 27   |          | pixelPup.skills.3               | 0.060  |
| 28   |          | browserBot.skills.1             | 0.046  |
| 29   |          | browserBot.skills.0             | 0.032  |
| 30   |          | browserBot.keywords             | 0.026  |
| 31   |          | pixelPup.overview               | 0.024  |
| 32   |          | browserBot.overview             | 0.017  |
| 33   |          | browserBot.skills.2             | -0.000 |

</details>

<details>
<summary>28. Can I speak to a human?</summary>

| Rank | Expected | Chunk                           | Score  |
| ---- | -------- | ------------------------------- | ------ |
| 1    |          | browserBot.overview             | 0.279  |
| 2    |          | browserBot.skills.0             | 0.201  |
| 3    |          | browserBot.roleSummary          | 0.184  |
| 4    |          | browserBot.skills.1             | 0.161  |
| 5    |          | browserBot.keywords             | 0.156  |
| 6    |          | browserBot.skills.2             | 0.135  |
| 7    |          | home.info.title                 | 0.126  |
| 8    |          | pixelPup.skills.2               | 0.113  |
| 9    |          | home.hero.aka                   | 0.101  |
| 10   |          | pixelPup.roleSummary            | 0.087  |
| 11   |          | pixelPup.skills.0               | 0.083  |
| 12   |          | pixelPup.overview               | 0.082  |
| 13   |          | home.hero.role                  | 0.077  |
| 14   |          | home.info.summary               | 0.038  |
| 15   |          | garmentSegmentation.roleSummary | 0.031  |
| 16   |          | home.hero.summary               | 0.028  |
| 17   |          | garmentSegmentation.skills.0    | 0.026  |
| 18   |          | garmentSegmentation.skills.9    | 0.020  |
| 19   |          | garmentSegmentation.skills.4    | 0.017  |
| 20   |          | garmentSegmentation.overview    | 0.014  |
| 21   |          | pixelPup.skills.4               | 0.010  |
| 22   |          | pixelPup.keywords               | 0.008  |
| 23   |          | garmentSegmentation.keywords    | 0.007  |
| 24   |          | garmentSegmentation.skills.5    | -0.003 |
| 25   |          | pixelPup.skills.5               | -0.008 |
| 26   |          | garmentSegmentation.skills.8    | -0.010 |
| 27   |          | garmentSegmentation.skills.1    | -0.015 |
| 28   |          | pixelPup.skills.1               | -0.019 |
| 29   |          | garmentSegmentation.skills.3    | -0.024 |
| 30   |          | garmentSegmentation.skills.7    | -0.031 |
| 31   |          | garmentSegmentation.skills.2    | -0.058 |
| 32   |          | pixelPup.skills.3               | -0.080 |
| 33   |          | garmentSegmentation.skills.6    | -0.099 |

</details>

<details>
<summary>29. What is her favorite color?</summary>

| Rank | Expected | Chunk                           | Score  |
| ---- | -------- | ------------------------------- | ------ |
| 1    |          | home.hero.summary               | 0.328  |
| 2    |          | home.info.title                 | 0.314  |
| 3    |          | home.hero.role                  | 0.249  |
| 4    |          | home.hero.aka                   | 0.202  |
| 5    |          | garmentSegmentation.skills.5    | 0.200  |
| 6    |          | home.info.summary               | 0.182  |
| 7    |          | pixelPup.skills.5               | 0.179  |
| 8    |          | pixelPup.skills.3               | 0.173  |
| 9    |          | pixelPup.skills.4               | 0.165  |
| 10   |          | pixelPup.roleSummary            | 0.152  |
| 11   |          | pixelPup.skills.0               | 0.140  |
| 12   |          | pixelPup.keywords               | 0.133  |
| 13   |          | garmentSegmentation.roleSummary | 0.125  |
| 14   |          | garmentSegmentation.keywords    | 0.124  |
| 15   |          | garmentSegmentation.skills.4    | 0.121  |
| 16   |          | pixelPup.skills.2               | 0.110  |
| 17   |          | pixelPup.overview               | 0.095  |
| 18   |          | garmentSegmentation.skills.8    | 0.094  |
| 19   |          | garmentSegmentation.skills.0    | 0.090  |
| 20   |          | garmentSegmentation.skills.6    | 0.088  |
| 21   |          | pixelPup.skills.1               | 0.049  |
| 22   |          | garmentSegmentation.skills.9    | 0.044  |
| 23   |          | garmentSegmentation.skills.1    | 0.042  |
| 24   |          | garmentSegmentation.skills.2    | 0.035  |
| 25   |          | browserBot.skills.2             | 0.033  |
| 26   |          | browserBot.roleSummary          | 0.029  |
| 27   |          | garmentSegmentation.skills.7    | 0.028  |
| 28   |          | garmentSegmentation.skills.3    | 0.027  |
| 29   |          | garmentSegmentation.overview    | 0.019  |
| 30   |          | browserBot.keywords             | 0.003  |
| 31   |          | browserBot.skills.1             | -0.014 |
| 32   |          | browserBot.overview             | -0.021 |
| 33   |          | browserBot.skills.0             | -0.055 |

</details>

<details>
<summary>30. How many years of experience does she have?</summary>

| Rank | Expected | Chunk                           | Score  |
| ---- | -------- | ------------------------------- | ------ |
| 1    |          | home.hero.role                  | 0.496  |
| 2    |          | home.info.title                 | 0.445  |
| 3    |          | home.info.summary               | 0.379  |
| 4    |          | home.hero.aka                   | 0.332  |
| 5    |          | home.hero.summary               | 0.329  |
| 6    |          | pixelPup.skills.3               | 0.131  |
| 7    |          | pixelPup.keywords               | 0.114  |
| 8    |          | pixelPup.overview               | 0.099  |
| 9    |          | pixelPup.skills.5               | 0.095  |
| 10   |          | pixelPup.skills.1               | 0.091  |
| 11   |          | pixelPup.skills.0               | 0.090  |
| 12   |          | browserBot.skills.1             | 0.082  |
| 13   |          | browserBot.roleSummary          | 0.080  |
| 14   |          | garmentSegmentation.skills.9    | 0.073  |
| 15   |          | garmentSegmentation.skills.3    | 0.067  |
| 16   |          | pixelPup.roleSummary            | 0.055  |
| 17   |          | garmentSegmentation.skills.4    | 0.054  |
| 18   |          | browserBot.skills.0             | 0.053  |
| 19   |          | browserBot.skills.2             | 0.051  |
| 20   |          | browserBot.keywords             | 0.041  |
| 21   |          | garmentSegmentation.skills.8    | 0.041  |
| 22   |          | pixelPup.skills.2               | 0.037  |
| 23   |          | garmentSegmentation.skills.7    | 0.036  |
| 24   |          | garmentSegmentation.roleSummary | 0.032  |
| 25   |          | garmentSegmentation.skills.5    | 0.026  |
| 26   |          | garmentSegmentation.overview    | 0.026  |
| 27   |          | browserBot.overview             | 0.025  |
| 28   |          | garmentSegmentation.keywords    | 0.024  |
| 29   |          | pixelPup.skills.4               | 0.021  |
| 30   |          | garmentSegmentation.skills.0    | 0.013  |
| 31   |          | garmentSegmentation.skills.1    | 0.005  |
| 32   |          | garmentSegmentation.skills.6    | -0.009 |
| 33   |          | garmentSegmentation.skills.2    | -0.011 |

</details>

<details>
<summary>31. What should I ask her about in an interview?</summary>

| Rank | Expected | Chunk                           | Score  |
| ---- | -------- | ------------------------------- | ------ |
| 1    |          | home.info.title                 | 0.346  |
| 2    |          | home.hero.role                  | 0.337  |
| 3    |          | home.hero.summary               | 0.308  |
| 4    |          | home.info.summary               | 0.262  |
| 5    |          | home.hero.aka                   | 0.242  |
| 6    |          | pixelPup.skills.0               | 0.114  |
| 7    |          | garmentSegmentation.skills.5    | 0.091  |
| 8    |          | pixelPup.roleSummary            | 0.083  |
| 9    |          | pixelPup.skills.5               | 0.074  |
| 10   |          | garmentSegmentation.roleSummary | 0.070  |
| 11   |          | garmentSegmentation.keywords    | 0.063  |
| 12   |          | garmentSegmentation.skills.6    | 0.061  |
| 13   |          | pixelPup.skills.1               | 0.061  |
| 14   |          | pixelPup.keywords               | 0.059  |
| 15   |          | garmentSegmentation.skills.7    | 0.046  |
| 16   |          | pixelPup.overview               | 0.042  |
| 17   |          | pixelPup.skills.4               | 0.039  |
| 18   |          | garmentSegmentation.skills.1    | 0.037  |
| 19   |          | garmentSegmentation.skills.8    | 0.032  |
| 20   |          | browserBot.skills.1             | 0.029  |
| 21   |          | garmentSegmentation.skills.3    | 0.025  |
| 22   |          | garmentSegmentation.skills.0    | 0.017  |
| 23   |          | browserBot.skills.2             | 0.016  |
| 24   |          | garmentSegmentation.skills.4    | 0.015  |
| 25   |          | garmentSegmentation.overview    | 0.014  |
| 26   |          | browserBot.keywords             | 0.009  |
| 27   |          | pixelPup.skills.2               | 0.007  |
| 28   |          | pixelPup.skills.3               | 0.006  |
| 29   |          | garmentSegmentation.skills.2    | 0.005  |
| 30   |          | garmentSegmentation.skills.9    | 0.004  |
| 31   |          | browserBot.overview             | -0.004 |
| 32   |          | browserBot.skills.0             | -0.004 |
| 33   |          | browserBot.roleSummary          | -0.013 |

</details>

<details>
<summary>32. What is the meaning of life?</summary>

| Rank | Expected | Chunk                           | Score  |
| ---- | -------- | ------------------------------- | ------ |
| 1    |          | home.hero.aka                   | 0.140  |
| 2    |          | browserBot.skills.2             | 0.134  |
| 3    |          | browserBot.overview             | 0.130  |
| 4    |          | home.info.summary               | 0.120  |
| 5    |          | pixelPup.skills.0               | 0.115  |
| 6    |          | home.hero.summary               | 0.113  |
| 7    |          | pixelPup.overview               | 0.113  |
| 8    |          | pixelPup.roleSummary            | 0.102  |
| 9    |          | pixelPup.skills.3               | 0.101  |
| 10   |          | home.info.title                 | 0.091  |
| 11   |          | pixelPup.skills.1               | 0.082  |
| 12   |          | pixelPup.keywords               | 0.059  |
| 13   |          | home.hero.role                  | 0.048  |
| 14   |          | browserBot.skills.0             | 0.035  |
| 15   |          | pixelPup.skills.5               | 0.033  |
| 16   |          | browserBot.skills.1             | 0.033  |
| 17   |          | browserBot.keywords             | 0.031  |
| 18   |          | garmentSegmentation.skills.5    | 0.029  |
| 19   |          | garmentSegmentation.skills.9    | 0.026  |
| 20   |          | browserBot.roleSummary          | 0.024  |
| 21   |          | garmentSegmentation.skills.1    | 0.023  |
| 22   |          | garmentSegmentation.skills.3    | 0.015  |
| 23   |          | garmentSegmentation.skills.0    | 0.011  |
| 24   |          | garmentSegmentation.roleSummary | -0.002 |
| 25   |          | garmentSegmentation.overview    | -0.013 |
| 26   |          | pixelPup.skills.2               | -0.017 |
| 27   |          | garmentSegmentation.skills.2    | -0.023 |
| 28   |          | garmentSegmentation.skills.4    | -0.023 |
| 29   |          | pixelPup.skills.4               | -0.024 |
| 30   |          | garmentSegmentation.skills.8    | -0.026 |
| 31   |          | garmentSegmentation.skills.7    | -0.037 |
| 32   |          | garmentSegmentation.keywords    | -0.044 |
| 33   |          | garmentSegmentation.skills.6    | -0.087 |

</details>

<details>
<summary>33. What do you think about her?</summary>

| Rank | Expected | Chunk                           | Score  |
| ---- | -------- | ------------------------------- | ------ |
| 1    |          | home.info.title                 | 0.379  |
| 2    |          | home.hero.role                  | 0.352  |
| 3    |          | home.hero.summary               | 0.317  |
| 4    |          | home.info.summary               | 0.291  |
| 5    |          | home.hero.aka                   | 0.284  |
| 6    |          | garmentSegmentation.skills.5    | 0.125  |
| 7    |          | browserBot.skills.1             | 0.098  |
| 8    |          | garmentSegmentation.skills.4    | 0.051  |
| 9    |          | garmentSegmentation.roleSummary | 0.048  |
| 10   |          | garmentSegmentation.skills.6    | 0.038  |
| 11   |          | garmentSegmentation.skills.8    | 0.036  |
| 12   |          | browserBot.roleSummary          | 0.029  |
| 13   |          | pixelPup.roleSummary            | 0.028  |
| 14   |          | pixelPup.skills.3               | 0.027  |
| 15   |          | pixelPup.skills.1               | 0.026  |
| 16   |          | browserBot.skills.2             | 0.024  |
| 17   |          | pixelPup.overview               | 0.023  |
| 18   |          | browserBot.skills.0             | 0.019  |
| 19   |          | garmentSegmentation.overview    | 0.014  |
| 20   |          | garmentSegmentation.skills.0    | 0.013  |
| 21   |          | browserBot.overview             | 0.013  |
| 22   |          | pixelPup.keywords               | 0.000  |
| 23   |          | garmentSegmentation.skills.3    | -0.000 |
| 24   |          | garmentSegmentation.keywords    | -0.004 |
| 25   |          | pixelPup.skills.0               | -0.009 |
| 26   |          | pixelPup.skills.2               | -0.011 |
| 27   |          | pixelPup.skills.4               | -0.012 |
| 28   |          | pixelPup.skills.5               | -0.019 |
| 29   |          | garmentSegmentation.skills.7    | -0.019 |
| 30   |          | garmentSegmentation.skills.1    | -0.020 |
| 31   |          | browserBot.keywords             | -0.023 |
| 32   |          | garmentSegmentation.skills.9    | -0.044 |
| 33   |          | garmentSegmentation.skills.2    | -0.058 |

</details>

<details>
<summary>34. Did she go to school for engineering or computer science?</summary>

| Rank | Expected | Chunk                           | Score  |
| ---- | -------- | ------------------------------- | ------ |
| 1    |          | home.hero.role                  | 0.580  |
| 2    |          | home.info.summary               | 0.497  |
| 3    |          | home.info.title                 | 0.485  |
| 4    |          | home.hero.aka                   | 0.355  |
| 5    |          | home.hero.summary               | 0.299  |
| 6    |          | pixelPup.keywords               | 0.221  |
| 7    |          | pixelPup.skills.1               | 0.199  |
| 8    |          | browserBot.keywords             | 0.175  |
| 9    |          | browserBot.roleSummary          | 0.139  |
| 10   |          | garmentSegmentation.keywords    | 0.133  |
| 11   |          | pixelPup.roleSummary            | 0.113  |
| 12   |          | browserBot.skills.1             | 0.108  |
| 13   |          | pixelPup.skills.3               | 0.108  |
| 14   |          | garmentSegmentation.overview    | 0.107  |
| 15   |          | browserBot.overview             | 0.103  |
| 16   |          | garmentSegmentation.skills.7    | 0.097  |
| 17   |          | browserBot.skills.2             | 0.093  |
| 18   |          | pixelPup.overview               | 0.092  |
| 19   |          | garmentSegmentation.skills.6    | 0.091  |
| 20   |          | browserBot.skills.0             | 0.089  |
| 21   |          | garmentSegmentation.skills.9    | 0.089  |
| 22   |          | garmentSegmentation.skills.5    | 0.083  |
| 23   |          | pixelPup.skills.5               | 0.080  |
| 24   |          | garmentSegmentation.roleSummary | 0.078  |
| 25   |          | pixelPup.skills.2               | 0.071  |
| 26   |          | pixelPup.skills.0               | 0.065  |
| 27   |          | garmentSegmentation.skills.8    | 0.053  |
| 28   |          | garmentSegmentation.skills.4    | 0.050  |
| 29   |          | garmentSegmentation.skills.0    | 0.029  |
| 30   |          | garmentSegmentation.skills.3    | 0.025  |
| 31   |          | garmentSegmentation.skills.1    | -0.001 |
| 32   |          | pixelPup.skills.4               | -0.008 |
| 33   |          | garmentSegmentation.skills.2    | -0.034 |

</details>

<details>
<summary>35. Ela sabe falar português?</summary>

| Rank | Expected | Chunk                           | Score  |
| ---- | -------- | ------------------------------- | ------ |
| 1    |          | home.info.summary               | 0.171  |
| 2    |          | home.hero.aka                   | 0.141  |
| 3    |          | pixelPup.keywords               | 0.091  |
| 4    |          | garmentSegmentation.skills.4    | 0.080  |
| 5    |          | browserBot.skills.1             | 0.078  |
| 6    |          | home.hero.summary               | 0.077  |
| 7    |          | browserBot.keywords             | 0.075  |
| 8    |          | home.hero.role                  | 0.074  |
| 9    |          | garmentSegmentation.skills.5    | 0.073  |
| 10   |          | browserBot.roleSummary          | 0.061  |
| 11   |          | garmentSegmentation.roleSummary | 0.059  |
| 12   |          | home.info.title                 | 0.056  |
| 13   |          | browserBot.overview             | 0.056  |
| 14   |          | pixelPup.overview               | 0.048  |
| 15   |          | garmentSegmentation.skills.6    | 0.041  |
| 16   |          | browserBot.skills.0             | 0.039  |
| 17   |          | pixelPup.skills.0               | 0.031  |
| 18   |          | browserBot.skills.2             | 0.026  |
| 19   |          | garmentSegmentation.skills.8    | 0.026  |
| 20   |          | pixelPup.roleSummary            | 0.025  |
| 21   |          | garmentSegmentation.skills.3    | 0.022  |
| 22   |          | pixelPup.skills.1               | 0.018  |
| 23   |          | garmentSegmentation.skills.9    | 0.016  |
| 24   |          | pixelPup.skills.2               | 0.013  |
| 25   |          | garmentSegmentation.keywords    | 0.011  |
| 26   |          | garmentSegmentation.skills.0    | 0.010  |
| 27   |          | pixelPup.skills.5               | -0.004 |
| 28   |          | pixelPup.skills.4               | -0.005 |
| 29   |          | garmentSegmentation.overview    | -0.008 |
| 30   |          | garmentSegmentation.skills.1    | -0.009 |
| 31   |          | garmentSegmentation.skills.7    | -0.015 |
| 32   |          | pixelPup.skills.3               | -0.036 |
| 33   |          | garmentSegmentation.skills.2    | -0.037 |

</details>

<details>
<summary>36. Does Marissa know Java?</summary>

| Rank | Expected | Chunk                           | Score  |
| ---- | -------- | ------------------------------- | ------ |
| 1    |          | home.info.title                 | 0.435  |
| 2    |          | home.hero.role                  | 0.391  |
| 3    |          | home.info.summary               | 0.345  |
| 4    |          | home.hero.aka                   | 0.272  |
| 5    |          | home.hero.summary               | 0.255  |
| 6    |          | browserBot.keywords             | 0.187  |
| 7    |          | browserBot.skills.2             | 0.153  |
| 8    |          | browserBot.overview             | 0.133  |
| 9    |          | garmentSegmentation.skills.5    | 0.129  |
| 10   |          | browserBot.roleSummary          | 0.108  |
| 11   |          | browserBot.skills.0             | 0.101  |
| 12   |          | pixelPup.skills.1               | 0.099  |
| 13   |          | browserBot.skills.1             | 0.092  |
| 14   |          | pixelPup.overview               | 0.085  |
| 15   |          | pixelPup.keywords               | 0.083  |
| 16   |          | garmentSegmentation.skills.7    | 0.077  |
| 17   |          | pixelPup.roleSummary            | 0.074  |
| 18   |          | garmentSegmentation.keywords    | 0.068  |
| 19   |          | garmentSegmentation.roleSummary | 0.062  |
| 20   |          | garmentSegmentation.skills.9    | 0.055  |
| 21   |          | garmentSegmentation.overview    | 0.053  |
| 22   |          | garmentSegmentation.skills.3    | 0.052  |
| 23   |          | garmentSegmentation.skills.4    | 0.042  |
| 24   |          | pixelPup.skills.3               | 0.038  |
| 25   |          | pixelPup.skills.5               | 0.038  |
| 26   |          | garmentSegmentation.skills.0    | 0.033  |
| 27   |          | garmentSegmentation.skills.8    | 0.028  |
| 28   |          | garmentSegmentation.skills.6    | 0.028  |
| 29   |          | pixelPup.skills.0               | 0.020  |
| 30   |          | pixelPup.skills.2               | 0.018  |
| 31   |          | pixelPup.skills.4               | -0.010 |
| 32   |          | garmentSegmentation.skills.1    | -0.038 |
| 33   |          | garmentSegmentation.skills.2    | -0.041 |

</details>

<details>
<summary>37. Where was Marissa born?</summary>

| Rank | Expected | Chunk                           | Score  |
| ---- | -------- | ------------------------------- | ------ |
| 1    |          | home.hero.role                  | 0.378  |
| 2    |          | home.hero.aka                   | 0.286  |
| 3    |          | home.info.title                 | 0.245  |
| 4    |          | home.info.summary               | 0.240  |
| 5    |          | home.hero.summary               | 0.100  |
| 6    |          | garmentSegmentation.skills.9    | 0.074  |
| 7    |          | pixelPup.skills.3               | 0.067  |
| 8    |          | pixelPup.keywords               | 0.066  |
| 9    |          | garmentSegmentation.overview    | 0.063  |
| 10   |          | pixelPup.skills.1               | 0.061  |
| 11   |          | pixelPup.overview               | 0.059  |
| 12   |          | garmentSegmentation.skills.5    | 0.041  |
| 13   |          | garmentSegmentation.skills.8    | 0.039  |
| 14   |          | garmentSegmentation.skills.7    | 0.035  |
| 15   |          | browserBot.skills.2             | 0.035  |
| 16   |          | garmentSegmentation.skills.1    | 0.031  |
| 17   |          | garmentSegmentation.skills.0    | 0.028  |
| 18   |          | garmentSegmentation.roleSummary | 0.025  |
| 19   |          | pixelPup.roleSummary            | 0.025  |
| 20   |          | pixelPup.skills.0               | 0.024  |
| 21   |          | pixelPup.skills.2               | 0.018  |
| 22   |          | garmentSegmentation.skills.4    | 0.017  |
| 23   |          | garmentSegmentation.keywords    | 0.006  |
| 24   |          | garmentSegmentation.skills.3    | 0.001  |
| 25   |          | pixelPup.skills.5               | -0.005 |
| 26   |          | garmentSegmentation.skills.6    | -0.005 |
| 27   |          | garmentSegmentation.skills.2    | -0.008 |
| 28   |          | browserBot.roleSummary          | -0.023 |
| 29   |          | pixelPup.skills.4               | -0.027 |
| 30   |          | browserBot.keywords             | -0.042 |
| 31   |          | browserBot.overview             | -0.043 |
| 32   |          | browserBot.skills.1             | -0.055 |
| 33   |          | browserBot.skills.0             | -0.071 |

</details>

<details>
<summary>38. Where is Marissa authorized to work?</summary>

| Rank | Expected | Chunk                           | Score  |
| ---- | -------- | ------------------------------- | ------ |
| 1    |          | home.hero.role                  | 0.374  |
| 2    |          | home.info.summary               | 0.288  |
| 3    |          | home.info.title                 | 0.252  |
| 4    |          | home.hero.aka                   | 0.219  |
| 5    |          | home.hero.summary               | 0.145  |
| 6    |          | garmentSegmentation.skills.9    | 0.124  |
| 7    |          | pixelPup.skills.1               | 0.114  |
| 8    |          | garmentSegmentation.skills.5    | 0.108  |
| 9    |          | pixelPup.keywords               | 0.099  |
| 10   |          | garmentSegmentation.roleSummary | 0.092  |
| 11   |          | pixelPup.overview               | 0.087  |
| 12   |          | garmentSegmentation.skills.0    | 0.086  |
| 13   |          | garmentSegmentation.overview    | 0.085  |
| 14   |          | garmentSegmentation.skills.7    | 0.074  |
| 15   |          | garmentSegmentation.skills.4    | 0.067  |
| 16   |          | browserBot.overview             | 0.061  |
| 17   |          | browserBot.keywords             | 0.060  |
| 18   |          | pixelPup.skills.0               | 0.059  |
| 19   |          | browserBot.skills.2             | 0.041  |
| 20   |          | garmentSegmentation.skills.6    | 0.039  |
| 21   |          | browserBot.roleSummary          | 0.038  |
| 22   |          | garmentSegmentation.keywords    | 0.038  |
| 23   |          | pixelPup.roleSummary            | 0.036  |
| 24   |          | pixelPup.skills.2               | 0.035  |
| 25   |          | pixelPup.skills.3               | 0.024  |
| 26   |          | garmentSegmentation.skills.8    | 0.023  |
| 27   |          | browserBot.skills.1             | 0.022  |
| 28   |          | pixelPup.skills.5               | 0.014  |
| 29   |          | garmentSegmentation.skills.3    | 0.005  |
| 30   |          | pixelPup.skills.4               | -0.014 |
| 31   |          | browserBot.skills.0             | -0.017 |
| 32   |          | garmentSegmentation.skills.2    | -0.019 |
| 33   |          | garmentSegmentation.skills.1    | -0.036 |

</details>

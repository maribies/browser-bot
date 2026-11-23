import { describe, expect, it } from "vitest";

import { rankChunks } from "./rank";

const chunks = [
  { id: "home.hero.role" },
  { id: "home.hero.summary" },
  { id: "home.hero.aka" },
  { id: "home.info.title" },
  { id: "home.info.summary" },
];

const scores = [
  0.5457147141332606, 0.44812640734588727, 0.33121246404438176,
  0.3099943032209753, 0.38842727734151944,
];

describe("rankChunks", () => {
  it("orders chunks by score, highest first, keeping each id with its score", () => {
    expect(rankChunks(scores, chunks)).toEqual([
      { id: "home.hero.role", score: 0.5457147141332606 },
      { id: "home.hero.summary", score: 0.44812640734588727 },
      { id: "home.info.summary", score: 0.38842727734151944 },
      { id: "home.hero.aka", score: 0.33121246404438176 },
      { id: "home.info.title", score: 0.3099943032209753 },
    ]);
  });

  it("does not modify the scores passed in", () => {
    const before = [...scores];
    rankChunks(scores, chunks);
    expect(scores).toEqual(before);
  });

  it("keeps both chunks when scores tie", () => {
    const ranked = rankChunks([0.5, 0.5], [{ id: "a" }, { id: "b" }]);
    expect(ranked.map((r) => r.id).sort()).toEqual(["a", "b"]);
  });
});

export type RankedChunk = { id: string; score: number };

// Pairs each score with the chunk id at the same index, highest score first.
// Does not modify the inputs.
export const rankChunks = (
  scores: number[],
  chunks: { id: string }[],
): RankedChunk[] =>
  scores
    .map((score, i) => ({ id: chunks[i].id, score }))
    .sort((a, b) => b.score - a.score);

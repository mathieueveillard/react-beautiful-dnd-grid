export function computeOriginalIndex(maxItems: number, chunkIndex: number, indexInChunk: number): number {
  return chunkIndex * maxItems + indexInChunk;
}

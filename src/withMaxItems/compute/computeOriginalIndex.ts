export function computeOriginalIndex(maxItems: number, chunkIndex: number, indexInChunk: number): number {
  return chunkIndex * maxItems + indexInChunk;
}

export function computeOriginalIndexAfterDrop(
  maxItems: number,
  sourceChunkIndex: number,
  destinationChunkIndex: number,
  indexInChunk: number
): number {
  return destinationChunkIndex * maxItems + indexInChunk + (sourceChunkIndex < destinationChunkIndex ? -1 : 0);
}

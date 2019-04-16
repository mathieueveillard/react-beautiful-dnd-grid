import { Chunk } from "../withMaxItems";

export function splitItems(maxItems: number, items: any[], createId: () => string): Chunk[] {
  const slicedItems: any[][] = sliceIntoItems(maxItems, items);
  return slicedItems.map(mapToChunk(createId));
}

function sliceIntoItems(maxItems: number, items: any[]): any[][] {
  const numberOfSlices: number = Math.ceil(items.length / maxItems);
  const sliceIndexes: number[] = Array.apply(null, Array(numberOfSlices)).map((_, index: number) => index);
  return sliceIndexes.map((index: number) => items.slice(index * maxItems, index * maxItems + maxItems));
}

function mapToChunk(createId: () => string) {
  return function(items: any[]): Chunk {
    return {
      id: createId(),
      items
    };
  };
}

import { Chunk } from "../withMaxItems";
import { Item } from "../Item";

export function splitItems(maxItems: number, items: Item[], createId: () => string): Chunk[] {
  const slicedItems: Item[][] = sliceIntoItems(maxItems, items);
  return slicedItems.map(mapToChunk(createId));
}

function sliceIntoItems(maxItems: number, items: Item[]): Item[][] {
  const numberOfSlices: number = Math.ceil(items.length / maxItems);
  const sliceIndexes: number[] = Array.apply(null, Array(numberOfSlices)).map((_, index: number) => index);
  return sliceIndexes.map((index: number) => items.slice(index * maxItems, index * maxItems + maxItems));
}

function mapToChunk(createId: () => string) {
  return function(items: Item[]): Chunk {
    return {
      id: createId(),
      items
    };
  };
}

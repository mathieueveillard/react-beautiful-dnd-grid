import { computeOriginalIndex } from "./computeOriginalIndex";

describe("computeOriginalIndex", () => {
  it("should compute the index of an item in the original array of items", () => {
    // GIVEN
    const maxItems: number = 4;
    const chunkIndex: number = 0;
    const indexInChunk: number = 0;

    // WHEN
    const actual: number = computeOriginalIndex(maxItems, chunkIndex, indexInChunk);

    // THEN
    const expected: number = 0;
    expect(actual).toEqual(expected);
  });

  it("should compute the index of an item in the original array of items", () => {
    // GIVEN
    const maxItems: number = 4;
    const chunkIndex: number = 1;
    const indexInChunk: number = 0;

    // WHEN
    const actual: number = computeOriginalIndex(maxItems, chunkIndex, indexInChunk);

    // THEN
    const expected: number = 4;
    expect(actual).toEqual(expected);
  });

  it("should compute the index of an item in the original array of items", () => {
    // GIVEN
    const maxItems: number = 4;
    const chunkIndex: number = 1;
    const indexInChunk: number = 1;

    // WHEN
    const actual: number = computeOriginalIndex(maxItems, chunkIndex, indexInChunk);

    // THEN
    const expected: number = 5;
    expect(actual).toEqual(expected);
  });
});

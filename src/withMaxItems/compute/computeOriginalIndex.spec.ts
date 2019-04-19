import { computeOriginalIndex, computeOriginalIndexAfterDrop } from "./computeOriginalIndex";

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
    const chunkIndex: number = 0;
    const indexInChunk: number = 3;

    // WHEN
    const actual: number = computeOriginalIndex(maxItems, chunkIndex, indexInChunk);

    // THEN
    const expected: number = 3;
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

describe("computeOriginalIndexAfterDrop", () => {
  it("should compute the index of an item in the original array of items after drop", () => {
    // GIVEN
    const maxItems: number = 4;
    const sourceChunkIndex: number = 0;
    const destinationChunkIndex: number = 0;
    const indexInChunk: number = 1;

    // WHEN
    const actual: number = computeOriginalIndexAfterDrop(
      maxItems,
      sourceChunkIndex,
      destinationChunkIndex,
      indexInChunk
    );

    // THEN
    const expected: number = 1;
    expect(actual).toEqual(expected);
  });

  it("should compute the index of an item in the original array of items after drop", () => {
    // GIVEN
    const maxItems: number = 4;
    const sourceChunkIndex: number = 1;
    const destinationChunkIndex: number = 0;
    const indexInChunk: number = 1;

    // WHEN
    const actual: number = computeOriginalIndexAfterDrop(
      maxItems,
      sourceChunkIndex,
      destinationChunkIndex,
      indexInChunk
    );

    // THEN
    const expected: number = 1;
    expect(actual).toEqual(expected);
  });

  it("should compute the index of an item in the original array of items after drop", () => {
    // GIVEN
    const maxItems: number = 4;
    const sourceChunkIndex: number = 0;
    const destinationChunkIndex: number = 1;
    const indexInChunk: number = 0;

    // WHEN
    const actual: number = computeOriginalIndexAfterDrop(
      maxItems,
      sourceChunkIndex,
      destinationChunkIndex,
      indexInChunk
    );

    // THEN
    const expected: number = 3;
    expect(actual).toEqual(expected);
  });

  it("should compute the index of an item in the original array of items after drop", () => {
    // GIVEN
    const maxItems: number = 4;
    const sourceChunkIndex: number = 0;
    const destinationChunkIndex: number = 1;
    const indexInChunk: number = 1;

    // WHEN
    const actual: number = computeOriginalIndexAfterDrop(
      maxItems,
      sourceChunkIndex,
      destinationChunkIndex,
      indexInChunk
    );

    // THEN
    const expected: number = 4;
    expect(actual).toEqual(expected);
  });
});

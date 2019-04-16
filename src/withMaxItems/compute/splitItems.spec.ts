import { splitItems } from "./splitItems";
import { Chunk } from "../withMaxItems";

describe("splitItems", () => {
  it("should split items according to maxItems (less items than maxItems)", () => {
    // GIVEN
    const maxItems: number = 4;
    const items = [{ id: "0" }, { id: "1" }, { id: "2" }];
    const createId: () => string = jest.fn().mockReturnValue("id");

    // WHEN
    const actual: Chunk[] = splitItems(maxItems, items, createId);

    // THEN
    const expected: Chunk[] = [
      {
        id: "id",
        items: [{ id: "0" }, { id: "1" }, { id: "2" }]
      }
    ];
    expect(actual).toEqual(expected);
  });

  it("should split items according to maxItems (as many items as maxItems)", () => {
    // GIVEN
    const maxItems: number = 4;
    const items = [{ id: "0" }, { id: "1" }, { id: "2" }, { id: "3" }];
    const createId: () => string = jest.fn().mockReturnValue("id");

    // WHEN
    const actual: Chunk[] = splitItems(maxItems, items, createId);

    // THEN
    const expected: Chunk[] = [
      {
        id: "id",
        items: [{ id: "0" }, { id: "1" }, { id: "2" }, { id: "3" }]
      }
    ];
    expect(actual).toEqual(expected);
  });

  it("should split items according to maxItems (more items than maxItems)", () => {
    // GIVEN
    const maxItems: number = 4;
    const items = [{ id: "0" }, { id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }];
    const createId: () => string = jest
      .fn()
      .mockReturnValueOnce("id0")
      .mockReturnValueOnce("id1");

    // WHEN
    const actual: Chunk[] = splitItems(maxItems, items, createId);

    // THEN
    const expected: Chunk[] = [
      {
        id: "id0",
        items: [{ id: "0" }, { id: "1" }, { id: "2" }, { id: "3" }]
      },
      {
        id: "id1",
        items: [{ id: "4" }]
      }
    ];
    expect(actual).toEqual(expected);
  });
});

import reverseBlocks from "src/algorithms/reverseBlocks";

describe("reverseBlocks", () => {
  test("reverses odd sized blocks", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const blockSize = 3;
    reverseBlocks(array, blockSize);

    expect(array).toEqual([3, 2, 1, 6, 5, 4, 9, 8, 7]);
  });

  test("reverses even sized blocks", () => {
    const array = [1, 2, 3, 4, 5, 6];
    const blockSize = 2;
    reverseBlocks(array, blockSize);

    expect(array).toEqual([2, 1, 4, 3, 6, 5]);
  });

  test("reverses remaining elements outside of blocks", () => {
    const array = ["a", "b", "c", "d", "e", "f"];
    const blockSize = 4;
    reverseBlocks(array, blockSize);

    expect(array).toEqual(["d", "c", "b", "a", "f", "e"]);
  });

  test("reverses the whole array when block size is larger that the array", () => {
    const array = [10, 20, 30, 40, 50, 60, 70];
    const blockSize = 10;
    reverseBlocks(array, blockSize);

    expect(array).toEqual([70, 60, 50, 40, 30, 20, 10]);
  });

  test("returns the same array when its length or the block size are too small", () => {
    const array0: number[] = [];
    const array1 = ["a"];
    const array3 = [1, 2, 3];
    reverseBlocks(array0, 2);
    reverseBlocks(array1, 2);
    reverseBlocks(array3, 1);

    expect(array0).toEqual([]);
    expect(array1).toEqual(["a"]);
    expect(array3).toEqual([1, 2, 3]);
  });
});

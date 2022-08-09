import mergeTwoArrays from "src/arrays/mergeTwoArrays";

describe("mergeTwoArrays", () => {
  test("merges arrays with the same number of elements", () => {
    const largeArray = [1, 3, 5, 7, 9].concat(new Array(5));
    const smallArray = [0, 2, 4, 6, 8];
    mergeTwoArrays(largeArray, smallArray);

    expect(largeArray).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(largeArray.length).toBe(10);
  });

  test("merges arrays with different number of elements", () => {
    const largeArray = [15, 25, 35, 45].concat(new Array(3));
    const smallArray = [10, 20, 30];
    mergeTwoArrays(largeArray, smallArray);

    expect(largeArray).toEqual([10, 15, 20, 25, 30, 35, 45]);
    expect(largeArray.length).toBe(7);
  });

  test("smallArray elements are inserted at the end of the array", () => {
    const largeArray = [1, 4, 9].concat(new Array(5));
    const smallArray = [16, 25, 36, 49, 64];
    mergeTwoArrays(largeArray, smallArray);

    expect(largeArray).toEqual([1, 4, 9, 16, 25, 36, 49, 64]);
    expect(largeArray.length).toBe(8);
  });

  test("smallArray elements are inserted at the start of the array", () => {
    const largeArray = [0, 1, 2, 3].concat(new Array(4));
    const smallArray = [-4, -3, -2, -1];
    mergeTwoArrays(largeArray, smallArray);

    expect(largeArray).toEqual([-4, -3, -2, -1, 0, 1, 2, 3]);
    expect(largeArray.length).toBe(8);
  });
});

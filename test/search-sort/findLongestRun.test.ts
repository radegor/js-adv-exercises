import findLongestRun from "src/search-sort/findLongestRun";

describe("findLongestRun", () => {
  test("finds longest run of one distinct number", () => {
    const input = "11111";
    const longest = findLongestRun(input);

    expect(longest).toBe("11111");
  });

  test("finds longest run of two distinct numbers", () => {
    const input = "1212223311212223";
    const longest = findLongestRun(input);

    expect(longest).toBe("1121222");
  });

  test("returns early if input is not a string or too short", () => {
    const notString = 333221;
    const shortString = "10";

    // @ts-expect-error: allow a non-string input for testing
    expect(findLongestRun(notString)).toBe("-");
    expect(findLongestRun(shortString)).toBe(shortString);
  });
});

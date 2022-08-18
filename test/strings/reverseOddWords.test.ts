import reverseOddWords from "src/strings/reverseOddWords";

describe("reverseOddWords", () => {
  test("reverses a sentence with an odd number of words", () => {
    const input = "reverse the odd words of a string";

    expect(reverseOddWords(input)).toBe("esrever the ddo words fo a gnirts");
  });

  test("reverses a sentence with an even number of words", () => {
    const input = "correct horse battery staple";

    expect(reverseOddWords(input)).toBe("tcerroc horse yrettab staple");
  });

  test("reverses only one word", () => {
    const input = "necessary";

    expect(reverseOddWords(input)).toBe("yrassecen");
  });

  test("returns an empty string for an empty input", () => {
    const input = "";

    expect(reverseOddWords(input)).toBe("");
  });
});

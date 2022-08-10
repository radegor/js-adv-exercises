import parseAndSort from "src/strings/parseAndSort";

describe("parseAndSort", () => {
  test("sorts an unordered string", () => {
    const string = "19951204";

    expect(parseAndSort(string)).toBe("01124599");
  });

  test("sorts a string that was already sorted", () => {
    const string = "123456789";

    expect(parseAndSort(string)).toBe("123456789");
  });

  test("sorts a string that is reverse sorted", () => {
    const string = "9994410";

    expect(parseAndSort(string)).toBe("0144999");
  });
});

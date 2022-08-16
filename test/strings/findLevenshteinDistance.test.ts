import findLevenshteinDistance from "src/strings/findLevenshteinDistance";

describe("findLevenshteinDistance", () => {
  test("finds the distance between 'kitten' -> 'sitting'", () => {
    const distance = findLevenshteinDistance("kitten", "sitting");

    expect(distance).toBe(3);
  });

  test("finds the distance between 'saturday' -> 'sunday'", () => {
    const distance = findLevenshteinDistance("saturday", "sunday");

    expect(distance).toBe(3);
  });

  test("finds the distance between 'mississippi' -> 'swiss miss'", () => {
    const distance = findLevenshteinDistance("mississippi", "swiss miss");

    expect(distance).toBe(8);
  });
});

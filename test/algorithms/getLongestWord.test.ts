import getLongestWord from "src/algorithms/getLongestWord";

describe("getword", () => {
  test("finds longest word for cat", () => {
    const chars = "cat";
    const word = getLongestWord(chars);
    expect(word).toBe("act");
  });

  test("finds longest word for catdog", () => {
    const chars = "catdog";
    const word = getLongestWord(chars);
    expect(word).toBe("coda");
  });

  test("finds longest word for ESRATINDA", () => {
    const chars = "ESRATINDA";
    const word = getLongestWord(chars);
    expect(word).toBe("radiates");
  });

  test("finds longest word for MSTUEHNDI", () => {
    const chars = "MSTUEHNDI";
    const word = getLongestWord(chars);
    expect(word).toBe("humidest");
  });
});

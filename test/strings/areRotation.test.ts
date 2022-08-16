import areRotation from "src/strings/areRotation";

describe("areRotation", () => {
  test("determines that one word is a rotation of another", () => {
    const s1 = "HELLOTHERE";
    const s2 = "OTHEREHELL";
    expect(areRotation(s1, s2)).toBe(true);
  });

  test("determines that one word is NOT a rotation of another", () => {
    const s1 = "general";
    const s2 = "kenobi";
    expect(areRotation(s1, s2)).toBe(false);
  });
});

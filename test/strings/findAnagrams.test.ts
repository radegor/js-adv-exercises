import findAnagrams from "src/strings/findAnagrams";

describe("findAnagrams", () => {
  test("resolves that two words are anagrams", () => {
    const string1 = "listen";
    const string2 = "silent";

    expect(findAnagrams(string1, string2)).toBe(true);
  });

  test("resolves that two sentences are anagrams", () => {
    const string1 = "Tom Marvolo Riddle";
    const string2 = "I am Lord Voldemort";

    expect(findAnagrams(string1, string2)).toBe(true);
  });

  test("resolves that two words are NOT anagrams", () => {
    const string1 = "cryptology";
    const string2 = "palindrome";

    expect(findAnagrams(string1, string2)).toBe(false);
  });
});

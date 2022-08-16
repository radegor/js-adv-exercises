function sortChars(string: string): string {
  return string
    .replace(/\s/g, "")
    .toLowerCase()
    .split("")
    .sort((a, b) => a.localeCompare(b))
    .join("");
}

function findAnagrams(string1: string, string2: string): boolean {
  return sortChars(string1) === sortChars(string2);
}

export default findAnagrams;

function parseAndSort(string: string): string {
  return string
    .split("")
    .sort((a, b) => parseInt(a) - parseInt(b))
    .join("");
}

export default parseAndSort;

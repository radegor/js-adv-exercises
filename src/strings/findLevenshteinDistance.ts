/* eslint-disable @typescript-eslint/no-non-null-assertion */

function findLevenshteinDistance(source: string, target: string): number {
  const S = source.length + 1;
  const T = target.length + 1;
  // distance matrix:
  // for all i and j, d[i][j] will hold the Levenshtein distance between
  // the first i characters of string1 and the first j characters of string2
  const d = [0, ...source].map(() => new Array<number>(T).fill(0));
  let substitutionCost = 0;

  // source prefixes can be transformed into empty string
  // by dropping all characters
  for (let i = 1; i < S; i++) {
    d[i]![0] = i;
  }

  // target prefixes can be reached from empty source prefix
  // by inserting every character
  for (let j = 1; j < T; j++) {
    d[0]![j] = j;
  }

  for (let j = 1; j < T; j++) {
    for (let i = 1; i < S; i++) {
      substitutionCost = source[i - 1] === target[j - 1] ? 0 : 1;

      d[i]![j] = Math.min(
        d[i - 1]![j]! + 1, // deletion
        d[i]![j - 1]! + 1, // insertion
        d[i - 1]![j - 1]! + substitutionCost // substitution
      );
    }
  }

  return d[S - 1]![T - 1]!;
}

export default findLevenshteinDistance;

// Find the longest run of at most two distinct numbers

function findLongestRun(input: string): string {
  if (typeof input !== "string") return "-";
  if (input.length < 3) return input;

  let longestRunStart = 0;
  let longestRunEnd = 0;
  let currentNumberStart = 0;
  let currentRunStart = 0;
  let secondNumber = input[0];

  for (let i = 1; i < input.length; i++) {
    if (input[i] !== input[i - 1]) {
      if (input[i] !== secondNumber) {
        currentRunStart = currentNumberStart;
      }
      currentNumberStart = i;
      secondNumber = input[i - 1];
    }
    if (i - currentRunStart > longestRunEnd - longestRunStart) {
      longestRunEnd = i;
      longestRunStart = currentRunStart;
    }
  }

  return input.slice(longestRunStart, longestRunEnd + 1);
}

export default findLongestRun;

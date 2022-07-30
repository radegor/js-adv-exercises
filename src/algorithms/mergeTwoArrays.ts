/* eslint-disable @typescript-eslint/no-non-null-assertion */

// Merge two sorted arrays where one has enough space at the end for the other
function mergeTwoArrays(largeArray: number[], smallArray: number[]) {
  let s = smallArray.length - 1;
  let l1 = largeArray.length - 1;
  let l0 = l1 - s - 1;
  let insertFromSmall = false;

  while (s >= 0) {
    insertFromSmall = l0 < 0 || smallArray[s]! > largeArray[l0]!;
    largeArray[l1--] = insertFromSmall ? smallArray[s--]! : largeArray[l0--]!;
  }
}

export default mergeTwoArrays;

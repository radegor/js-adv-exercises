// Reverse N sized blocks of and array
function reverseBlocks<Type>(array: Type[], blockSize: number): void {
  if (array.length < 2 || blockSize < 2) {
    return;
  }
  if (blockSize > array.length) {
    blockSize = array.length;
  }

  let halfBlockSize = blockSize >> 1; // half block size (floor)
  let endOfBlock: number;
  let temp: Type;

  for (let i = 0; i < array.length; i += blockSize) {
    if (array.length - i < blockSize) {
      blockSize = array.length - i;
      halfBlockSize = blockSize >> 1;
    }

    endOfBlock = i + blockSize - 1;

    for (let j = 0; j < halfBlockSize; j++) {
      temp = array[i + j] as Type;
      array[i + j] = array[endOfBlock - j] as Type;
      array[endOfBlock - j] = temp;
    }
  }
}

export default reverseBlocks;

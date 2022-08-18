// Reverse the odd words of a string

function reverseOddWords(input: string): string {
  return input
    .split(" ")
    .map((word, index) =>
      index % 2 === 0 ? word.split("").reverse().join("") : word
    )
    .join(" ");
}

export default reverseOddWords;

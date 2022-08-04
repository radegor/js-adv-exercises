import tree from "src/assets/dictionaryTree.json";
import Node from "src/utils/CharNode";

function getLongestWord(chars: string): string {
  const sortedChars = chars
    .toLowerCase()
    .split("")
    .sort((a, b) => a.localeCompare(b));

  const stack = [{ node: tree as Node, fromIndex: 0 }];

  let longest = ""; // current longest found word
  let index = 0; // index of the most recent found char in sortedChars
  let next = stack.pop(); // next element from the stack
  let child: Node; // next child from current element

  while (next !== undefined) {
    // evaluate current node
    if (next.node.longest.length > longest.length) {
      longest = next.node.longest;
    }
    if (longest.length === chars.length) {
      // current solution has the max possible length
      break;
    }

    // add children nodes to the stack if they are relevant for
    // the solution; they are pushed in reverse order to place
    // the alphabetically first chars at the top of the stack
    for (let i = next.node.children.length - 1; i >= 0; i--) {
      child = next.node.children[i] as Node;
      index = sortedChars.indexOf(child.value, next.fromIndex);
      if (index > -1) {
        stack.push({
          node: child,
          fromIndex: index + 1,
        });
      }
    }
    next = stack.pop();
  }

  return longest;
}

export default getLongestWord;

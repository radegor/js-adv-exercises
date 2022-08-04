/**
 * Pre-process list of words in dictionary.txt
 *
 * Word list is based in the 12dicts package by Alan Beale:
 * http://wordlist.aspell.net/12dicts/
 */
import { readFile, writeFile } from "fs/promises";
import Node from "./CharNode";

(async function makeTree() {
  try {
    // get the dictionary from file and create a list of words
    const dictionary = await readFile("src/assets/dictionary.txt", {
      encoding: "utf8",
    });
    const wordlist = dictionary.split(/\s+/);
    const tree = new Node();

    // for each word, sort its characters and check if that combination
    // exists in the tree, if it doesn't exist: add it to the tree and
    // record the current word as the longest for that combination
    for (const word of wordlist) {
      const sortedChars = word.split("").sort((a, b) => a.localeCompare(b));
      let currentNode = tree;

      for (const char of sortedChars) {
        let nextNode = currentNode.children.find(
          (child) => child.value === char
        );
        if (nextNode === undefined) {
          nextNode = new Node(char);
          currentNode.children.push(nextNode);
        }
        currentNode = nextNode;
      }
      if (!currentNode.longest) {
        currentNode.longest = word;
      }
    }

    // save the tree to file
    await writeFile("../assets/dictionaryTree.json", JSON.stringify(tree));
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.log("there was an error:", message);
  }
})();

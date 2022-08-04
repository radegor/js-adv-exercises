export default class CharNode {
  value: string;
  longest: string; // longest word at this node
  children: CharNode[];

  constructor(value = "") {
    this.value = value;
    this.longest = "";
    this.children = [];
  }
}

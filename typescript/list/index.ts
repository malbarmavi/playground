import { List } from "./list";

let numlist: List<number> = new List<number>();

numlist.add(10);
numlist.add(5);

console.log(numlist.count);
console.log(numlist[0]);
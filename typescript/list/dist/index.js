"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const list_1 = require("./list");
let numlist = new list_1.List();
numlist.add(10);
numlist.add(5);
console.log(numlist.count);
console.log(numlist[0]);

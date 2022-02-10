const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split(" "); ///dev/stdin
const a = parseInt(input[0]);
const b = parseInt(input[1]);

console.log(a - b);

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n"); ///dev/stdin


let max = { num: 0, idx: 0 };
for (let i = 0; i < input.length; i++) {
  if (Number(input[i]) > max.num) {
    max = { num: Number(input[i]), idx: i + 1 };
  }
}
console.log(max.num);
console.log(max.idx);

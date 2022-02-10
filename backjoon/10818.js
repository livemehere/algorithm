const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n"); ///dev/stdin

let nums = [];

for (let i = 0; i < input.length; i++) {
  nums.push(input[i].split(" "));
}

let max = -1000000;
let min = 1000000;
nums[1].forEach((n) => {
  if (parseInt(n) > max) {
    max = parseInt(n);
  }

  if (parseInt(n) < min) {
    min = parseInt(n);
  }
});

console.log(min, max);

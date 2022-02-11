const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().split("\n");

const table = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

const sum = Number(input[0]) * Number(input[1]) * Number(input[2]);
const sumArray = sum.toString();

for (let i = 0; i < sumArray.length; i++) {
  table[sumArray[i]]++;
}

Object.keys(table).forEach(function (key) {
  console.log(table[key]);
});

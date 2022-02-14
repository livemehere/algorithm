const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

for (let i = 1; i < input.length; i++) {
  const words = input[i].split(" ");
  console.log(work(words[0], words[1]));
}

function work(count, str) {
  let result = "";
  const char = str.split("");
  for (let i = 0; i < char.length; i++) {
    for (let j = 0; j < parseInt(count); j++) {
      result += char[i];
    }
  }
  return result;
}

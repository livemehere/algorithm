const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");

let nums = [];
let answers = [];

for (let i = 0; i < input.length; i++) {
  nums.push(input[i].split(" "));
}

for (let i = 1; i < Number(input[0][0]) + 1; i++) {
  const list1 = getPositionList(
    Number(nums[i][0]),
    Number(nums[i][1]),
    Number(nums[i][2])
  );
  const list2 = getPositionList(
    Number(nums[i][3]),
    Number(nums[i][4]),
    Number(nums[i][5])
  );
  answers.push(getCountSamePosition(list1, list2));
}

answers.forEach(function (answer) {
  console.log(answer);
});

function pitagoras(x, y, n, m) {
  return Math.pow(Math.abs(x - n), 2) + Math.pow(Math.abs(y - m), 2);
}

function getPositionList(x, y, d) {
  const list = [];

  for (let i = -10000; i <= 10000; i++) {
    for (let j = -10000; j <= 10000; j++) {
      if (pitagoras(x, y, i, j) == Math.pow(d, 2)) {
        list.push([i, j]);
      }
    }
  }

  return list;
}

function getCountSamePosition(list1, list2) {
  const samePos = [];
  list1.forEach((pos1) => {
    list2.forEach((pos2) => {
      if (pos1[0] == pos2[0] && pos1[1] == pos2[1]) {
        samePos.push([pos1[0], pos1[1]]);
      }
    });
  });
  if (samePos.length == list1.length) {
    return -1;
  } else {
    return samePos.length;
  }
}

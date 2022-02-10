# Algorithm study with Javascript

## nodejs 환경에서의 input

### 1줄

```js
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" "); //
const a = parseInt(input[0]);
const b = parseInt(input[1]);

console.log(a + b);
```

### 여러줄

```js
const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n"); ///dev/stdin

let nums = [];

for (let i = 0; i < input.length; i++) {
  nums.push(input[i].split(" "));
}
console.log(nums[1][0]);
```

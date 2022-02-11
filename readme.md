# Algorithm study with Javascript

## nodejs 환경에서의 input

- 백준에서 input값을 fs로 읽고있고, 경로가 /dev/stdin 이기때문에, 편하게 붙여넣기위해 dev폴더를 만들었습니다

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
const input = fs.readFileSync("/dev/stdin").toString().split("\n"); ///dev/stdin

let nums = [];

for (let i = 0; i < input.length; i++) {
  nums.push(input[i].split(" "));
}
console.log(nums[1][0]);
```

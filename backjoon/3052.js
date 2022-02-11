const fs = require('fs');
let input = fs.readFileSync('./dev/stdin').toString().split('\n')
input = input.map(i => Number(i));

// 42로 나눈다
input = input.map(i=> i%42);

// 각자 나눠진 나머지가 들어있는데, 이를 set자료형으로 변환하여 중복을 제거한다
const total = new Set(input);
console.log(total.size);



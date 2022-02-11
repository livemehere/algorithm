const fs = require('fs');
let input = fs.readFileSync('./dev/stdin').toString().split('\n')

console.log(input);

const total = Number(input[0]);
let scores = input[1].split(' ').map(s=>Number(s));
let max = Math.max(...scores);

scores = scores.map(s=> s/max * 100);
const sum  = scores.reduce((a,b)=>a+b,0);
console.log(sum/total);
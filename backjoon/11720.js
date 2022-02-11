const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split('\n');
const n = input[1].length
const individual = input[1].split('').map(n=>Number(n))

console.log(individual.reduce((a,b)=>a+b,0));

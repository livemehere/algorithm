const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split('')

const alpabet = 'abcdefghijklmnopqrstuvwxyz';
let total ='';
for(let i=0;i<alpabet.length;i++){

    const idx = input.findIndex(value => value === alpabet[i]);
    total += `${idx.toString()} `;
}
console.log(total.trim());
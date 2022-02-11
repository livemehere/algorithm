const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().split("\n");

const total =input[0];

for(let i =0;i<total;i++){
    const arr = input[i+1].split(' ');
    const n = arr[0];
    const scores = arr.splice(1).map(s=>Number(s));
    const sum = scores.reduce((a,b)=>a+b,0);
    const ave = sum/n;
    let isOver = 0;
    scores.forEach((s)=>{
        if(s > ave){
            isOver++;
        }
    })
    const ratio =(isOver/n * 100).toFixed(3);
    console.log(ratio + '%');
}
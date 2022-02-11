const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().split("\n");

let total = input[0];

for(let i=0;i<total;i++){
    let score = input[i+1];
    console.log(checkScore(score));
}

function checkScore (arr){
    let sum = 0;
    let w = 1;
    for(let i=0;i<arr.length;i++){
        const c =  arr[i];
        if(c == 'O'){
            sum+= w;
            w++;
        }else{
            w =1;
        }
    }
    return sum;
}



const fs = require('fs');
const input = Number(fs.readFileSync('./dev/stdin').toString());

function check(n){
    if(n<10) {
        return true;
    }

    let result = true;
    let arr = n.toString().split('');
    let distance  = Number(arr[0]) - Number(arr[1]);

    for(let i=0;i<arr.length -1;i++) {
       if(Number(arr[i]) - Number(arr[i+1]) !== distance){
           result = false;
       }
    }
    // console.log(distance)

    return result;
}

let sum =0;
for(let i=1;i<=input;i++){
    if(check(i)){
        sum++;
    }
}

console.log(sum);
function d(n){
    let sum = n;
    let individual = n.toString();
    let individualArr = [];
    for(let i =0;i<individual.length;i++){
        const c = Number(individual[i]);
        individualArr.push(c);
    }
    sum += individualArr.reduce((a,b)=>a+b,0);
    return sum;
}

let base = [];
for(let i=0;i<=10000;i++){
    base.push(i);
}


for(let i=0;i<=10000;i++){
    const target = d(i);
    base = base.filter(value => value !== target);
}

base.forEach(v=>console.log(v))

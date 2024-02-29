function calcSum(num){
    let i=1;
    let sum=0;
    do{
        sum+=i;
        i++;
    }
    while(i<=num);

    return sum;
}

console.log(calcSum(10));
console.log(calcSum(20));
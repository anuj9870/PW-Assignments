function generateNums(x,y){
    for(let i=x+1; i<=y; i++){
        process.stdout.write(i + " ");
    }
}

generateNums(10,25);
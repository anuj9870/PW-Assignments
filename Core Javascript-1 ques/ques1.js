function calculateGrade(marks){
    if(marks>90){
        return 'A'
    }
    else if(marks>70 && marks<=90){
        return 'B'
    }
    else if(marks>50 && marks<=70){
        return 'C';
    }
    else{
        return 'D';
    }
}

console.log(calculateGrade(10));
console.log(calculateGrade(55));
console.log(calculateGrade(78));
console.log(calculateGrade(99));
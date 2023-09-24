function evenOrOdd(input){
    let num = Number(input[0]);
    let isEven = num % 2;
    if(isEven == 0){
        console.log("even");
    } else{
        console.log("odd");
    }
}

evenOrOdd(["2"])
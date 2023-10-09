function evenAndOddSubtraction(array){
    let sumOdd = 0;
    let sumEven = 0;

    for(let i = 0; i < array.length; i++){
        let num = Number(array[i]);

        if(num % 2 == 0){
            sumEven += num;
        }else{
            sumOdd += num;
        }
    }

    console.log(sumEven - sumOdd);
}
function sumDigits(num){
    let sum = 0;
    while(num != 0){
        let temp = num % 10;
        num -= temp;
        num /= 10;
        sum += temp;
    }

    console.log(sum);
}

sumDigits(123);
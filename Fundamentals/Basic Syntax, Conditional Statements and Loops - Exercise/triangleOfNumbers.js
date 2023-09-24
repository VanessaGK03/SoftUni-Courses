function triangleOfNumbers(num){

  

    for(let i = 1; i <= num; i++){
        let count = "";
        for(let j = 1; j <= i; j++){
            count += i + " ";
        }
        console.log(count);
    }
}

triangleOfNumbers(3)
function sumNumbers(input){
    let firstNumber = input[0];
    let index = 1;
    let sum = Number(input[index]);

    while(sum < firstNumber){
        index++;
        sum += Number(input[index])
    }

    console.log(sum);
}

sumNumbers(["100", "10", "20", "30", "40"])
function sumOfTwoNumbers(input){
    let begin  = Number(input[0]);
    let end = Number(input[1]);
    let magicNumber = Number(input[2]);

    let sum = 0;
    let combination = 0;
    let flag = false;

    for(let a = begin; a <= end; a++){
        for(let b = begin; b <= end; b++){
            sum = a + b;
            combination++;
            if(sum === magicNumber){
                flag = true;
                console.log(`Combination N:${combination} (${a} + ${b} = ${sum})`);
                break;
            }
        }
        if(flag){
            break;
        }
    }

    if(!flag){
        console.log(`${combination} combinations - neither equals ${magicNumber}`);
    }
}

sumOfTwoNumbers(["1",

"10",

"5"]);
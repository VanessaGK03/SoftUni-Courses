function combination(input){
    let number = Number(input[0]);
    
    let combinations = 0;

    for(let a = 0; a <= number; a++){
        let sum = 0;
        for(let b = 0; b <= number; b++){
            for(let c = 0; c <= number; c++){
                sum = a + b + c;
                if(sum === number){
                    combinations++;
                }
            }
        }
    }

    console.log(combinations);
}

combination(["25"]);
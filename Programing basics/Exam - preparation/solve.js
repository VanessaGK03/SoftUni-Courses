function isValidNumber(number) {
    return number % 10 === 5;
}

function findValidCombination(n) {
    let isDone = false;
    for (let a = 1; a <= 9; a++) {
        for (let b = 9; b >= a; b--) {
            for (let c = 0; c <= 9; c++) {
                for (let d = 9; d >= c; d--) {
                    const sum = a + b + c + d;
                    const product = a * b * c * d;

                    if (sum === product && isValidNumber(n)) {
                        console.log("" + a + b + c + d);
                        isDone = true;
                        break;
                    }

                    if (product % sum === 3 && n % 3 === 0) {
                       console.log("" + d + c + b + a);
                       isDone = true;
                       break;
                    }
                }
                if(isDone){
                    break;
                }
            }
            if(isDone){
                break;
            }
        }
        if(isDone){
            break;
        }
    }

    if(!isDone){
        console.log("Nothing found");
    }
   
}

findValidCombination(["145 "]);



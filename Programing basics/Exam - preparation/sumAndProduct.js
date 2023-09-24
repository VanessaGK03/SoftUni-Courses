function sumAndProduct(input){
    let n = Number(input[0]);

    let isDone = false;

    

    for(let a = 1; a <= 9; a++){
        for(let b = a; b >= 9; b--){
            for(let c = 0; c <= 9; c++){
                for( let d = 9; d >= c; d--){
                    let sumOfAdd = a + b + c + d;
                    let sumOfMul = a * b * c * d;

                    if(sumOfAdd === sumOfMul && (n % 10 === 5)){
                        console.log(`${a}${b}${c}${d}`);
                        isDone = true;
                        break;
                    }else if(sumOfMul % sumOfAdd === 3 && (n % 3 === 0)){
                        console.log(`${d}${c}${b}${a}`);
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

sumAndProduct(["123"]);
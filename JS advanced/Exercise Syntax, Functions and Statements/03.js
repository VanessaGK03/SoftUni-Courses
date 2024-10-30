function sameNumbers(digits){
    let strDigits = digits.toString();
    let areSame = true;

    for(let i = 0; i < strDigits.length; i++){
        let current = strDigits[i];
        for (let j = 0; j < strDigits.length; j++) {
            let checkNum = strDigits[j];

            if(current !== checkNum){
                areSame = false;
                break;
            }
            
        }
        if (!areSame) {
            break;
        }
    }

    let arr = strDigits.split('')
    let sum = arr.reduce((acc, x) => acc + Number(x), 0);

    console.log(areSame);
    console.log(sum);
    
    
}

sameNumbers(2222222);
sameNumbers(1234);
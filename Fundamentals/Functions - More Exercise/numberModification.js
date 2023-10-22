function numberModification(num){
    let average = 0;
    let numAsString = String(num);
    let isAvrGreaterThan5 = false;
    while(!isAvrGreaterThan5){
        
        let sum = 0;
        for(let i = 0 ; i < numAsString.length; i++){
            let el = Number(numAsString[i]);
            sum += el;
        }
        average = sum / numAsString.length;
        if(average <= 5){
            numAsString += '9';
        }else{
            isAvrGreaterThan5 = true;
        }
    }

    console.log(numAsString);
    
}

numberModification(101);
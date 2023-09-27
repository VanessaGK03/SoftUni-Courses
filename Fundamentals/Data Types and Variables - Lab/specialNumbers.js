function specialNumbers(n){

    

    for(let i = 1; i <= n; i++){
        let isSpecial = "False";
        let sum = 0;
        numAsString = String(i);
        for(let j = 0; j < numAsString.length; j++){
            sum += Number(numAsString[j]);    
        }
        if(sum == 5 || sum == 7 || sum == 11){
            isSpecial = "True";
        }
        console.log(`${i} -> ${isSpecial}`);
    }

    
}

specialNumbers(100);
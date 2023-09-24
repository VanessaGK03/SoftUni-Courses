function equalSumsEvenOddPosition(input){
    let start = Number(input[0]);
    let end = Number(input[1]);

    

    let buff = "";

    for(let i = start; i <= end; i++){
        let sumEvens = 0;
        let sumOdds = 0;
        let numberAsString = String(i);
        for(let j = 0; j < numberAsString.length; j++){
            if(j % 2 === 0){
                sumEvens += Number(numberAsString[j]);
            }else{
                sumOdds += Number(numberAsString[j]);
            }

        }
        if(sumEvens === sumOdds){
            buff += i + " ";
        }
    }
    console.log(buff);
}

equalSumsEvenOddPosition(["100000",

"100050"]);
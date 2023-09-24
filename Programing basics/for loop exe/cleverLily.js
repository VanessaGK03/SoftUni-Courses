function cleverLily(input){
    let age = Number(input[0]);
    let washMashinPrice = Number(input[1]);
    let toyPrice = Number(input[2]);

    let toyCount = 0;
    let moneyForBirthday = 0;
    let stolenMoney = 0;
    let savedMoney = 0;


    for(let i = 1; i <= age; i++){
        if(i % 2 === 0){
            stolenMoney++;
            moneyForBirthday += 10;
            savedMoney += moneyForBirthday;
        }else{
            toyCount++;
        }
    }

    let totalToysMoney = toyCount * toyPrice;
    savedMoney = (savedMoney -stolenMoney) + totalToysMoney;
    
    if(savedMoney >= washMashinPrice){
        console.log(`Yes! ${(savedMoney - washMashinPrice).toFixed(2)}`);
    }else{
        console.log(`No! ${(washMashinPrice - savedMoney).toFixed(2)}`);
    }

}

cleverLily(["10",

"170.00",

"6"])
function godzillaVsKong(input){
    let buget = Number(input[0]);
    let people = Number(input[1]);
    let clothesPricePerPerson = Number(input[2]);

    let decorPrice = buget * 0.10;
    let clothesPrice = clothesPricePerPerson * people;
    if(people > 150){
        clothesPrice -= (clothesPrice * 0.10);
    }

    let totalSum = decorPrice + clothesPrice;

    if(totalSum <= buget){
        console.log("Action!");
        console.log(`Wingard starts filming with ${(buget - totalSum).toFixed(2)} leva left.`);
    }else{
        console.log("Not enough money!");
        console.log(`Wingard needs ${(totalSum - buget).toFixed(2)} leva more.`);
    }
}

godzillaVsKong(["20000",
"120",
"55.5"]);
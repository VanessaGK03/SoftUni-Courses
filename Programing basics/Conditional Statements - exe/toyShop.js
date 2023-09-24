function toyShop(input){
    let tripPrice = Number(input[0]);
    let puzles = Number(input[1]);
    let dolls = Number(input[2]);
    let bears = Number(input[3]);
    let minions = Number(input[4]);
    let truck = Number(input[5]);

    let sum = puzles * 2.60 + dolls * 3.00 + bears * 4.10 + minions * 8.20 + truck * 2.00;
    let toysCount = puzles + dolls + bears + minions + truck;

    if(toysCount >= 50){
        sum -= (sum * 0.25);
    }

    sum -= (sum * 0.10);

    if(tripPrice <= sum){
        console.log(`Yes! ${(sum - tripPrice).toFixed(2)} lv left.`);
    }else{
        console.log(`Not enough money! ${(tripPrice - sum).toFixed(2)} lv needed.`);
    }
    
}

toyShop(["40.8",
"20",
"25",
"30",
"50",
"10"]);
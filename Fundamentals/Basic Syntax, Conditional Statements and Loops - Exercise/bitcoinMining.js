function bitcoinMining(input){
    let dig = input[0];
    let index = 1;

    let totalMoney = 0;
    let bitcoinPrice = 11949.16;
    let bitcoins = 0;
    let day = 0;

    thirthDays = 0;

    while(index <= input.length){

        thirthDays++;

        let goldPerDay = Number(dig * 67.51);
        if(thirthDays == 3){
            goldPerDay -= goldPerDay * 0.30;
            thirthDays = 0; 
        }
        totalMoney += goldPerDay;

        

        while(totalMoney >= bitcoinPrice){
            bitcoins++;
            if(bitcoins == 1){
                day = index;
            }
            totalMoney -= bitcoinPrice;
        }

        
        dig = input[index];
        index++;
    }
    console.log(`Bought bitcoins: ${bitcoins}`);
    if(bitcoins != 0){
        console.log(`Day of the first purchased bitcoin: ${day}`);
    }
    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);

}

bitcoinMining([3124.15,504.212,2511.124]);
//bitcoinMining([100,200,300]);
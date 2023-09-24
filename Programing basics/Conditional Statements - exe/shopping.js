function shopping(input){
    let buget = Number(input[0]);
    let videocards = Number(input[1]);
    let processor = Number(input[2]);
    let ram = Number(input[3]);

    let videocardsPrice = videocards * 250;
    let processorprice = (videocardsPrice * 0.35) * processor;
    let ramPrice = (videocardsPrice * 0.10) * ram;
    
    let totalSum = videocardsPrice + processorprice + ramPrice;

    if(videocards > processor){
        totalSum -= (totalSum * 0.15);
    }

    if(buget >= totalSum){
        console.log(`You have ${(buget - totalSum).toFixed(2)} leva left!`);
    }else{
        console.log(`Not enough money! You need ${(totalSum - buget).toFixed(2)} leva more!`);
    }
}

shopping(["900",
"2",
"1",
"3"]);
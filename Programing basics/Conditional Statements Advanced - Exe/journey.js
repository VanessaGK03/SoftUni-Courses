function journey(input){
    let budget = Number(input[0]);
    let season = input[1];

    let price = 0;
    let place = "Camp";

    if(budget <= 100){
        console.log("Somewhere in Bulgaria");
        if( season === "summer"){
            price = budget * 0.30;
        }else{
            price = budget * 0.70;
            place = "Hotel";
        }
    } else if( budget > 100 && budget <= 1000){
        console.log("Somewhere in Balkans");
        if( season === "summer"){
            price = budget * 0.40;
        }else{
            price = budget * 0.80;
            place = "Hotel";
        }
    }else{
        console.log("Somewhere in Europe");
        price = budget * 0.90;
        place = "Hotel";
    }

    console.log(`${place} - ${price.toFixed(2)}`);
}

journey(["50", "summer"])
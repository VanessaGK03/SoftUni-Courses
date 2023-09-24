function worldSnookerChampionship(input){
    let level = input[0];
    let ticketType = input[1];   //- “Standard”, “Premium” или “VIP”
    let ticketCount = input[2];
    let picture = input[3];

    let price = 0;
    let freePictures = false;

    if(level === "Quarter final"){
        if(ticketType === "Standard"){
            price = ticketCount * 55.50;
        }else if(ticketType === "Premium"){
            price = ticketCount * 105.20;
        }else if(ticketType === "VIP" ){
            price = ticketCount * 118.90;
        }
    }else if(level === "Semi final"){
        if(ticketType === "Standard"){
            price = ticketCount * 75.88;
        }else if(ticketType === "Premium"){
            price = ticketCount * 125.22;
        }else if(ticketType === "VIP" ){
            price = ticketCount * 300.40;
            
        }
    }else if(level === "Final"){
        if(ticketType === "Standard"){
            price = ticketCount * 110.10;
        }else if(ticketType === "Premium"){
            price = ticketCount * 160.66;
        }else if(ticketType === "VIP" ){
            price = ticketCount * 400;
        }
    }

    if(price > 4000){
        freePictures = true;
        price -= price * 0.25 ;
    }else if(price > 2500){
        price -= price * 0.10;
    }

    if(picture === "Y" && !freePictures){
        price += ticketCount * 40;
    }


    
    console.log(price.toFixed(2));
}

worldSnookerChampionship(["Semi final",
"VIP",
"9",
"Y"])


function santasHoliday(input){
    let days = Number(input[0]) - 1;
    let place = input[1];
    let grade = input[2];

    let bill = 0;
    let offer = 0;

    if(days < 10){
        if(place === "room for one person"){
            bill = 18 * days;
        }else if(place === "apartment"){
            bill = 25 * days;
            bill -= bill * 0.30;
            
        }else if(place === "president apartment"){
            bill = 35 * days;
            bill -= bill * 0.10;
        }

    }else if( days < 16){
        if(place === "room for one person"){
            bill = 18 * days;
        }else if(place === "apartment"){
            bill = 25 * days;
            bill -= bill * 0.35;
            
        }else if(place === "president apartment"){
            bill = 35 * days;
            bill -= bill * 0.15;
        }
    }else if(days > 15){
        if(place === "room for one person"){
            bill = 18 * days;
        }else if(place === "apartment"){
            bill = 25 * days;
            bill -= bill * 0.50;
            
        }else if(place === "president apartment"){
            bill = 35 * days;
            bill -= bill * 0.20;
        }
    }


    if(grade === "positive"){
        bill += bill * 0.25;
    }else if(grade === "negative"){
        bill -= bill * 0.10;
    }

    console.log(bill.toFixed(2));
}

santasHoliday(["14",
"apartment",
"positive"])
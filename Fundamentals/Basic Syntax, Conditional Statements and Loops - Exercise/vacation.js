function vacation(group, type, day){
    let pricePerPerson = 0;

    if(type == "Students"){
        if(day == "Friday"){
            pricePerPerson = 8.45;
        }else if( day == "Saturday"){
            pricePerPerson = 9.80;
        }else if(day == "Sunday"){
            pricePerPerson = 10.46;
        }

    }else if(type == "Business"){
        if(day == "Friday"){
            pricePerPerson = 10.90;
        }else if( day == "Saturday"){
            pricePerPerson = 15.60;
        }else if(day == "Sunday"){
            pricePerPerson = 16;
        }

    }else if(type == "Regular"){
        if(day == "Friday"){
            pricePerPerson = 15;
        }else if( day == "Saturday"){
            pricePerPerson = 20;
        }else if(day == "Sunday"){
            pricePerPerson = 22.50;
        }
    }

    let totalprice = pricePerPerson * group;

    if(type == "Students" && group >= 30){
        totalprice -= (totalprice * 0.15); 
    }else if(type == "Business" && group >= 100){
        totalprice -= pricePerPerson * 10;
    }else if(type == "Regular" && (group >= 10 && group <= 20)){
        totalprice -= (totalprice * 0.05);
    }

    console.log(`Total price: ${totalprice.toFixed(2)}`);


}

vacation(30,

    "Students",
    
    "Sunday")


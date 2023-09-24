function summerOutfit(input){
    let degrees = Number(input[0]);
    let time = input[1];

    let outfit = "";
    let shoes = "";

    if(degrees >= 10 && degrees <= 18){
        if( time === "Morning"){
            outfit = "Sweatshirt";
            shoes = "Sneakers";
        }else if(time === "Afternoon" || time === "Evening"){
            outfit = "Shirt";
            shoes = "Moccasins";
        }
    }else if(degrees > 18 && degrees <= 24){
        if(time === "Morning" || time === "Evening"){
            outfit = "Shirt";
            shoes = "Moccasins";
        }else{
            outfit = "T-Shirt"; 
            shoes = "Sandals";
        }
    }else if(degrees > 24){
        if(time === "Morning"){
            outfit = "T-Shirt"; 
            shoes = "Sandals";
        }else if(time === "Afternoon"){
            outfit = "Swim Suit"; 
            shoes = "Barefoot";
        }else{
            outfit = "Shirt";
            shoes = "Moccasins";
        }
    }

    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
}
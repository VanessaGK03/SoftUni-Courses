function smallShop(input){
    let product = input[0];
    let town = input[1];
    let quantity = Number(input[2]);

    let price = 0;
/*
    if(product === "coffee"){
        if(town === "Sofia"){
            price = quantity * 0.50;
        }else if(town === "Plovdiv"){
            price = quantity * 0.40;
        }else{
            price = quantity * 0.45;
        }
    }else if(product === "water"){
        if(town === "Sofia"){
            price = quantity * 0.80;
        }else if(town === "Plovdiv"){
            price = quantity * 0.70;
        }else{
            price = quantity * 0.70;
        }
    }else if(product === "beer"){
        if(town === "Sofia"){
            price = quantity * 1.20;
        }else if(town === "Plovdiv"){
            price = quantity * 1.15;
        }else{
            price = quantity * 1.10;
        }

    }else if(product === "sweets"){
        if(town === "Sofia"){
            price = quantity * 1.45;
        }else if(town === "Plovdiv"){
            price = quantity * 1.30;
        }else{
            price = quantity * 1.35;
        }
    }else{
        if(town === "Sofia"){
            price = quantity * 1.60;
        }else if(town === "Plovdiv"){
            price = quantity * 1.50;
        }else{
            price = quantity * 1.55;
        }
    }
*/


    switch(product){
        case "coffee" :
            switch(town){
                case "Sofia" : price = quantity * 0.50; break;
                case "Plovdiv" : price = quantity * 0.40; break;
                default : price = quantity * 0.45; break;
            } break;
        case "water" :
            switch(town){
                case "Sofia" : price = quantity * 0.80; break;
                case "Plovdiv" : price = quantity * 0.70; break;
                default : price = quantity * 0.70; break;
            } break;
        case "beer" :
            switch(town){
                case "Sofia" : price = quantity * 1.20; break;
                case "Plovdiv" : price = quantity * 1.15; break;
                default : price = quantity * 1.10; break;
            } break;
        case "sweets" :
            switch(town){
                case "Sofia" : price = quantity * 1.45; break;
                case "Plovdiv" : price = quantity * 1.30; break;
                default : price = quantity * 1.35; break;
            } break;
        default: 
            switch(town){
        case "Sofia" : price = quantity * 1.60; break;
        case "Plovdiv" : price = quantity * 1.50; break;
        default : price = quantity * 1.55; break;
            } break;
    }





    console.log(price);
}




smallShop(["coffee",

"Varna",

"2"])
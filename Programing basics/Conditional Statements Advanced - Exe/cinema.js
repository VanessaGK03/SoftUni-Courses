function cinema(input){
    let type = input[0];
    let r = Number(input[1]);
    let c = Number(input[2]);

    let sits = r * c;

    let price = 0;

    if(type === "Premiere"){
        price = sits * 12;
    }else if(type === "Normal"){
        price = sits * 7.50;
    }else {
        price = sits * 5;
    }

    console.log(`${price.toFixed(2)} leva`);
}
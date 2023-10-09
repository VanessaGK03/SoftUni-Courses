function spiceMustFlow(yields){

    let totalSpice = 0;
    let days = 0;

    while(yields >= 100){
        days++;
        totalSpice += (yields - 26);
        yields -= 10; 
        
    }

    if(totalSpice >= 26){
        totalSpice -= 26;
    }
console.log(days);
console.log(totalSpice);

}

spiceMustFlow(450);
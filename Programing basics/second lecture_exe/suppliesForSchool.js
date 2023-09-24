function suppliesForSchool(input){
    let pens = Number(input[0]) * 5.80;
    let markers = Number(input[1]) * 7.20;
    let detersive = Number(input[2]) * 1.20;
    let discount = Number(input[3]) / 100;

    let total = pens + markers + detersive;
    let finalprice = total - (total * discount);

    console.log(finalprice);
    
}

suppliesForSchool(["2 ","3 ","4 ","25 "])
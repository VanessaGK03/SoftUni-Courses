function petShop(input){
    let dogsFood = Number(input[0]);
    let catsFood = Number(input[1]);

    let totalSum = dogsFood * 2.50 + catsFood * 4;

    console.log(totalSum + " lv.");
}

petShop(["5 ","4 "])
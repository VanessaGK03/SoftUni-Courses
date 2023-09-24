function vegetableMarket(input){
    let priceVegetables = Number(input[0]);
    let priceFruits = Number(input[1]);
    let totalVegetables = Number(input[2]);
    let totalFruits = Number(input[3]);

    let sumVegetables = priceVegetables * totalVegetables;
    let sumFruits = priceFruits * totalFruits;

    let totalSum = (sumFruits + sumVegetables) / 1.94;

    console.log(totalSum.toFixed(2));
}

vegetableMarket([0.194,
19.4,
10,
10]);
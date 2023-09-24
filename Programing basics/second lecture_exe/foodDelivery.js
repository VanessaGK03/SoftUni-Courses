function  foodDelivery(input){
    let chickenMenu = Number(input[0]) * 10.35;
    let fishMenu = Number(input[1]) * 12.40;
    let vegeMenu = Number(input[2]) *8.15;

    let sumWithoutDesert = chickenMenu + fishMenu + vegeMenu;
    let sumWithDesert = sumWithoutDesert + (sumWithoutDesert * 0.20);

    let totalSum = sumWithDesert + 2.50;

    console.log(totalSum);
}

foodDelivery(["2 ","4 ","3 "])
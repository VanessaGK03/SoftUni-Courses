function basketballEquipment(input){
    let annualFee = Number(input[0]);
    let sneckers = annualFee - (annualFee * 0.40);
    let outfit = sneckers - (sneckers * 0.20);
    let ball = outfit * 0.25;
    let acsesories = ball * 0.20;

    let total = annualFee + sneckers + outfit + ball + acsesories;

    console.log(total);
}

basketballEquipment(["365 "]);
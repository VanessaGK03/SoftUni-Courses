function vacation(input){
    let tripMoney = Number(input[0]);
    let savedMoney = Number(input[1]);

    let index = 2;
    let spends = 0;
    let days = 0;

    while(index < input.length){
        let condition = input[index];
        index++;
        let sum = Number(input[index]);
        index++;
        days++;

        if(condition === "spend"){
            savedMoney -= sum;
            if(savedMoney < 0){
                savedMoney = 0;
            }
            spends++;
            if(spends === 5){
                console.log("You can't save the money.");
                console.log(days);
                break;
            }
        }else if(condition === "save"){
            savedMoney += sum;
            spends = 0;
        }
    }

    if(savedMoney >= tripMoney){
        console.log(`You saved the money for ${days} days.`);
    }
}

vacation(["250",

"150",

"spend",

"50",

"spend",

"50",

"save",

"100",

"save",

"100"])
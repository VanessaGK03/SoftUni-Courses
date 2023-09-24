function traveling(input){
    let index = 0;
    let command = input[index];

    while(command !== "End"){
        index++;
        let neededMoney = Number(input[index]);
        let haveMoney = 0;
        index++;
        while(haveMoney < neededMoney){
            haveMoney += Number(input[index]);
            index++;
        }
        console.log(`Going to ${command}!`);
        command = input[index];
        //index++;
    }
}

traveling(["Greece",

"1000",

"200",

"200",

"300",

"100",

"150",

"240",

"Spain",

"1200",

"300",

"500",

"193",

"423",

"End"])
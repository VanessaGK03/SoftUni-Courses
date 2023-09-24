function accountBalance(input){
    let index = 0;
    let command = input[index];
    let sum = 0;

    while(command !== "NoMoreMoney"){
        let increase = Number(command);
        if(increase <= 0){
            console.log("Invalid operation!");
            break;
        }
        console.log(`Increase: ${increase.toFixed(2)}`);
        sum += increase;
        index++;
        command = input[index];
        
    }

    console.log(`Total: ${sum.toFixed(2)}`);
}

accountBalance(["120", "45.55", "-150"])
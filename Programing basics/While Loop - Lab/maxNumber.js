function maxNumber(input){
    let index = 1;
    let maxNumber = Number(input[0]);
    let command = input[index];

    while(command !== "Stop"){
        let curNumber = Number(command);
        index++;
        command = input[index];
        if(maxNumber < curNumber){
            maxNumber = curNumber;
        }
    }

    console.log(maxNumber);
}

maxNumber(["-10", "20", "-30", "Stop"])
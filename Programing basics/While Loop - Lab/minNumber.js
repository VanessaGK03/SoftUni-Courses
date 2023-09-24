function minNumber(input){
    let index = 1;
    let minNumber = Number(input[0]);
    let command = input[index];

    while(command !== "Stop"){
        let curNumber = Number(command);
        index++;
        command = input[index];
        if(minNumber > curNumber){
            minNumber = curNumber;
        }
    }

    console.log(minNumber);
}

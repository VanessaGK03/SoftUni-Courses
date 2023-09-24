function sequence2kPlus1(input){
    let number = Number(input[0]);

    let curNumber = 1;

    while(curNumber <= number){
        console.log(curNumber);
        curNumber = 2 * curNumber + 1;
        
    }
    
}

sequence2kPlus1(["8"]);
function walking(input){
    
    let index = 0;
   // let command = input[index];
    let steps = 0;
    let newSteps = 0;

    while(index < input.length){
        let command = input[index];
        if(command !== "Going home"){
            newSteps = Number(command);
            index++;
            steps += newSteps;
        }else{
            index++;
           // newSteps = Number(input[index]);
           // steps += newSteps;
        }
    }

    if(steps >= 10000){
        console.log(`Goal reached! Good job!`);
        console.log(`${steps - 10000} steps over the goal!`);
    }else{
        console.log(`${10000 - steps} more steps to reach goal.`);
    }

}

walking(["1500", "300", "2500", "3000", "Going home", "200"])
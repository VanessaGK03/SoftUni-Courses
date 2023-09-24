function renovation(input){
    let height = Number(input[0]);
    let widht = Number(input[1]);
    let nonPaintedPercent = Number(input[2]);

    let allQuadratic = height * widht * 4;
    let totalPainted = Math.ceil(allQuadratic * (1- (nonPaintedPercent / 100)));

    let index = 3;
    let command = input[index];

    while(command !== "Tired!"){
        let paint = Number(command);
        index++;

        totalPainted -= paint;

        if(totalPainted <= 0){
            break;
        }
        command = input[index];
    }

    if(totalPainted > 0){
        console.log(`${totalPainted} quadratic m left.`);
    }else if(totalPainted === 0){
        console.log("All walls are painted! Great job, Pesho!");
    }else if(totalPainted < 0){
        console.log(`All walls are painted and you have ${Math.abs(totalPainted)} l paint left!`);
    }


}

renovation(["3",
"5",
"10",
"2",
"3",
"4",
"Tired!"]);

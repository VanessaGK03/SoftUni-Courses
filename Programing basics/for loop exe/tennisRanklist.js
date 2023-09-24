function tennisRanklist(input){
    let tournirsCount = Number(input[0]);
    let startingPoints = Number(input[1]);

    let finalPoints = 0;
    let winns = 0;

    for(let i = 2; i < input.length; i++){
        let status = input[i];

        if(status === "W"){
            finalPoints += 2000;
            winns++;
        }else if(status === "F"){
            finalPoints += 1200;
        }else if(status === "SF"){
            finalPoints += 720;
        }

    }

    console.log(`Final points: ${startingPoints + finalPoints}`);
    console.log(`Average points: ${Math.floor(finalPoints / tournirsCount)}`);
    console.log(`${(winns / tournirsCount * 100).toFixed(2)}%`);

}

tennisRanklist(["5",

"1400",

"F",

"SF",

"W",

"W",

"SF"])
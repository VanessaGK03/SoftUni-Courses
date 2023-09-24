function oscars(input){
    let name = input[0];
    let startingPoints = Number(input[1]);
    let judges = Number(input[2]);

    for(let i = 3; i < input.length; i++){
        let judgeName = input[i];
        i++;
        let judgePoints = Number(input[i]);
        startingPoints += (judgeName.length * judgePoints) / 2; 

        if( startingPoints > 1250.5){
            console.log(`Congratulations, ${name} got a nominee for leading role with ${(startingPoints).toFixed(1)}!`);
            break;
        }
    }

    if(startingPoints <= 1250.5){
        console.log(`Sorry, ${name} you need ${(1250.5 - startingPoints).toFixed(1)} more!`);
    }

}

oscars(["Zahari Baharov",

"205",

"4",

"Johnny Depp",

"45",

"Will Smith",

"29",

"Jet Lee",

"10",

"Matthew Mcconaughey",

"39"])
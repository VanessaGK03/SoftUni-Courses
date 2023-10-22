function counterStrike(arr){
    let energy = Number(arr.shift());
    let command = arr.shift();
    let wins = 0;

    while(command != "End of battle"){
        let distance = Number(command);

        if(energy - distance >= 0){
            energy -= distance;
            wins++;
            if(wins % 3 == 0){
                energy += wins;
            }
        }else{
            
            console.log(`Not enough energy! Game ends with ${wins} won battles and ${energy} energy`);
            return;
        }
        command = arr.shift();
    }

    console.log(`Won battles: ${wins}. Energy left: ${energy}`);
}

counterStrike(["200",
"54",
"14",
"28",
"13",
"End of battle"]);
function manOWar(arr){
    let pirate = arr.shift().split('>').map(Number);
    let warship = arr.shift().split('>').map(Number);
    let maxHealth = Number(arr.shift());

    let needRepair = maxHealth * 0.20;


    for(let current of arr){
    
        let tokens = current.split(' ');
        let action = tokens.shift();

        if(action == 'Retire'){
            break;
        }else if(action == 'Fire'){
            let index = Number(tokens[0]);
            let damage = Number(tokens[1]);
            if(index < 0 || index >= warship.length){
                continue;
            }
            warship[index] -= damage;
            if(warship[index] <= 0){
                console.log(`"You won! The enemy ship has sunken.`);
                return;
            }   
        }else if(action == 'Defend'){
            let startIndex = Number(tokens[0]);
            let endIndex = Number(tokens[1]);
            let damage = Number(tokens[2]);

            if((startIndex < 0 || startIndex >= pirate.length) || (endIndex < 0 || endIndex >= pirate.length)){
                continue;
            }
            for(let i = startIndex; i <= endIndex; i++){
                pirate[i] -= damage;
                if(pirate[i] <= 0){
                    console.log("You lost! The pirate ship has sunken.");
                    return;
                }
            }

        }else if(action == 'Repair'){
            let index = Number(tokens[0]);
            let health = Number(tokens[1]);
            if(index < 0 || index >= pirate.length){
                continue;
            }
            pirate[index] += health;
            if(pirate[index] > maxHealth){
                pirate[index] = maxHealth;
            }
        }else if(action == 'Status'){
            let damaged = pirate.filter(section => section < needRepair);
            
            console.log(`${damaged.length} sections need repair.`);
        }
    }

    let pirateStatus = pirate.reduce((sum, section) => sum + section);
    let warshipStatus = warship.reduce((sum, section) => sum + section);
    
    console.log(`Pirate ship status: ${pirateStatus}`);
    console.log(`Warship status: ${warshipStatus}`);

}


manOWar(["12>13>11>20>66",
 "12>22>33>44>55>32>18", 
 "70", 
 "Fire 2 11", 
 "Fire 8 100", 
 "Defend 3 6 11", 
 "Defend 0 3 5", 
 "Repair 1 33", 
 "Status", 
 "Retire"])
 
/*
 manOWar(["2>3>4>5>2",

 "6>7>8>9>10>11",
 
 "20",
 
 "Status",
 
 "Fire 2 3",
 
 "Defend 0 4 11",
 
 "Repair 3 18",
 
 "Retire"]);
 */
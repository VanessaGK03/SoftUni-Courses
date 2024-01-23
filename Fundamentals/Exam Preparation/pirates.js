function pirates(arr){
    let command = arr.shift();

    let targets = {};

    while(command != 'Sail'){
        let [name, population, gold] = command.split('||');
        population = Number(population);
        gold = Number(gold);

        if(name in targets){
            targets[name].population += population;
            targets[name].gold += gold;
        }else{
            targets[name] = {population, gold};
        }

        command = arr.shift();
    }

    command = arr.shift();

    while(command != 'End'){
        let tokens = command.split('=>');
        let action = tokens[0];

        if(action == 'Plunder'){
            let town = tokens[1];
            let people = Number(tokens[2]);
            let gold = Number(tokens[3]);

            targets[town].population -= people;
            targets[town].gold -= gold;

            console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`);

            if(targets[town].population <= 0 || targets[town].gold <= 0){
                delete targets[town];
                console.log(`${town} has been wiped off the map!`);
            }

        }else if(action == 'Prosper'){
            let town = tokens[1];
            let gold = Number(tokens[2]);

            if(gold < 0){
                console.log('Gold added cannot be a negative number!');
                command = arr.shift();
                continue;
            }

            targets[town].gold += gold;
            console.log(`${gold} gold added to the city treasury. ${town} now has ${targets[town].gold} gold.`);
        }


        command = arr.shift();
    }

    let entries = Object.entries(targets);

    if(entries.length == 0){
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
    }else{
        console.log(`Ahoy, Captain! There are ${entries.length} wealthy settlements to go to:`);
        entries.forEach(([town, stats]) => console.log(`${town} -> Population: ${stats.population} citizens, Gold: ${stats.gold} kg`));
    }

}

pirates(["Tortuga||345000||1250",

"Santo Domingo||240000||630",

"Havana||410000||1100",

"Sail",

"Plunder=>Tortuga=>75000=>380",

"Prosper=>Santo Domingo=>180",

"End"]);
function wildZoo(arr){
    let animals = {};
    let areas = {};

    let command = arr.shift();
    while(command != 'EndDay'){
        let [action, animalInfo] = command.split(': ');

        if(action == 'Add'){
            let [name, neededFood, area] = animalInfo.split('-');
            neededFood = Number(neededFood);

            if(name in animals){
                animals[name].neededFood += neededFood;
            }else{
                animals[name] = {neededFood, area};
                if(area in areas){
                    areas[area] += 1;
                }else{
                    areas[area] = 1;
                }
            }

            
            
            
        }else if( action == 'Feed'){
            let [name, food] = animalInfo.split('-');
            
            food = Number(food);

            if(name in animals){
                animals[name].neededFood -= food;
                if(animals[name].neededFood <= 0){
                   
                    areas[animals[name].area] -= 1;
                    if(areas[animals[name].area] == 0){
                        delete areas[animals[name].area];
                    }
                    delete animals[name];
                    console.log(`${name} was successfully fed`);
                }
            }

        }

        command = arr.shift();
    }

    let entries = Object.entries(animals);

    console.log('Animals:');
    entries.forEach(([name, stats]) => console.log(`${name} -> ${stats.neededFood}g`));

    console.log(`Areas with hungry animals:`);
    let entries2 = Object.entries(areas);
    entries2.forEach(([area, num]) => console.log(`${area}: ${num}`));
}

/*wildZoo(["Add: Adam-4500-ByTheCreek",

"Add: Maya-7600-WaterfallArea",

"Add: Maya-1230-WaterfallArea",

"Feed: Jamie-2000",

"EndDay"]);*/

wildZoo(["Add: Jamie-600-WaterfallArea",

"Add: Maya-6570-WaterfallArea",

"Add: Adam-4500-ByTheCreek",

"Add: Bobbie-6570-WaterfallArea",

"Feed: Jamie-2000",

"Feed: Adam-2000",

"Feed: Adam-2500",

"EndDay"])
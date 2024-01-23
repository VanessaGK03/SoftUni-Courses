function plantDiscovery(arr){
    let n = arr.shift();
    let plants = {};

    for(let i = 0; i < n; i++){
        let plantInfo = arr.shift();
        let [plant, rarity] = plantInfo.split('<->');
        rarity = Number(rarity);

        plants[plant] = {rarity: rarity, rating: []};
    }

    let command = arr.shift();

    while(command != 'Exhibition'){
        let [action, tokens] = command.split(': ');

        if(action == 'Rate'){
            let [plant, rating] = tokens.split(' - ');
            rating = Number(rating);

            if(plant in plants){
                plants[plant].rating.push(rating);
            }else{
                console.log('error');
            }
        }else if(action == 'Update'){
            let [plant, newRarity] = tokens.split(' - ');
            newRarity = Number(newRarity);
            
            if(plant in plants){
                plants[plant].rarity = newRarity;
            }else{
                console.log('error');
            }
        }else if(action = 'Reset'){
            let plant = tokens;
            if(plant in plants){
                plants[plant].rating = [];
            }else{
                console.log('error');
            }
        }

        command = arr.shift();
    }

    for(let plant in plants){
        if('rating' in plants[plant] && plants[plant].rating.length > 0){
            let sum = plants[plant].rating.reduce((acc, cur) => acc + cur, 0);
            let avr = sum / plants[plant].rating.length || 0;
    
            plants[plant].rating = avr;
        } else {
            plants[plant].rating = 0;
        }
    }
    console.log("Plants for the exhibition:");
    let entries = Object.entries(plants);
    entries.forEach(([plant, stats]) => console.log(`- ${plant}; Rarity: ${stats.rarity}; Rating: ${(stats.rating).toFixed(2)}`));
}

plantDiscovery(["3",
"Arnoldii<->4",
"Woodii<->7",
"Welwitschia<->2",
"Rate: Woodii - 10",
"Rate: Welwitschia - 7",
"Rate: Arnoldii - 3",
"Rate: Woodii - 5",
"Update: Woodii - 5",
"Reset: Arnoldii",
"Exhibition"]);
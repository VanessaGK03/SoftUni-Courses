function inventory(arr){
    heroes = [];

    for(let heroInfo of arr){
        let [heroName, level, items] = heroInfo.split(' / ');
        let heroObj = {
            Hero : heroName,
            level : level,
            items : items,
        }

        heroes.push(heroObj);
    }

    heroes.sort((a, b) => a.level - b.level);

    for(let hero of heroes){
        for(let entrie of Object.entries(hero)){
            let[key, value] = entrie;
            if(key == 'Hero'){
                console.log(`${key}: ${value}`);
            }else{
                console.log(`${key} => ${value}`);
            }
        }
    }
}

/*inventory([

    'Isacc / 25 / Apple, GravityGun',
    
    'Derek / 12 / BarrelVest, DestructionSword',
    
    'Hes / 1 / Desolator, Sentinel, Antara'
    
    ]);*/

    inventory([

        'Batman / 2 / Banana, Gun',
        
        'Superman / 18 / Sword',
        
        'Poppy / 28 / Sentinel, Antara'
        
        ])
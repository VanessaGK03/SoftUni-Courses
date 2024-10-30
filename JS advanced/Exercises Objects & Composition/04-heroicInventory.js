function heroicInventory(arr){
    let register = [];
    
    for(let heroInfo of arr){
        let tokens = heroInfo.split(' / ');
        let name = tokens[0];
        let level = Number(tokens[1]);
        let items = tokens[2].split(', ');

        let hero = {
            name, 
            level, 
            items,
        }

        register.push(hero);
    }

    console.log(JSON.stringify(register));
    
}


heroicInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);
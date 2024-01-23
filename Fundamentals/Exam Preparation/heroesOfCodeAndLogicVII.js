function heroesOfCodeAndLogicVII(arr){
    let n = Number(arr.shift());

    let heroes = {};

    for(let i = 0; i < n; i++){
        let line = arr.shift();
        let [name, hp, mp] = line.split(' ');

        let hero = {
            hp : Number(hp),
            mp : Number(mp),
        }

        heroes[name] = hero;
    }

    let command = arr.shift();

    while(command != 'End'){
        let tokens = command.split(' - ');
        let action = tokens[0];
        let name = tokens[1];
        let hero = heroes[name];

        if(action == 'CastSpell'){
            let mpNeeded = Number(tokens[2]);
            let spellName = tokens[3];

            if(hero.mp >= mpNeeded){
                hero.mp -= mpNeeded;
                console.log(`${name} has successfully cast ${spellName} and now has ${hero.mp} MP!`);
            }else{
                console.log(`${name} does not have enough MP to cast ${spellName}!`);
            }

        }else if(action == 'TakeDamage'){
            let damage = Number(tokens[2]);
            let attacker = tokens[3];

            hero.hp -= damage;

            if(hero.hp > 0){
                console.log(`${name} was hit for ${damage} HP by ${attacker} and now has ${hero.hp} HP left!`);
            }else{
                console.log(`${name} has been killed by ${attacker}!`);
                delete heroes[name];
            }

        }else if(action == 'Recharge'){
            let amount = Number(tokens[2]);
            
            let neededMp = 200 - hero.mp;
            if(amount > neededMp){
                amount = neededMp;
            }
            hero.mp += amount;

            console.log(`${name} recharged for ${amount} MP!`);

        }else if(action == 'Heal'){
            let amount = Number(tokens[2]);
            
            let neededHp = 100 - hero.hp;
            if(amount > neededHp){
                amount = neededHp;
            }
            hero.hp += amount;

            console.log(`${name} healed for ${amount} HP!`);
        }

        command = arr.shift();
    }

    for(let name in heroes){
        let hero = heroes[name];

        console.log(name);
        console.log(`  HP: ${hero.hp}`);
        console.log(`  MP: ${hero.mp}`);
    }
}

heroesOfCodeAndLogicVII(['2',

    'Solmyr 85 120',
    
    'Kyrre 99 50',
    
    'Heal - Solmyr - 10',
    
    'Recharge - Solmyr - 50',
    
    'TakeDamage - Kyrre - 66 - Orc',
    
    'CastSpell - Kyrre - 15 - ViewEarth',
    
    'End'])
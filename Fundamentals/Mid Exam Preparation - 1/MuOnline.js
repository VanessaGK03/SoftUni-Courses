function muOnline(str){
    let health = 100;
    let bitcoins = 0;

    let rooms = str.split('|');
    
    for(let i = 0; i < rooms.length; i++){
        let room = rooms[i];
        let tokens = room.split(' ');
        let command = tokens[0];
        let num = Number(tokens[1]);

        if(command == 'potion'){
            let hp = 0;
            if(health + num <= 100){
                hp = num;
            }else{
                hp = 100 - health;
            }
            health += hp;
            console.log(`You healed for ${hp} hp.`);
            console.log(`Current health: ${health} hp.`);
        }else if (command == 'chest'){
            bitcoins += num;
            console.log(`You found ${num} bitcoins.`);
        }else{
            health -= num;
            if(health <= 0){
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${i + 1}`);
                return;
            }else{
                console.log(`You slayed ${command}.`);
            }

        }
    }

    console.log("You've made it!");
    console.log(`Bitcoins: ${bitcoins}`);
    console.log(`Health: ${health}`);
}

muOnline('rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000');
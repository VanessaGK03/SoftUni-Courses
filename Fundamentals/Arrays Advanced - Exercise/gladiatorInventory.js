function gladiatorInventory(arr){
    let inventory = arr.shift().split(' ');

    for(let command of arr){
        let tokens = command.split(' ');
        let operation = tokens[0];
        let equipment = tokens[1];

        if(operation == 'Buy'){
            inventory.push(equipment);
        }else if(operation == "Trash"){
            if(inventory.includes(equipment)){
                let index = inventory.indexOf(equipment);
                inventory.splice(index, 1);
            }
        }else if(operation == 'Repair'){
            let index = inventory.indexOf(equipment);
            inventory.splice(index, 1);
            inventory.push(equipment);
        }else if(operation == 'Upgrade'){
            let tokens2 = equipment.split('-');
            let equipment1 = tokens2[0];
            let upgrade = tokens2[1];
            if(inventory.includes(equipment1)){
                let index = inventory.indexOf(equipment1);
                inventory.splice(index + 1, 0, `${equipment1}:${upgrade}`);
            }
        }
    }
    console.log(inventory.join(' '));
}

gladiatorInventory(['SWORD Shield Spear',

'Buy Bag',

'Trash Shield',

'Repair Spear',

'Upgrade SWORD-Steel'])
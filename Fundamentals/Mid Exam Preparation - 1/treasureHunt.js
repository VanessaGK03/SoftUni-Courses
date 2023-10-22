function treasureHunt(arr){
    let loot = arr.shift().split('|');

    let command = arr.shift();

    while(command != 'Yohoho!'){
        let tokens = command.split(' ');
        let operation = tokens.shift();

        if(operation == 'Loot'){
            for(let item of tokens){
                if(!(loot.includes(item))){
                    loot.unshift(item);
                }
            }
        }else if(operation == 'Drop'){
            let index = tokens[0];
            if(index >= 0 && index < loot.length){
                let item = loot[index];
                loot.splice(index, 1);
                loot.push(item);
            }else{
                command = arr.shift();
                continue;
            }
        }else if(operation == 'Steal'){
            let count = tokens[0];
            //let temp = slice(-count);
            let stolenItems = loot.splice(-count);
            console.log(stolenItems.join(', '));
        }


        command = arr.shift();
    }

    let sum = 0;
    for(let item of loot){
        sum += item.length;
    }

    let average = sum / loot.length;

    if(loot.length > 0){
        console.log(`Average treasure gain: ${average.toFixed(2)} pirate credits.`);
    }else{
        console.log("Failed treasure hunt.");
    }
}

treasureHunt(["Diamonds|Silver|Shotgun|Gold", "Loot Silver Medals Coal", "Drop -1", "Drop 1", "Steal 6", "Yohoho!"]);
function train(input){
    let wagons = input.shift().split(' ').map(Number);
    let capasity = input.shift();

    for(let i = 0; i < input.length; i++){
        let command = input[i].split(' ');
        let operation = command[0];
        let num = command[1];

        if(operation == "Add"){
            wagons.push(num);
        }else{
            let people = Number(operation);
            for(let j = 0; j < wagons.length; j++){
                let temp = wagons[j] + people;
                if(temp <= capasity){
                    wagons.splice(j, 1, temp);
                    break;
                }
            }
        }
    }
    console.log(wagons.join(' '));
}

train(['32 54 21 12 4 0 23',

'75',

'Add 10',

'Add 0',

'30',

'10',

'75'])
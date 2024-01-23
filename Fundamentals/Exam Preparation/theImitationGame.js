function theImitationGame(arr){
    let message = arr.shift();
    let command = arr.shift();

    while(command != 'Decode'){
        let tokens = command.split('|');
        let action = tokens[0];

        if(action == 'Move'){
            let letters = Number(tokens[1]);

            let firstPart = message.slice(0, letters);
            let secondPart = message.slice(letters);

            message = secondPart + firstPart;
        }else if(action == 'Insert'){
            let index = tokens[1];
            let value = tokens[2];

            let firstPart = message.slice(0, index);
            let secondPart = message.slice(index);

            message = firstPart + value + secondPart;
        }else if(action == 'ChangeAll'){
            let substring = tokens[1];
            let replacement = tokens[2];

            message = message.split(substring).join(replacement);
        }

        command = arr.shift();
    }

    console.log(`The decrypted message is: ${message}`);
}

theImitationGame([

    'zzHe',
    
    'ChangeAll|z|l',
    
    'Insert|2|o',
    
    'Move|3',
    
    'Decode'
    
    ]);
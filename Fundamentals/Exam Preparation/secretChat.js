function secretChat(arr){
    let message = arr.shift();
    let command = arr.shift();

    while(command != 'Reveal'){
        

        let tokens = command.split(':|:');
        let action = tokens[0];
        
        if(action == 'InsertSpace'){
            let index = Number(tokens[1]);
            let firstPart = message.slice(0, index);
            let secondPart = message.slice(index);
            message = firstPart + " " + secondPart;

        }else if(action == 'Reverse'){
            let substring = tokens[1];
            let startIndex = message.indexOf(substring);

            if(startIndex == -1){
                console.log('error');
                command = arr.shift();
                continue;
            }
                
            let endIndex = startIndex + substring.length;

            let firstPart = message.slice(0, startIndex);
            let secondPart = message.slice(endIndex);

            message = firstPart + secondPart + substring.split('').reverse().join('');
           
        }else if(action == 'ChangeAll'){
            let currentLetter = tokens[1];
            let newLetter = tokens[2];
            let parts = message.split(currentLetter);
            message = parts.join(newLetter);
        }

        
            console.log(message);
        

        command = arr.shift();
    }

    console.log(`You have a new text message: ${message}`);
}

secretChat([

    

        'Hiware?uiy',
        
        'ChangeAll:|:i:|:o',
        
        'Reverse:|:?uoy',
        
        'Reverse:|:jd',
        
        'InsertSpace:|:3',
        
        'InsertSpace:|:7',
        
        'Reveal'
        
        
    ]);
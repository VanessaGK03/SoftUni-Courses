function passwordValidator(arr){
    let password = arr.shift();

    let command = arr.shift();
    while(command != 'Complete'){
        let tokens = command.split(' ');
        let action = tokens[0];

        if(action == 'Make'){
            let statement = tokens[1];
            let index = Number(tokens[2]);

            if(statement == 'Upper'){
                let char = password.slice(index, index + 1);
                password = password.replace(char, char.toUpperCase());
            }else{
                let char = password.slice(index, index + 1);
                password = password.replace(char, char.toLowerCase());
            }

            console.log(password);

        }else if(action == 'Insert'){
            let index = Number(tokens[1]);
            let char = tokens[2];

            if(index >= 0 && index < password.length){
                let firstPart = password.slice(0, index);
                let secondPart = password.slice(index);
                password = firstPart + char + secondPart;
                console.log(password);
            }

        }else if(action == 'Replace'){
            let char = tokens[1];
            let value = Number(tokens[2]);

            if(password.includes(char)){
                let code = char.charCodeAt(0);
                let sum = code + value;
                let newChar = String.fromCharCode(sum);
                
                password = password.split(char).join(newChar);
                console.log(password);
            }
        }else if(action == 'Validation'){
            if(password.length < 8){
                console.log("Password must be at least 8 characters long!");
            }
            for(let char of password){
                if(!(/[\w\d]/.test(char))){
                    console.log("Password must consist only of letters, digits and _!");
                    break;
                }
            }
            let upperLetter = false;
            for(let char of password){
                if(/[A-Z]/.test(char)){
                    upperLetter = true;
                    break;
                }
            }
            if(!upperLetter){
                console.log("Password must consist at least one uppercase letter!");
            }

            let lowerLetter = false;
            for(let char of password){
                if(/[a-z]/.test(char)){
                    lowerLetter = true;
                    break;
                }
            }
            if(!lowerLetter){
                console.log("Password must consist at least one lowercase letter!");
            }

            let hasDigit = false;
            for(let char of password){
                if(/[0-9]/.test(char)){
                    hasDigit = true;
                    break;
                }
            }
            if(!hasDigit){
                console.log("Password must consist at least one digit!");
            }
            
        }

        command = arr.shift();
    }
}

/*passwordValidator(['invalidpassword*',

'Add 2 p',

'Replace i -50',

'Replace * 10',

'Make Upper 2',

'Validation',

'Complete']);*/

passwordValidator(['123456789',

'Insert 3 R',

'Replace 5 15',

'Validation',

'Make Lower 3',

'Complete']);
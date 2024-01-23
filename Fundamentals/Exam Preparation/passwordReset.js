function passwordReset(arr){
    let str = arr.shift();
    let command = arr.shift();

    while(command != 'Done'){
        let tokens = command.split(' ');
        let action = tokens[0];

        if(action == 'TakeOdd'){
            let oddLetters = '';
            for(let i = 1; i < str.length; i += 2){
                oddLetters += str[i];
            }
            str = oddLetters;
        }else if(action == 'Cut'){
            let index = Number(tokens[1]);
            let length = Number(tokens[2]);
            let endIndex = index + length;

            let removedStr = str.slice(index, endIndex);
            str = str.replace(removedStr, '');
        }else if(action == 'Substitute'){
            let substr = tokens[1];
            let substitute = tokens[2];

            if(str.includes(substr)){
                str = str.split(substr).join(substitute);
            }else{
                console.log("Nothing to replace!");
                command = arr.shift();
                continue;
            }
        }

        console.log(str);

        command = arr.shift();
    }

    console.log(`Your password is: ${str}`);
}

passwordReset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr", 
"TakeOdd",
"Cut 15 3",
"Substitute :: -",
"Substitute | ^",
"Done"]);
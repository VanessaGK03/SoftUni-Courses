function passwordValidator(str){
    /*
    · The length should be 6 - 10 characters (inclusive)
    · It should consist only of letters and digits
    · It should have at least 2 digits
    */

    let isLengthValid = checkLengthValid(str);
    let isOnlyLettersDigits = onlyLettersDigitsCheck(str);
    let min2digits = digitsCounter(str);

    if(isLengthValid && isOnlyLettersDigits && min2digits){
        console.log("Password is valid");
    }

    function checkLengthValid(str){
        if(str.length >= 6 && str.length <= 10){
            return true;
        }else{
            console.log("Password must be between 6 and 10 characters");
            return false;
        }
    }

    function onlyLettersDigitsCheck(str){
        for(let i = 0; i < str.length; i++){
            let char = str[i];
            let code = char.charCodeAt();
            if(!((code >= 48 && code <= 57) ||
                (code >= 65 && code <= 90) ||
                (code >= 67 && code <= 122))){
                    console.log("Password must consist only of letters and digits");
                    return false;
            }
        }
        return true;
    }

    function digitsCounter(str){
        let counter = 0;
        for(let char of str){
            let code = char.charCodeAt();
            if(code >= 48 && code <= 57){
                counter++;
            }
        }
        if(counter > 1){
            return true;
        }else{
            console.log("Password must have at least 2 digits");
            return false;
        }
    }

}

passwordValidator('Pa$s$s');
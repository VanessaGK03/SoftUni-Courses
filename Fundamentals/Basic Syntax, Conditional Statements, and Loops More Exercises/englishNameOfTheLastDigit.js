function englishNameOfTheLastDigit(num){
    let numAsString = String(num);

    let lastDigit = numAsString[numAsString.length - 1];
    let nameOfTheLastDigit = '';


    switch(lastDigit){
        case '0' : nameOfTheLastDigit = 'zero'; break;
        case '1' : nameOfTheLastDigit = 'one'; break;
        case '2' : nameOfTheLastDigit = 'two'; break;
        case '3' : nameOfTheLastDigit = 'three'; break;
        case '4' : nameOfTheLastDigit = 'four'; break;
        case '5' : nameOfTheLastDigit = 'five'; break;
        case '6' : nameOfTheLastDigit = 'six'; break;
        case '7' : nameOfTheLastDigit = 'seven'; break;
        case '8' : nameOfTheLastDigit = 'eight'; break;
        case '9' : nameOfTheLastDigit = 'nine'; break;
    }

    console.log(nameOfTheLastDigit);
}

englishNameOfTheLastDigit(1643)
function matchPhoneNumber(numbers){
    let patern = /\+359([ -])2\1\d{3}\1\d{4}/g;

    let validPhones = [];
    let validPhone = patern.exec(numbers);

    while(validPhone != null){
        validPhones.push(validPhone[0]);
        validPhone = patern.exec(numbers);
    }

    console.log(validPhones.join(', '));
}

matchPhoneNumber(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222'])
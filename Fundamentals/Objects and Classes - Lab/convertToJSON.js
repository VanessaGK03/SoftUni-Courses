function convertToJSON(firstName, lastName, hairColor){
    let person = {
        name : firstName,
        lastName : lastName,
        hairColor : hairColor
    }

    let JSONstr = JSON.stringify(person);
    console.log(JSONstr);
}

convertToJSON('George', 'Jones',

'Brown')
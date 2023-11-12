function phoneBook(arr){
    phoneBook = {};

    for(let personInfo of arr){
        let [name, phone] = personInfo.split(' ');

        phoneBook[name] = phone;
    }

    for(let entry of Object.entries(phoneBook)){
        let [key, value] = entry;
        console.log(`${key} -> ${value}`);
    }
}

phoneBook(['Tim 0834212554',

'Peter 0877547887',

'Bill 0896543112',

'Tim 0876566344']);
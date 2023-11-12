function addressBook(array){
    let addressBook = {};

    for(let personInfo of array){
        let [name, adderss] = personInfo.split(':');
        addressBook[name] = adderss;
    }


    let entries = Object.entries(addressBook);

    entries.sort((a, b) => a[0].localeCompare(b[0]));

    let sorted = {};

    for(let [name, adderss] of entries){
        sorted[name] = adderss;
    }

    for(let [key, value] of Object.entries(sorted)){
        console.log(key, '->', value);
    }
}

addressBook(['Tim:Doe Crossing',

'Bill:Nelson Place',

'Peter:Carlyle Ave',

'Bill:Ornery Rd']);
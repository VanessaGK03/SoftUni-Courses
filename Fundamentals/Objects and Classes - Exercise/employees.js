function employees(arr){
    for(let employee of arr){
        let person = {
            name : employee,
            number : employee.length,
        }

        console.log(`Name: ${person.name} -- Personal Number: ${person.number}`);

    }
}




employees([

    'Silas Butler',
    
    'Adnaan Buckley',
    
    'Juan Peterson',
    
    'Brendan Villarreal'
    
    ]);




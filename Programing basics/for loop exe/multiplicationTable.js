function multiplicationTable(input){
    let number = Number(input[0]);
    
    for(let i = 1; i <= 10; i++){
        let result = number * i;
        console.log(`${i} * ${number} = ${result}`);

    }
}

multiplicationTable(["4"])
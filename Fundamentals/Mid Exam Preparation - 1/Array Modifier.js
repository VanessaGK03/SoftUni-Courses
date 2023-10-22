function arrayModifier(arr){
    let numbers = arr.shift().split(' ').map(Number);

    arr.pop();

    for(let row of arr){
        let tokens = row.split(' ');
        let command = tokens[0];

        if(command == 'swap'){
            let index1 = Number(tokens[1]);
            let index2 = Number(tokens[2]);

            let num1 = numbers[index1];
            let num2 = numbers[index2];

            numbers[index1] = num2;
            numbers[index2] = num1;
            
        }else if(command == 'multiply'){
            let index1 = Number(tokens[1]);
            let index2 = Number(tokens[2]);

            let product = numbers[index1] * numbers[index2];

            numbers[index1] = product;
        }else if(command == 'decrease'){
           numbers =  numbers.map((element) => element - 1);
        
        }
    }

    console.log(numbers.join(', '));
}

arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
  ])
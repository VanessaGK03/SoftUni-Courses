function simpleCalculator(a, b, operator) {
    let result = 0;
    if (operator == 'add') {
        result = a + b;
    } else if (operator == 'multiply') {
        result = a * b;
    } else if (operator == 'divide') {
        result = a / b;
    } else {
        result = a - b;
    }

    console.log(result);
}


function arrowSimpleCal(a, b, operator){
    let operations = [
        (a, b) => a + b,
        (a, b) => a - b,
        (a, b) => a * b,
        (a, b) => a / b,
    ];

    let operationsName = [
        'add',
        'subtract',
        'multiply',
        'divide'
    ];

    let index ;

    for(let i = 0; i < operationsName.length; i++){
        if(operationsName[i] == operator){
            index = i;
        }
    }

    let result = operations[index];
    console.log(result(a, b));
}


arrowSimpleCal(2, 5, 'multiply');
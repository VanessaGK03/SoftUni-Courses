function factorialDivision(num1, num2){
    let factNum1 = factorial(num1);
    let factNum2 = factorial(num2);

    let result = factNum1 / factNum2;
    console.log(result.toFixed(2));


    function factorial(num){
        let product = 1;
        for(let i = num; i > 0; i--){
            product *= i;
        }
        return product;
    }
}

factorialDivision(5,2)
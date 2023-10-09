function mathPower(n, exponent) {
    let product = 1;
    for(let i = 0; i < exponent; i++){
        product *= n;
    }
    console.log(product);
}

function recursiveMathPower(n, exponent){
    if(exponent == 0){
        return 1;
    }else{
        return n * recursiveMathPower(n, exponent - 1);
    }
}

console.log(recursiveMathPower(2, 8));
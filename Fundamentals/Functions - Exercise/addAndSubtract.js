function addAndSubtract(a, b, c){
    let add = (a, b) => a + b;
    let subtract = (a, b) => a - b;

    let result1 = add(a, b);
    let result2 = subtract(result1, c);
    console.log(result2);
}
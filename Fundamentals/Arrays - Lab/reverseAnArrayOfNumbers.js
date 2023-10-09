function reverseAnArrayOfNumbers(n, input){
    let reversed = [];

    for(let i = n-1; i >= 0; i--){
        reversed[reversed.length ] = input[i];  
    }

    console.log(reversed.join(' '));
}

reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);
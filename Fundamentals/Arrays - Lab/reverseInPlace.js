function reverseInPlace(input){
    for(let i = 0; i < input.length / 2; i++){
        let j = input.length - i - 1;

        let temp = input[i];
        input[i] = input[j];
        input[j] = temp;

        j--;
    }

    console.log(input.join(' '));
}

reverseInPlace(['a', 'b', 'c', 'd', 'e']);
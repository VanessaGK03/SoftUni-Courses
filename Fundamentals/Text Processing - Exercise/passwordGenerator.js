function passwordGenerator(arr){
    let concated = arr[0] + arr[1];
    let word = arr[2];

    let vowels = ['a', 'u', 'e', 'o', 'i'];

    let idx = 0;
    for(let char of concated){
        if(vowels.includes(char)){
            concated = concated.replace(char, word[idx].toUpperCase());
            idx++;
            if(idx == word.length){
                idx = 0;
            }
        }
    }

    let password = concated.split('').reverse().join('');
    console.log(`Your generated password is ${password}`);
}

passwordGenerator([

    'ilovepizza',
    
    'ihatevegetables',
    
    'orange'
    
    ]);
function reverseString(str){
    let buff = '';
    
    for(let i = str.length - 1 ; i >= 0; i--){
        buff += str[i];
    }

    console.log(buff);
}

reverseString("Hello")
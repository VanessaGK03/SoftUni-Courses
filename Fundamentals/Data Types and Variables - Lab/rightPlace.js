function rightPlace(word, symbol, rightWord){
    let result = '';

    for(let i = 0; i < word.length; i++){
        if(word[i] != "_"){
            result += word[i];
        }else{
            result += symbol;
        }
    }

    if(result === rightWord){
        console.log('Matched');
    }else{
        console.log('Not Matched');
    }
}

rightPlace('Str_ng', 'o','Strong');
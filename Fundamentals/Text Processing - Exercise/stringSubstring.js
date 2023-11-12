function stringSubstring(word, text){
    text = text.split(' ');

    text = text.map(word => word.toLowerCase())

    if(text.includes(word)){
        console.log(word);
    }else{
        console.log(`${word} not found!`);
    }
}

stringSubstring('pyton',

'JavaScript is the best programming language')
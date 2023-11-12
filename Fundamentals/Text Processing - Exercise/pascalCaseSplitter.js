function pascalCaseSplitter(str){
    let array = [];
    let newWord = '';
    for(let char of str){
        
        if(char == char.toUpperCase() && str.indexOf(char) > 0){
            array.push(newWord);
            newWord = char;
        }else{
            newWord += char;
        }
    }

    array.push(newWord);
    console.log(array.join(', '));
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')
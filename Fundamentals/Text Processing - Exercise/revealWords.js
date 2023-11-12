function revealWords(words, text){
    words = words.split(', ');
   // text = text.split(' ');

    for(let word of words){
        let searchedWord = '*'.repeat(word.length);
        text = text.replace(searchedWord, word);
    }

    console.log(text);
}

revealWords('great, learning',

'softuni is ***** place for ******** new programming languages')
function wordsUppercase(text){
    let textUpperCase = text.toUpperCase();
    let splitedText = textUpperCase.split(/\W+/);
    let filterText = splitedText.filter(x => !!x).join(', ');


    console.log(filterText);
    
}

wordsUppercase("Hi, how are you?");
wordsUppercase("hello");
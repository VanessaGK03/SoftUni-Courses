function oddOccurrences(str){
    let words = {};
    let wordsArr = str.split(' ');

    for(let word of wordsArr){
        word = word.toLowerCase();

        if(word in words){
            words[word] += 1;
        }else{
            words[word] = 1;
        }
    }

    let oddOccurrence = [];

    for(let word of Object.keys(words)){
        if(words[word] % 2 != 0){
            oddOccurrence.push(word);
        }
    }

    console.log(oddOccurrence.join(' '));
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
//oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food');
function wordOccurrences(arr){
    let words = {};

    

    for(let word of arr){
        if(words.hasOwnProperty(word)){
            words[word] += 1;
        }else{
            words[word] = 1;
        }
    }

    let sorted = {};
    let entries = Object.entries(words);
    entries.sort((a, b) => b[1] - a[1]);

    for(let [word, count] of entries){
        sorted[word] = count;
    }

    for(let entry of Object.entries(sorted)){
        let [key, value] = entry;

        console.log(`${key} -> ${value} times`);
    }
}

wordOccurrences(["Here", "is", "the", "first", "sentence",

"Here", "is", "another", "sentence", "And",

"finally", "the", "third", "sentence"]);
function wordTracker(arr){
    let searchedWords = arr.shift().split(' ');
    let words = {};
    



    for(let word of searchedWords){
        words[word] = 0;
        for(let i = 0; i < arr.length; i++){
            if(arr[i] == word){
                    words[word] += 1;
                
            }
        }
        
    }

    let sorted = {};

    let entries = Object.entries(words);
    entries.sort((a, b) => b[1] - a[1]);

    for(let [word, count] of entries){
        sorted[word] = count;
    }

    for(let [word, count] of Object.entries(sorted)){
        console.log(word, '-', count);
    }
}

wordTracker([

    'this sentence vanessa',
    
    'In', 'this', 'sentence', 'you', 'have',
    
    'to', 'count', 'the', 'occurrences', 'of',
    
    'the', 'words', 'this', 'and', 'sentence',
    
    'because', 'this', 'is', 'your', 'task'
    
    ]);

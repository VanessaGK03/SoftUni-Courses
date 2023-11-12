function modernTimesOfHashTag(text){
    text = text.split(' ');
    let hashTagWords = text.filter(word => word.startsWith('#') && word.length > 1);
    
    for(let word of hashTagWords){
        word = word.slice(1);
        let isWordValid = true;
        for(let char of word){
            if(!/[A-Za-z]/.test(char)){
                isWordValid = false;
                break;
            }
        }
        if(isWordValid){
            console.log(word);
        }
    }
    
}

modernTimesOfHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia')
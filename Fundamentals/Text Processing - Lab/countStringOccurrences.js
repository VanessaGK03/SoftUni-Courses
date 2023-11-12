function countStringOccurrences(text, str){
    let textArr = text.split(' ');
    let counter = 0;
    for(let word of textArr){
        if(word == str){
            counter++;
        }
    }
    console.log(counter);
}
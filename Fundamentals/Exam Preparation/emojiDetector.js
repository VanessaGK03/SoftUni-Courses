function emojiDetector([input]){
    let pattern = /(::|\*\*)[A-Z][a-z]{2,}\1/g;

    let validEmojies = {};

    let coolThreshold = 1;
    for(let char of input){
        if(/\d/.test(char)){
            coolThreshold *= Number(char);
        }
    }

    console.log(`Cool threshold: ${coolThreshold}`);

    let matches = input.matchAll(pattern);
    let counter = 0;
    for(let match of matches){
        counter++;
        let points = 0;
        let emoji = match[0];
       for(let i = 2; i < emoji.length - 2; i++){
        let char = emoji[i];
        let code = char.charCodeAt();
        points += code;
       }

       validEmojies[emoji] = points;
    }

    console.log(`${counter} emojis found in the text. The cool ones are:`);

    for(let [key, value] of Object.entries(validEmojies)){
        if(value >= coolThreshold){
            console.log(key);
        }
    }

    
    

}

//emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]);

//emojiDetector(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"]);

emojiDetector(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."]);
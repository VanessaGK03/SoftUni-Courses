function replaceRepeatingChars(str){
    let nextIdx = 0;
    let newStr = '';
    for(let i = 0; i < str.length; i++){
        
        //if(i != str.length - 1){
            nextIdx = i + 1;
        //}

        if(str[i] != str[nextIdx]){
            newStr += str[i];
        }

    }

    console.log(newStr);
}

replaceRepeatingChars('aaaaabbbbbcdddeeeedssa')
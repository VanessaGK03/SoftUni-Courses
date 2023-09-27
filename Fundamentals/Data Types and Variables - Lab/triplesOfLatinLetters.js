function triplesOfLatinLetters(num){

   let alphabet = "abcdefghijklmnopqrstuvwxyz";
   let letter = '';

   
        for(let j = 0; j < num; j++){
            for(let k = 0; k < num; k++){
                for(let f = 0; f < num; f++){
                    let combination = alphabet[j] + alphabet[k] + alphabet[f];
                    console.log(combination);
                }
            }
        }
   

   

}

triplesOfLatinLetters(2);
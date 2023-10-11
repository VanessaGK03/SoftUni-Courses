function palindromeIntegers(array){
    
    for(let num of array){
        let numAsString = String(num);
        console.log(isPalindrome(numAsString));
    }
    

    function isPalindrome(str){
        let reversedStr = '';
        for(let i = str.length - 1; i >= 0; i--){
            reversedStr += str[i];
        }
        if(reversedStr == str){
            return true;
        }else{
            return false;
        }
    }


}


palindromeIntegers([123,323,421,121]);
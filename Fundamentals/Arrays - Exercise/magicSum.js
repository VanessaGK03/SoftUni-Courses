function magicSum(arr, num){

    for(let i = 0; i < arr.length; i++){
        let num1 = arr[i];
        let currSum = 0;
        for(let j = i + 1; j < arr.length; j++){
            let num2 = arr[j];
            currSum = num1 + num2;
            if(currSum === num){
                console.log(num1, num2);
            }
        }
    }

}

magicSum([1, 7, 6, 2, 19, 23],8);
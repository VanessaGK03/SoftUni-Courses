function lastKNumbersSequence(n, k){
    let arr = [1, 1];

    for(let i = 2; i < n; i++){
        let sum = 0;
        if(k >= i){
            arr.forEach(element => sum += element);
        }else{
           for(j = i - 1; j >= i - k; j-- ){
            sum += arr[j];
           }
        }
        arr.push(sum);

    }

    console.log(arr);
    
}

lastKNumbersSequence(6, 3);

//[1, 1, 2, 4, 7, 13]

lastKNumbersSequence(8, 2);

//[1, 1, 2, 3, 5, 8, 13, 21]
function lastKNumbersSequance(n, k){
    let arr = [1];
    
    for(let i = 1; i < n; i++){
        let sum = 0;
        let newArr = arr.slice(-k);
        for(let j = 0; j < newArr.length; j++){
            sum += newArr[j];
        }
        arr.push(sum);
    }

    console.log(arr.join(' '));
}

lastKNumbersSequance(8, 2);
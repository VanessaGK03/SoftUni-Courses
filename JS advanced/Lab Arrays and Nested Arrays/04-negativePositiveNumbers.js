function negativePositiveNumbers(arr){
    let newArr = [];

    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            newArr.unshift(arr[i]);
        }else{
            newArr.push(arr[i]);
        }
    }

    for(let num of newArr){
        console.log(num);
        
    }
}

negativePositiveNumbers([7, -2, 8, 9]);

negativePositiveNumbers([3, -2, 0, -1]);
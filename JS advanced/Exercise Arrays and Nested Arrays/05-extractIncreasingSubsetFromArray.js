function extractIncreasingSubsetFromArray(arr){
    let newArr = [];

    newArr.push(arr[0]);

    let max = arr[0];

    for(let i = 1; i < arr.length; i++){
        let current = arr[i];
        
        if(current >= max){
            max = current;
            newArr.push(max);
        }
    }

    console.log(newArr);   
}

extractIncreasingSubsetFromArray([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]);

extractIncreasingSubsetFromArray([1, 
    2, 
    3,
    4]);

extractIncreasingSubsetFromArray([20, 
    3, 
    2, 
    15,
    6, 
    1]
    );
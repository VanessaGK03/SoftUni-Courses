function biggerHalf(arr){
    arr.sort((a, b) => a - b);

    let newArr = [];

    let size = Math.floor(arr.length / 2);

    newArr = arr.splice(size);
    
    return newArr;
    
}

biggerHalf([4, 7, 2, 5]);
biggerHalf([3, 19, 14, 7, 2, 19, 6]);
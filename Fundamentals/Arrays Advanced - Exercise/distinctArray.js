function distinctArray(arr){
    let uniqueNums = [];

    for(let num of arr){
        if(!uniqueNums.includes(num)){
            uniqueNums.push(num);
        }
    }
    console.log(uniqueNums.join(' '));
}

distinctArray([1, 2, 3, 4, 1, 5, 7, 2, 9, 9]);
function sorting(arr){
    let sortedArr = [];
    arr.sort((a, b) => a - b);

    while(arr.length > 0){
        let maxNum = arr.pop();
        let minNum = arr.shift();

        sortedArr.push(maxNum, minNum);
    }

    console.log(sortedArr.join(' '));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
function processOddPositions(arr){
    let newArr = [];

    arr.forEach((element, index) => {
        if(index % 2 == 1){
            newArr.push(arr[index]);
        }
    });

    let doubledNums = newArr.map(x => x * 2);

    let revercedArr = doubledNums.reverse();

    return revercedArr;
}

processOddPositions([10, 15, 20, 25]);
processOddPositions([3, 0, 10, 4, 7, 3]);
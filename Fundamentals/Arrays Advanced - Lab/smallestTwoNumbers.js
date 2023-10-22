function smallestTwoNumbers(arr){
    let result = arr.sort((a, b) => a - b);
    console.log(result.slice(0, 2).join(' '));
}

smallestTwoNumbers([30, 15, 50, 5]);
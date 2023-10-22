function numbers(str){
    let nums = str.split(' ').map(Number);
    let average = nums.reduce((acc, value) => acc + value) / nums.length;
    let topNums = nums
        .filter((num) => num > average)
        .sort((a, b) => b - a)
        .slice(0, 5);

    if(topNums.length > 0){
        console.log(topNums.join(' '));
    }else{
        console.log('No');
    }
}

numbers('10 20 30 40 50');
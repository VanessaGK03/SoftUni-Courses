function bombNumbers(arr, bombInfo){
    let[bombNum , power] = bombInfo;
    for(let num of arr){
        if(num == bombNum){
            let index = arr.indexOf(num);
            arr.splice(Math.max(0, index - power), power * 2 + 1, 0);
        }
    }

    let sum = arr.reduce((acc, num) => acc + num);
    console.log(sum);
}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9],
            [4, 2]);
function searchForNumber(arr, input){
    let tookedNums = input[0];
    let deledetNums = input[1];
    let search = input[2];
    let counter = 0;

    let newArr = arr.slice(0, tookedNums);
    newArr.splice(0, deledetNums);

    for(let num of newArr){
        if(num == search){
            counter++;
        }
    }

    console.log(`Number ${search} occurs ${counter} times.`);
    
}

searchForNumber([5, 2, 3, 4, 1, 6],[5, 2, 3]);
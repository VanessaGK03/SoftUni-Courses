function sortingNumbers(arr){
    let newArr = [];

    arr.sort((a, b) => a - b);

    while(arr.length != 0){
        let smallest = arr.shift();
        newArr.push(smallest);
        if(arr.length != 0){
            let biggest = arr.pop();
            newArr.push(biggest);
        }
    }

   return newArr; 
}

sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
sortingNumbers([22, 9, 63, 3, 2, 19, 54, 11, 21, 18]);
let res = sortingNumbers([11, 91, 18]);

console.log(res);


//[-3, 65, 1, 63, 3, 56, 18, 52, 31, 48]
//[2, 63, 3, 54, 9, 22, 11, 21, 18, 19]
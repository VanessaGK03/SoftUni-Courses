function maxSequenceOfEqualElements(arr){
     
    let longestArr = [];

    for(let i = 0; i < arr.length; i++){
        let num = arr[i];

        let currArr = [num];
        for(let j = i + 1; j < arr.length; j++){
            let nextNum = arr[j];
            if(num == nextNum){
                currArr.push(nextNum);
               
            }else{
                break;
            }

        }
        if(currArr.length > longestArr.length){
            longestArr = currArr;
        }  

        
    }
     console.log(longestArr.join(' '));
}


maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
maxSequenceOfEqualElements([1, 1, 2, 2, 2, 3, 4, 4, 4, 4, 5, 6, 6, 7]);
maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3]);
maxSequenceOfEqualElements([4, 4, 4, 4]);
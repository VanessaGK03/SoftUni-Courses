function equalNeighbors(arr){

    let equal = 0;

    for(let i = 0; i < arr.length; i++){
        let arr1 = arr[i];
        for(let j = 0; j < arr1.length; j++){
            let curNum = arr[i][j];
            if(i + 1 < arr.length){
                let downNum = arr[i + 1][j];
                if(curNum ==  downNum){
                    equal++;
                }
            }
            if(j + 1 < arr1.length){
                let nextNum = arr[i][j + 1];
                if(curNum ==  nextNum){
                    equal++;
                }
            }
            
        }

    }
    console.log(equal);
}

equalNeighbors([['2', '3', '4', '7', '0'],

                ['4', '0', '5', '3', '4'],

                ['2', '3', '5', '4', '2'],

                ['9', '8', '7', '5', '4']])
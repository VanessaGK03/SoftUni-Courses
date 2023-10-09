function maxNumber(arr){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        
        let num = arr[i];
        let isTop = true;

        for(let j = i + 1; j < arr.length; j++){
            let currNum = arr[j];
            if(num <= currNum){
                isTop = false;
                break;
            }
        }

        if(isTop){
            
           newArr.push(num)
        }

    }

    console.log(newArr.join(' '));
}

maxNumber([1, 4, 3, 2]);
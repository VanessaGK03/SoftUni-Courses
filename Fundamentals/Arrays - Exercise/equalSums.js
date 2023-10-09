function equalSums(arr){
    let isEqual = false;
    
    for(let i = 0; i < arr.length; i++){
        let leftSum = 0; 
        let rigthSum = 0;
        for(let j = 0; j < i; j++){
            let leftNum = arr[j];
            leftSum += leftNum;
        }

        for(let k = i + 1; k < arr.length; k++){
            let rigthNum = arr[k];
            rigthSum += rigthNum;
        }

        if(leftSum == rigthSum){
           console.log(i);
           isEqual = true;
        }
    }

    if(!isEqual){
        console.log('no');
    }
}


equalSums([1]);
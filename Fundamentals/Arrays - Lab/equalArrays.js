function equalArrays(arr1, arr2){
    areIdentical = true;
    let sum = 0;
    for(let i = 0 ; i < arr1.length; i++){
        if(arr1[i] != arr2[i]){
            areIdentical = false;
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            break;
        }else{
            let num = Number(arr1[i]);
            sum += num;
        }
    }

    if(areIdentical){
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
    
}

equalArrays(['10','20','30'],

['10','20','30']);
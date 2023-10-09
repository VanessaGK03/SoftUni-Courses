function nonDecreasingSubset(array){
    let newArr = [];
    let max = array[0]; 
    for(let i = 0; i < array.length; i++){
        if(max <= array[i]){
            max = array[i];
            newArr.push(max);
        }

    }

    console.log(newArr.join(" "));
}

nonDecreasingSubset([ 1, 3, 8, 4, 10, 12, 3, 2, 24]);
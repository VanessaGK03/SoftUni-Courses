function rotateArray(arr, rotations){
    while(rotations != 0){
        let last = arr.pop();
        arr.unshift(last);
        rotations--;
    }

    console.log(arr.join(' '));
    
}

rotateArray(['1', 
    '2', 
    '3', 
    '4'], 
    2);

rotateArray(['Banana', 
    'Orange', 
    'Coconut', 
    'Apple'], 
    15);
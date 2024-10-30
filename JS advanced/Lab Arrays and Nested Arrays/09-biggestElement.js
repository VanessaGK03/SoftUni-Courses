function biggestElement(matrix){
    let max = matrix[0][0];

    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            let current = matrix[i][j];
            if(current > max){
                max = current;
            }
        }
    }

    return max;
    
}

biggestElement([[20, 50, 10],
    [8, 33, 145]]);

biggestElement([[3, 5, 7, 12],
     [-1, 4, 33, 2],
     [8, 3, 0, 4]]);
function equalNeighbors(matrix){
    let equals = 0;

    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
           let current = matrix[i][j];
           //let right = matrix[i][j + 1]; 
           //let bottom = matrix[i + 1][j];

           if(j < matrix[i].length - 1){
            let right = matrix[i][j + 1]; 
            if(current == right){
                equals++;
            }
           }
           if(i < matrix.length - 1){
            let bottom = matrix[i + 1][j];
            if(current == bottom){
                equals++;
            }
           }
        }
    }

    return equals;
    
}

equalNeighbors([['2', '3', '4', '7', '0'],
                ['4', '0', '5', '3', '4'],
                ['2', '3', '5', '4', '2'],
                ['9', '8', '7', '5', '4']]);

equalNeighbors([['test', 'yes', 'yo', 'ho'],
                ['well', 'done', 'yo', '6'],
                ['not', 'done', 'yet', '5']]);
function magicMatrices(matrix){
    let isMagic = true;

    
    for(let i = 0; i < matrix.length; i++){
        let rowSum = 0;
        let colSum = 0;
        for(let j = 0; j < matrix.length; j++){
            rowSum += matrix[i][j];
            colSum += matrix[j][i];
        }
        
       if(rowSum !== colSum){
        isMagic = false;
        break;
       }
    }

    console.log(isMagic);
    


}

magicMatrices([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]);

magicMatrices([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]);

magicMatrices([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]);
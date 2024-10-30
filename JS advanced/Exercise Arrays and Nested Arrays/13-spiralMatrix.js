function spiralMatrix(rows, cols){
    let matrix = [];
    
    for (let i = 0; i < rows; i++) {
       matrix[i] = [];
        for (let j = 0; j < cols; j++) {
            matrix[i][j] = 0;
        }
    }

    let num = 1;

    let top = 0; 
    let bottom = rows - 1;
    let left = 0;
    let right = cols - 1;

    while(top <= bottom && left <= right){
        for(let i = left; i <= right; i++){
            matrix[top][i] = num;
            num++;
        }
        top++;

        for(let i = top; i <= bottom; i++){
           matrix[i][right] = num;
           num++; 
        }
        right--;

        if(top <= bottom){
            for (let i = right; i >= left; i--) {
                matrix[bottom][i] = num++;
            }
            bottom--;
        }

        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                matrix[i][left] = num++;
            }
            left++;
        }
    }

    matrix.forEach(row => console.log(row.join(' ')));
}

spiralMatrix(5, 5);
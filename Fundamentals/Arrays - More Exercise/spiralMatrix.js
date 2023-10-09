function spiralMatrix(rows, cols){
    let array = Array.from({ length: rows }, () => Array(cols).fill(0));

    let num = 1;
    let top = 0;
    let bottom = rows - 1;
    let left = 0;
    let rigth = cols - 1;
   
    while(top <= bottom && left <= rigth){
        for(let i = left; i <= rigth; i++){
            array[top][i] = num;
            num++
        }
        top++;

        for(let i = top; i <= bottom; i++){
            array[i][rigth] = num;
            num++;
        }
        rigth--;

        for(let i = rigth; i >= left; i--){
            array[bottom][i] = num;
            num++;
        }
        bottom--;

        for(let i = bottom; i >= top; i--){
            array[i][left] = num;
            num++;
        }
        left++;

    }

    for(let row of array){
        console.log(row.join(' '));
    }

    

}



spiralMatrix(3, 3);
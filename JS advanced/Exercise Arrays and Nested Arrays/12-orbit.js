function orbit(arr){
    let [width, height, x, y] = arr;
    let matrix = [];

    for(let i = 0; i < height; i++){
        matrix[i] = [];
        for(let j = 0; j < width; j++){
            matrix[i][j] = 0;
        }
    }


    for(let i = 0; i < height; i++){
        for(let j = 0; j < width; j++){
            matrix[i][j] = Math.max(Math.abs(i - x), Math.abs(j - y)) + 1;
        }
    }

    return matrix.map(row => row.join(' ')).join('\n');
    
}

//orbit([4, 4, 0, 0]);

//orbit([5, 5, 2, 2]);

let res = orbit([3, 3, 2, 2]);

console.log(res);

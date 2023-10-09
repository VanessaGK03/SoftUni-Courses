function diagonalAttack(array){
    let sum1 = 0;
    let sum2 = 0;
    let tempArr = [];
    for(let i = 0; i < array.length; i++){
        let row = array[i];
        let el = row.split(' ').map(Number);  
        tempArr.push(el); 
    }

    
    for(let i = 0; i < tempArr.length; i++){       
            sum1 += tempArr[i][i];
            sum2 += tempArr[i][tempArr.length - 1 - i];
    }


    if(sum1 === sum2){
        for(let i = 0; i < tempArr.length; i++){
            for(let j = 0; j < tempArr[i].length; j++){
                if(i != j && j != tempArr.length - 1 - i){
                    tempArr[i][j] = sum1;
                }
            }
        }
    }

    for (let row of tempArr) {
        console.log(row.join(' '));
      }
    
}


diagonalAttack(['5 3 12 3 1',

'11 4 23 2 5',

'101 12 3 21 10',

'1 4 5 2 2',

'5 22 33 11 1']);
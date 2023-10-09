function magicMatrices(array){

    let isMagical = true;
    
    for(let i = 0; i < array.length; i++){
        let sumRow = 0;
        let sumColumn = 0;
        let row = array[i];
        for(let j = 0; j < row.length; j++){
            sumRow += row[j];
        }

        for(let k = 0; k < array.length; k++){
            sumColumn += array[k][i];
        }

        if(sumColumn !== sumRow){
            isMagical = false;
            break;
        }

       
    }


    if(isMagical){
        console.log(true);
    }else{
        console.log(false);
    }
}

magicMatrices([[4, 5, 6],
               [6, 5, 4],
               [5, 5, 5]]);
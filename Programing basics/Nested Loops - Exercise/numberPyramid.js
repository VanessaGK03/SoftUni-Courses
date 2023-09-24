function numberPyramid(input){
    let n = Number(input[0]);
    let printNumber = 1;
    let isFinished = false;

    for(let row = 1; row <=n; row++){
        let buff = "";

        for(let col = 1; col <=row; col++){
           
            buff += printNumber + " ";
            
            if(printNumber === n){
               isFinished = true;
                break;
            }
            
            printNumber++;

        }
        console.log(buff);
        if(isFinished){
            break;
        }
    }
}

numberPyramid([7]);
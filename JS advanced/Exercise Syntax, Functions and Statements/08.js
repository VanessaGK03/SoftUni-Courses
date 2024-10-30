function validityChecker(x1, y1, x2, y2){
    function isValid(x1, y1, x2, y2){
        let num = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
        return num;
    }

    let firstChecker = Number.isInteger(isValid(x1,y1,0,0));
    let secondChecker = Number.isInteger(isValid(x2, y2, 0, 0));
    let thirdChecker = Number.isInteger(isValid(x1, y1, x2, y2));

    //console.log(firstChecker);

    console.log(`{${x1}, ${y1}} to {0, 0}  ${firstChecker ? 'is valid' : 'is invalid'}`);
    console.log(`{${x2}, ${y2}} to {0, 0}  ${secondChecker ? 'is valid' : 'is invalid'}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}}  ${thirdChecker ? 'is valid' : 'is invalid'}`);

}

validityChecker(3, 0, 0, 4);
validityChecker(2, 1, 1, 1);
function signCheck(num1, num2, num3){
    let countNegative = 0;
    if(num1 < 0){
        countNegative++;
    }
    if(num2 < 0){
        countNegative++;
    }
    if(num3 < 0){
        countNegative++;
    }

    if(countNegative == 1 || countNegative == 3){
        console.log('Negative');
    }else{
        console.log('Positive');
    }
}


signCheck(2, 3, -1);
signCheck(-5, - 6, 9);
signCheck(1, 2, 3);
signCheck(-4, -2, -10);
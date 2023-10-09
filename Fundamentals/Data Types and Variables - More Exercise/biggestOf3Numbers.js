function biggestOf3Numbers(num1, num2, num3){
    let biggest = 0;
    if(num1 > num2 && num1 > num3){
        biggest = num1;
    }else if(num2 > num1 && num2 > num3){
        biggest = num2;
    }else{
        biggest = num3;
    }

    console.log(biggest);
}
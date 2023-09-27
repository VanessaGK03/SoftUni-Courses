function sortNumbers(num1, num2, num3){
    let min = 0;
    let avr = 0;
    let max = 0;
    
        if(num1 > num2 && num1 > num3){
            max = num1;
        }else if(num2 > num1 && num2 > num3){
            max = num2;
        }else{
            max = num3;
        }

        if(num1 < num2 && num1 < num3){
            min = num1;
        }else if(num2 < num1 && num2 < num3){
            min = num2;
        }else{
            min = num3;
        }
        
        if((num1 < num2 && num1 > num3) || (num1 > num2 && num1 < num3)){
            avr = num1;
        }else if((num2 < num1 && num2 > num3) || (num2 > num1 && num2 < num3) ){
            avr = num2;
        }else{
            avr = num3;
        }

    
    
    
    
    
    
    
        /*if(num1 > num2 && num1 > num3){
            max = num1;
        }else if(num1 < num2 && num1 < num3){
            min = num1;
        }else{
            avr = num1;
        }

        if(max == 0 && (num2 > num1 && num2 > num3)){
            max = num2;
        }else if(min == 0 && (num2 < num1 && num2 < num3)){
            min = num2;
        }else{
           avr = num2;
        }

        if(max == 0 && (num3 > num1 && num3 > num2)){
            max = num3;
        }else if(min == 0 && (num3 < num1 && num3 < num2)){
            min = num3;
        }else{
           avr = num3;
        } 
*/
        console.log(max);
        console.log(avr);
        console.log(min);
}

sortNumbers(-15,-200,-400);
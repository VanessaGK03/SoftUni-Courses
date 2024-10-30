function cookingByNumbers(num, op1, op2, op3, op4, op5){
    num = Number(num);

    let list = [];
    list.push(op1, op2, op3, op4, op5);

    for(let command of list){
        if(command == 'chop'){
            num /= 2;
        }else if(command == 'dice'){
            num = Math.sqrt(num);
        }else if(command == 'spice'){
            num++;
        }else if(command == 'bake'){
            num *= 3;
        }else if(command == 'fillet'){
            num -= num * 0.20;
        }
        console.log(num);  
    }
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
console.log('----');

cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
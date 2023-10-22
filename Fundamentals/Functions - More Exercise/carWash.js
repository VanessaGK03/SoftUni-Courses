/* soap – add 10 to the value

· water – increase the value by 20%

· vacuum cleaner – increase the value by 25%

· mud – decrease the value by 10%*/

function carWash(array){
    let value = 0;

    for(let i = 0 ; i < array.length; i++){
        let command = array[i];
        if(command == 'soap'){
            value = soap(value);
        }else if(command == 'water'){
            value = water(value);
        }else if(command == 'vacuum cleaner'){
           value = vacuum(value);
        }else{
            value = mud(value)
        }

       
    }
    
    console.log(`The car is ${value.toFixed(2)}% clean.`);
    


    function soap(value){
        value += 10;
        return value;
    }

    function water(value){
        value += value * 0.20;
        return value;
    }

    function vacuum(value){
        value += value * 0.25;
        return value;
    }

    function mud(value){
        value -= value * 0.10;
        return value;
    }
}

carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap','water']) // 39.00;
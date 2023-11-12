function garage(array){
    let garages = {};

    for(let item of array){
        let [garage, car] = item.split(' - ');
        if(!garages.hasOwnProperty(garage)){
            garages[garage] = [];
        }
        
        let tempArr = [];

        let carInfo = car.split(', ');
        for(let i = 0; i < carInfo.length; i++){
            let carItem = carInfo[i];
            let [key, value] = carItem.split(': ');
            if(tempArr.length == 0){
                tempArr.push(`${key} - ${value}`);
            }else{
                tempArr.push(` ${key} - ${value}`);
            }    
        }
        garages[garage].push(tempArr);
        
    }

    for(let [garage, cars] of Object.entries(garages)){
        console.log(`Garage № ${garage} `);
        for(let car of cars){
            console.log(`--- ${car}`);
        }
    }
}

garage(['1 - color: blue, fuel type: diesel',
 '1 - color: red, manufacture: Audi', 
 '2 - fuel type: petrol', 
 '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']);
function picolo2(array){
    let parking = [];
    for(let carInfo of array){
        let [direction, carPlate] = carInfo.split(', ');
        if(direction == "IN" && !parking.includes(carPlate)){
            parking.push(carPlate);
        }else if(direction == 'OUT' && parking.includes(carPlate)){
            let index = parking.indexOf(carPlate);
            parking.splice(index, 1);
        }
    }

    if(parking.length > 0){
        parking.sort();
        console.log(parking.join('\n'));
    }else{
        console.log("Parking Lot is Empty");
    }
}

picolo2(['IN, CA2844AA',

'IN, CA1234TA',

'OUT, CA2844AA',

'IN, CA9999TT',

'IN, CA2866HI',

'OUT, CA1234TA',

'IN, CA2844AA',

'OUT, CA2866HI',

'IN, CA9876HH',

'IN, CA2822UU']);
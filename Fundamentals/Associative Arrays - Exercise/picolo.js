function picolo(arr){
    let parking = {
        in: [],
        out: [],
    }

    for(let carInfo of arr){
        let[direction, carPlate] = carInfo.split(', ');
        direction = direction.toLowerCase();
        if(direction === 'in'){
            parking[direction].push(carPlate);
        }else if(direction === 'out'){
            let index = parking['in'].indexOf(carPlate);
            if(index !== -1){
                parking['in'].splice(index, 1);
            }
        }        
    }

    let inParking = parking['in'].slice();
    
    inParking.sort((a, b) => Number(a.slice(2, 6)) - Number(b.slice(2, 6)));
    
    if(inParking.length > 0){
        console.log(inParking.join('\n'));
    }else{
        console.log('Parking Lot is Empty');
    }
}

picolo(['IN, CA2844AA',

'IN, CA1234TA',

'OUT, CA2844AA',

'IN, CA9999TT',

'IN, CA2866HI',

'OUT, CA1234TA',

'IN, CA2844AA',

'OUT, CA2866HI',

'IN, CA9876HH',

'IN, CA2822UU']);
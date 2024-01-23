function needForSpeedIII(arr){
    let n = Number(arr.shift());
    let cars = {};

    for(let i = 0; i < n; i++){
        let carInfo = arr.shift();
        let [car, mileage, fuel] = carInfo.split('|');
        mileage = Number(mileage);
        fuel = Number(fuel);

        cars[car] = {mileage, fuel};
    }

    let command = arr.shift();
    while(command != 'Stop'){
        let tokens = command.split(' : ');
        let action = tokens.shift();

        if(action == 'Drive'){
            let [car, distance, fuel] = tokens;
            distance = Number(distance);
            fuel = Number(fuel);

            if(cars[car].fuel >= fuel){
                cars[car].mileage += distance;
                cars[car].fuel -= fuel;
                console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);

                if(cars[car].mileage >= 100000){
                    delete cars[car];
                    console.log(`Time to sell the ${car}!`);
                }
            }else{
                console.log("Not enough fuel to make that ride");
            }
        }else if(action == 'Refuel'){
            let [car, fuel] = tokens;
            fuel = Number(fuel);

            let neededFuel = 75 - cars[car].fuel;
            if(fuel > neededFuel){
                fuel = neededFuel;
            }
            cars[car].fuel += fuel;
            console.log(`${car} refueled with ${fuel} liters`);
        }else if(action == 'Revert'){
            let [car, kilometers] = tokens;
            kilometers = Number(kilometers);

            cars[car].mileage -= kilometers;

            if(cars[car].mileage < 10000){
                cars[car].mileage = 10000;
            }else{
                console.log(`${car} mileage decreased by ${kilometers} kilometers`);
            }
        }

        command = arr.shift();
    }

    let entries = Object.entries(cars);
    entries.forEach(([car, stats]) => console.log(`${car} -> Mileage: ${stats.mileage} kms, Fuel in the tank: ${stats.fuel} lt.`));

}

needForSpeedIII([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
  ]);
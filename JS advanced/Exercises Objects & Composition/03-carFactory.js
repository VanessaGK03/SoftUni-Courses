function carFactory(obj){
    let engine = {
        small: { power: 90, volume: 1800 },
        normal: { power: 120, volume: 2400 },
        monster: { power: 200, volume: 3500 },
    };

    /*let carriage = {
        hatchback: { type: 'hatchback', color: undefined },
        coupe: { type: 'coupe', color: undefined },
    }*/

    let newEngine = {};

    if(obj.power > engine.normal.power){
        newEngine = engine.monster;
    }else if(obj.power > engine.small.power){
        newEngine = engine.normal;
    }else{
        newEngine = engine.small;
    }

    let wheelsize = obj.wheelsize;

    if(wheelsize % 2 == 0){
        wheelsize--;
    }

    let newObj = {
        model: obj.model,
        engine: newEngine,
        carriage: {type: obj.carriage, color: obj.color},
        wheel: [0,0,0,0].fill(wheelsize),
    }

    console.log(newObj);
    
}


carFactory({ model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14 });

carFactory({ model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17 });
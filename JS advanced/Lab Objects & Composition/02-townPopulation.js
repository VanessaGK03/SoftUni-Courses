function townPopulation(arr){
    let townInfo = {};

    for(let str of arr){
        let [name, population] = str.split(' <-> ');
        population = Number(population);

        if(townInfo.hasOwnProperty(name)){
            townInfo[name] += population;
        }else{
            townInfo[name] = population;
        }
    }

    let entries = Object.entries(townInfo);

    for(let [key, value] of entries){
        console.log(`${key} : ${value}`);
    }
}

townPopulation(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']);


townPopulation(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']);
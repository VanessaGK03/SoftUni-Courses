function travelTime(array){
    let travels = {};

    for(let destination of array){
        let [country, town, cost] = destination.split(' > ');
        
        if(travels.hasOwnProperty(country)){
            if(travels[country].hasOwnProperty(town)){
                if(travels[country][town] > cost){
                    travels[country][town] = cost;
                }
            }else{
            travels[country][town] = cost;
            }
        }else{
            travels[country] = {[town]: cost};
        }
    }


    let entries = Object.entries(travels);
    entries.sort((a, b) => a[0].localeCompare(b[0]));
    

    for(let [country, towns] of entries){
        let sortedCosts = Object.entries(towns).sort((a, b) => a[1] - b[1]);
        
        let townPairs = sortedCosts.map(([town, cost]) => `${town} -> ${cost}`)
            console.log(country, '->', townPairs.join(' '));
        
    }
}

travelTime([

    "Bulgaria > Sofia > 500",
    
    "Bulgaria > Sopot > 800",
    
    "France > Paris > 2000",
    
    "Albania > Tirana > 1000",
    
    "Bulgaria > Sofia > 200"
    
    ]);
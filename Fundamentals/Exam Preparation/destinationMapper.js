function destinationMapper(str){
    let pattern = /([=\/])(?<destination>[A-Z][A-Za-z]{2,})\1/g;

    let destinations = [];
    let travelpoints = 0;

    let matches = str.matchAll(pattern);

    for(let match of matches){
        let {destination} = match.groups; 
        travelpoints += destination.length;
        destinations.push(destination); 
    }

    console.log(`Destinations: ${destinations.join(', ')}`);
    console.log(`Travel Points: ${travelpoints}`);
}

destinationMapper("ThisIs some InvalidInput")
function makeDictionary(arr){
    let items = [];
    for(let itemInfo of arr){
        let item = JSON.parse(itemInfo);
            let term = Object.keys(item)[0];
            let definition = item[term];
        
        let existingItem = items.find(item => item.term === term);
        if (existingItem) {
            
            existingItem.definition = definition;
        } else {
           
            items.push({ term: term, definition: definition });
        }
    }
       
    

    items.sort((a, b) => {
        if (a.term && b.term) {
            return a.term.localeCompare(b.term);
        }
        return 0;
    });

    
    for(let item of items){
       console.log(`Term: ${item.term} => Definition: ${item.definition}`);
    }
}

makeDictionary([

    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    
    ]);
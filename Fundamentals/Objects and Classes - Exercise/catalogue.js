function catalogue(arr){

    let catalog = {};

    for(let itemInfo of arr){
        let productName = Object.keys(itemInfo)[0];
        let price = itemInfo[productName];

        let firstLetter = productName[0].toUpperCase();
        
        if (catalog[firstLetter]) {
            catalog[firstLetter][productName] = price;
        } else {
            catalog[firstLetter] = { [productName]: price };
        }

    }

   let sortedLetters = Object.keys(catalog).sort();

    for(let product of catalogue){
       console.log(`${product.productName} : ${product.price}`);
    }
}

catalogue([

    'Appricot : 20.4',
    
    'Fridge : 1500',
    
    'TV : 1499',
    
    'Deodorant : 10',
    
    'Boiler : 300',
    
    'Apple : 1.25',
    
    'Anti-Bug Spray : 15',
    
    'T-Shirt : 10'
    
    ])
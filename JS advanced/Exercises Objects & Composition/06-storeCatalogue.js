function storeCatalogue(arr){
let catalog = {};

    arr.sort((a, b) => a.localeCompare(b));
    
    let letter = "";
   
    for(let productInfo of arr){
        let [product, price] = productInfo.split(' : ');
        price = Number(price);

        if(letter !== product[0]){
            letter = product[0];
            console.log(letter);
        }

        console.log(`  ${product}: ${price}`);
        
        
        catalog[product] = price;
    }

    
}

storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);

console.log('---');


storeCatalogue(['Banana : 2',
    "Rubic's Cube : 5",
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10']);
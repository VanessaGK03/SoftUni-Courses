function lowestPricesInCities(arr){
    let catalog = {};

    for(let productInfo of arr){
        let [newTown, product, newPrice] = productInfo.split(' | ');
        newPrice = Number(newPrice);

        if(catalog.hasOwnProperty(product)){
            if(catalog[product].price > newPrice){
                catalog[product] = { town: newTown, price: newPrice};
            }
        }else{
            catalog[product] = { town: newTown, price: newPrice};
        }
    }

    for( let product in catalog){
        console.log(`${product} -> ${catalog[product].price} (${catalog[product].town})`);
    }
}

lowestPricesInCities(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']);
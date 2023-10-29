function storeProvision(stock, delivery){

    let market = {};

    for(let i = 0; i < stock.length; i += 2){
        let product = stock[i];
        let qty = Number(stock[i + 1]);

        market[product] = qty;
    }

    for(let i = 0; i < delivery.length; i += 2){
        let product = delivery[i];
        let qty = Number(delivery[i + 1]);

        if(product in market){
            market[product] += qty;
        }else{
            market[product] = qty;
        }
    }

    for(let entrie of Object.entries(market)){
        let [key, value] = entrie;
        console.log(`${key} -> ${value}`);
    }
}

storeProvision([

    'Chips', '5', 'CocaCola', '9', 'Bananas',
    
    '14', 'Pasta', '4', 'Beer', '2'
    
    ],
    
    [
    
    'Flour', '44', 'Oil', '12', 'Pasta', '7',
    
    'Tomatoes', '70', 'Bananas', '30'
    
    ]);
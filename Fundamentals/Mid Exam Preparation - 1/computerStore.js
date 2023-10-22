function computerStore(arr){
    let customer = arr.pop();
    let priceWOutTax = 0;
    //arr.map(Number);

    for(let i = 0 ; i < arr.length; i++){
        let price = Number(arr[i]);
        if(price < 0){
            console.log(`Invalid price!`);
            continue;
        }
        priceWOutTax += price; 
    }

    if(priceWOutTax == 0){
        console.log("Invalid order!");
        return;
    }

    let tax = priceWOutTax * 0.20;

    let priceWithTax = priceWOutTax + tax;

    if(customer == "special"){
        priceWithTax -= priceWithTax * 0.10;
    }

    console.log("Congratulations you've just bought a new computer!");
    console.log(`Price without taxes: ${priceWOutTax.toFixed(2)}$`);
    console.log(`Taxes: ${tax.toFixed(2)}$`);
    console.log('-----------');
    console.log(`Total price: ${priceWithTax.toFixed(2)}$`);
}

computerStore([

    '1050',
    
    '200',
    
    '450',
    
    '2',
    
    '18.50',
    
    '16.86',
    
    'special'
    
    ])
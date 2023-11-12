function storage(arr){
    let storage = {};

    for(let item of arr){
        let [product, qty] = item.split(' ');
        if(storage.hasOwnProperty(product)){
            storage[product] += Number(qty);
        }else{
            storage[product] = Number(qty);
        }
    }

    for(let key in storage){
        console.log(key, '->', storage[key]);
    }
}

storage(['tomatoes 10',

'coffee 5',

'olives 100',

'coffee 40']);
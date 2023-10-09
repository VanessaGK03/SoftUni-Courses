function orders(product, count){

let price = 0;

if(product == 'coffee'){
    price = count * 1.50;
}else if(product == 'water'){
    price = count * 1;
}else if(product == 'coke'){
    price = count * 1.40;
}else{
    price = count * 2.00;
}

console.log(price.toFixed(2));

}
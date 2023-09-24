function celsiusToFahrentheit(input){
    let celsius = Number(input[0])
    
    let fahrentheit = celsius * 9/5 + 32;
    console.log(fahrentheit.toFixed(2));
}

celsiusToFahrentheit([25])
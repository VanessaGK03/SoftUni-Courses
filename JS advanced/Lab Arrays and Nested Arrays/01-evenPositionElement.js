function evenPositionElement(arr){
    let buff = "";

    for(let i = 0; i < arr.length; i++){
        if(i % 2 == 0){
            buff += arr[i] + " ";
        }
    }

    console.log(buff.trim());
    
}

evenPositionElement(['20', '30', '40', '50', '60']);
evenPositionElement(['5', '10']);
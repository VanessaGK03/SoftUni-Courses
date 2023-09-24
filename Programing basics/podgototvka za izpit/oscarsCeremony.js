function oscarsCeremony(input){

    let rent = Number(input[0]);
    
    let figurine = rent - (rent * 0.30);
    let catering = figurine - (figurine * 0.15)
    let sound = catering / 2;

    let total = rent + figurine + catering + sound;


    console.log(total.toFixed(2));
}

oscarsCeremony(["3500"])
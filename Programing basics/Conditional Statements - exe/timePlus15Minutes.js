function timePlus15Minutes(input){
    let hours = Number(input[0]);
    let min = Number(input[1]);

    let remainder = 0;
    min += 15;

    if(min >= 60){
        hours++;
        remainder = min - 60;
    }

    if(hours >= 24){
        hours = 0;
    }

    if(min >= 60){
        if(remainder < 10){
            console.log(`${hours}:0${remainder}`);
        }else{
            console.log(`${hours}:${remainder}`);
        }
    }else{
        console.log(`${hours}:${min}`);
    }

}

timePlus15Minutes(["1", "46"]);
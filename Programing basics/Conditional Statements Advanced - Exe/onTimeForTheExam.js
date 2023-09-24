function onTimeForTheExam(input){
    let examHour = Number(input[0]);
    let examMinutes = Number(input[1]);
    let arriveHour = Number(input[2]);
    let arriveMinutes = Number(input[3]);

    let timeExam = examHour * 60 + examMinutes;
    let timeArrive = arriveHour * 60 + arriveMinutes;

    let diff = Math.abs(timeExam - timeArrive);

    let h = Math.floor(diff / 60);
    let min = diff % 60;

    if(timeArrive < timeExam && (timeExam - timeArrive) > 30){
        console.log("Early");
        if(h < 1){
            console.log(`${min} minutes before the start`);
        }else if(h > 0){
            if(min < 10){
            console.log(`${h}:0${min} hours before the start`);
            }else{
                console.log(`${h}:${min} hours before the start`);
            }
        }
    }else if(timeArrive <= timeExam){
        console.log("On time");
        if(min > 0){
            console.log(`${min} minutes before the start`);
        }
    }else {
        console.log("Late");
        if(h < 1){
            console.log(`${min} minutes after the start`);
        }else{
            if(min < 10){
                console.log(`${h}:0${min} hours after the start`);
                }else{
                    console.log(`${h}:${min} hours after the start`);
                }
        }
    }


}

onTimeForTheExam(["9",

"00",

"8",

"30"])
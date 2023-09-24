function mountainRun(input){
    let record = Number(input[0]);
    let distance = Number(input[1]);
    let secPerMeter = Number(input[2]);

    let delayTimes = Math.floor(distance / 50);
    let totalDelay = delayTimes * 30;

    let totalScore = distance * secPerMeter + totalDelay;

    if(totalScore >= record){
        console.log(`No! He was ${(totalScore - record).toFixed(2)} seconds slower.`);
    }else{
        console.log(`Yes! The new record is ${totalScore.toFixed(2)} seconds.`);
    }
}

mountainRun(["5554.36",
"1340",
"3.23"])

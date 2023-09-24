function worldSwimmingRecord(input){
     let recordSeconds = Number(input[0]);
     let meters = Number(input[1]);
     let secondsPerMeter = Number(input[2]);

     let totalSeconds = meters * secondsPerMeter;
     let delay = meters / 15;
     
     totalSeconds += (Math.floor(delay) * 12.5);
     
     if(recordSeconds < totalSeconds){
        console.log(`No, he failed! He was ${(totalSeconds - recordSeconds).toFixed(2)} seconds slower.`);
     }else{
        console.log(`Yes, he succeeded! The new world record is ${(totalSeconds).toFixed(2)} seconds.`);
     }
}

worldSwimmingRecord(["55555.67",
"3017",
"5.03"])
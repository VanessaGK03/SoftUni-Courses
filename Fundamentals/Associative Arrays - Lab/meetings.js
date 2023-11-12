function meetings(arr){
let scedule = {};

    for(let apointment of arr){
        let [day, person] = apointment.split(' ');
        if(scedule.hasOwnProperty(day)){
            console.log(`Conflict on ${day}!`);
            continue;
        }
        console.log(`Scheduled for ${day}`);
        scedule[day] = person;
    }

    for(let entry of Object.entries(scedule)){
        let [key, value] = entry;

        console.log(`${key} -> ${value}`);
    }

}

meetings(['Monday Peter',

'Wednesday Bill',

'Monday Tim',

'Friday Tim']);
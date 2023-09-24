function graduation(input){
    let name = input[0];
    let index = 1;

    let i = 1;
    let badgrades = 0;
    let sumGrades = 0;
    let hasExpelled = false;

    while(i <= 12){
        let grade = Number(input[index]);
        index++;
        if(grade < 4.00){
            badgrades++;

            if(badgrades === 2){
                hasExpelled = true;
                console.log(`${name} has been excluded at ${i} grade`);
                break;
            }
            continue;
        }
        sumGrades += grade;
        i++;
    }
    let avr = sumGrades / 12;

    if(!hasExpelled){
        console.log(`${name} graduated. Average grade: ${avr.toFixed(2)}`);
    }
}
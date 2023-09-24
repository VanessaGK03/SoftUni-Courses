function exam(input){
    let allStudents = Number(input[0]);

    let exelent = 0;
    let good = 0; 
    let average = 0;
    let bad = 0;
    let sum = 0;

    for( let i = 1; i <= allStudents; i++){
        let grade = Number(input[i]);
        sum += grade;
        if(grade >= 5){
            exelent++;
        }else if(grade >= 4){
            good++;
        }else if(grade >= 3){
            average++
        }else {
            bad++;
        }
    }

    let percentExelent = exelent / allStudents * 100;
    let percentGood = good / allStudents * 100;
    let percentAverage = average / allStudents * 100;
    let percentBad = bad / allStudents * 100;

    console.log(`Top students: ${percentExelent.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${percentGood.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${percentAverage.toFixed(2)}%`);
    console.log(`Fail: ${percentBad.toFixed(2)}%`);
    console.log(`Average: ${(sum / allStudents).toFixed(2)}`);
}
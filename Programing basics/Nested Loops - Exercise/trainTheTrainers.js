function trainTheTrainers(input){
    let n = Number(input[0]);
    let index = 1;
    let command = input[index];
    let totalSumOfGrades = 0;
    let presentationsCounter = 0;

    while(command !== "Finish"){
        let presentation = command;
        index++;
        presentationsCounter++;
        let sumOfGrades = 0;
        for(let i = 0; i < n; i++){
            let grade = Number(input[index]);
            index++;
            sumOfGrades += grade;
            totalSumOfGrades += grade;
        }
        sumOfGrades = sumOfGrades / n;

        console.log(`${presentation} - ${(sumOfGrades).toFixed(2)}.`);

        command = input[index];
       // index++;
    }
    console.log(`Student's final assessment is ${(totalSumOfGrades / (presentationsCounter * n) ).toFixed(2)}.`);
}

trainTheTrainers(["3",

"Arrays",

"4.53",

"5.23",

"5.00",

"Lists",

"5.83",

"6.00",

"5.42",

"Finish"]);
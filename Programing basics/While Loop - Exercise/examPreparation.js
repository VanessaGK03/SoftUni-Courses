function examPreparation(input){
    let badGrades = Number(input[0]);

    let index = 1;
    let command = input[index];
    
    let countBadGrades = 0;
    let task = "";
    let tasksCounter = 0;
    let sum = 0;


    while(command !== "Enough"){
        task = command;
        index++;
        tasksCounter++;
        let grade = Number(input[index]);
        index++;
        sum += grade;

        if(grade <= 4){
            countBadGrades++;
            if(countBadGrades === badGrades){
                console.log(`You need a break, ${badGrades} poor grades.`);
                break;
            }
        }

        command = input[index];

    }

    if(countBadGrades < badGrades){
        console.log(`Average score: ${(sum / tasksCounter).toFixed(2)}`);
        console.log(`Number of problems: ${tasksCounter}`);
        console.log(`Last problem: ${task}`);
    }
}

examPreparation(["3",

"Money",

"6",

"Story",

"4",

"Spring Time",

"5",

"Bus",

"6",

"Enough"]);
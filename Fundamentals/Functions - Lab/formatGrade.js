function formatGrade(grade){
    let label = '';
    if(grade < 3){
        label = "Fail";
        grade = 2;
        console.log(`${label} (2)`);
    }else{
        if(grade < 3.50){
            label = "Poor";
        }else if(grade < 4.50){
            label = "Good";
        }else if(grade < 5.50){
            label = "Very good";
        }else{
            label = "Excellent";
        }
        console.log(`${label} (${grade.toFixed(2)})`);
    }
}

formatGrade(3.33);
formatGrade(4.50);
formatGrade(2.59);
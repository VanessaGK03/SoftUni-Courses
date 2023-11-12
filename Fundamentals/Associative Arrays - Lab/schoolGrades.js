function schoolGrades(arr){
    let grades = {};

    for(let item of arr){
        let items = item.split(' ');
        let name = items.shift();
        let sumGrade = 0;
        let counter = 0;
        for(let grade of items){
            sumGrade += Number(grade);
            counter++;
        }

        let average = sumGrade / counter;

        if(grades.hasOwnProperty(name)){
           grades[name] = (grades[name] + average) / 2;
        }else{
            grades[name] = average; 
        }
    }

    let sorted ={};

    let entries = Object.entries(grades);
    entries.sort((a, b) => a[0].localeCompare(b[0]));
    
    for(let [name, grade] of entries){
        sorted[name] = grade;
    }

    for(let [name, grade] of Object.entries(sorted)){
        console.log(`${name}: ${grade.toFixed(2)}`);
    }
}

schoolGrades(['Lilly 4 6 6 5',

'Tim 5 6',

'Tammy 2 4 3',

'Tim 6 6']);
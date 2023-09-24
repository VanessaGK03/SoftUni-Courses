function projectsCreation(input){
    let hours = 3;
    let name = input[0];
    let projects = input[1];
    let neededHouars = hours * projects;

    console.log(`The architect ${name} will need ${neededHouars} hours to complete ${projects} project/s.`)
}

projectsCreation(["George ","4 "]);
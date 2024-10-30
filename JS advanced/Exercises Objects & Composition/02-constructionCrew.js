function constructionCrew(worker){
    if(worker["dizziness"]){
        let requaredAmound = 0.1 * worker['weight'] * worker['experience'];
        worker['levelOfHydrated'] += requaredAmound;
        worker['dizziness'] = false;
    }

   return worker;
    
}

constructionCrew({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true });


constructionCrew({ weight: 120,
        experience: 20,
        levelOfHydrated: 200,
        dizziness: true });

let res = constructionCrew({ weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false });

    console.log(res);
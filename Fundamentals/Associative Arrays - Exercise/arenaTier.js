function arenaTier(array){

    let gladiators = {};

    for(let info of array){

        if(info.includes('->')){
            let[gladiator, technique, skill] = info.split(' -> ');
            skill = Number(skill);
            if(gladiators.hasOwnProperty(gladiator)){
                if(gladiators[gladiator].hasOwnProperty(technique)){
                    if(gladiators[gladiator][technique] < skill){
                        gladiators[gladiator][technique] = skill;
                    }
                }else{
                    gladiators[gladiator][technique] = skill;
                }
            }else{
                gladiators[gladiator] = {[technique]: skill};
            }

        }else if(info.includes('vs')){
            let [gladiator1, gladiator2] = info.split(' vs ');
            if(gladiators.hasOwnProperty(gladiator1) && gladiators.hasOwnProperty(gladiator2)){
                let skillpoints1 = gladiators[gladiator1];
                let skillpoints2 = gladiators[gladiator2];
                let hasCommonTechniques = false;
            
                
                for(let  technique in skillpoints1){
                    if(skillpoints2.hasOwnProperty(technique)){
                        hasCommonTechniques = true;
                        break;
                    }
                }

               
                if(hasCommonTechniques){
                   let totalpoints1 = Object.values(skillpoints1).reduce((total, skill) => total + skill, 0);
                   let  totalpoints2 = Object.values(skillpoints2).reduce((total, skill) => total + skill, 0);

                    if(totalpoints1 > totalpoints2){
                        delete gladiators.gladiator2;
                    }else{
                        delete gladiators.gladiator1;
                    }
                }

                
                
            }
        }else if( info === "Ave Cesar"){
            break;
        }
    }

    
    let sortedGladiators = Object.keys(gladiators).sort((a, b) => {
        let skillA = Object.values(gladiators[a]).reduce((total, skill) => total + skill, 0);
        let skillB = Object.values(gladiators[b]).reduce((total, skill) => total + skill, 0);
        if (skillB !== skillA) {
          return skillB - skillA;
        }
        return a.localeCompare(b);
      });

      for (let gladiator of sortedGladiators) {
        console.log(`${gladiator}: ${Object.values(gladiators[gladiator]).reduce((total, skill) => total + skill, 0)} skill`);
        let sortedTechniques = Object.keys(gladiators[gladiator]).sort((a, b) =>
          gladiators[gladiator][b] - gladiators[gladiator][a]
        );
        for (let technique of sortedTechniques) {
          console.log(`- ${technique} <!> ${gladiators[gladiator][technique]}`);
        }
      }
}

/*arenaTier([

    'Peter -> BattleCry -> 400',
    
    'Alex -> PowerPunch -> 300',
    
    'Stefan -> Duck -> 200',
    
    'Stefan -> Tiger -> 250',
    
    'Ave Cesar'
    
    ])*/

arenaTier([ 'Peter -> Duck -> 400',
 'Julius -> Shield -> 150', 
 'Gladius -> Heal -> 200', 
 'Gladius -> Support -> 250', 
 'Gladius -> Shield -> 250', 
 'Peter vs Gladius', 
 'Gladius vs Julius', 
 'Gladius vs Maximilian', 
 'Ave Cesar' ]);
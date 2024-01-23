function arenaTier(array){

    let gladiators = {};

    for(let info of array){

        if(info.includes('->')){
            let[gladiator, technique, skill] = info.split(' -> ');
            skill = Number(skill);
            if(gladiators.hasOwnProperty(gladiator)){
                if(gladiators[gladiator].hasOwnProperty(technique) == false || gladiators[gladiator][technique] < skill){
                    
                        gladiators[gladiator][technique] = skill;
                    
                }
            }else{
                gladiators[gladiator] = {};
            }

        }else if(info.includes('vs')){
            let [gladiator1, gladiator2] = info.split(' vs ');
            if(gladiators.hasOwnProperty(gladiator1) && gladiators.hasOwnProperty(gladiator2)){
                let a = gladiators[gladiator1];
                let b = gladiators[gladiator2];

                let techsA = Object.keys(a);
                let techsB = Object.keys(b);

                let hasCommonTechniques = false;
            
                
                for(let  technique in techsA){
                    if(techsB.includes(technique)){
                        hasCommonTechniques = true;
                    }
                }

                if(!hasCommonTechniques){
                    continue;
                }
               
                
                   let totalA = 0;
                   let  totalB = 0;
                    
                for(let skill of Object.values(a)){
                    totalA += skill;
                }

                for(let skill of Object.values(b)){
                    totalB += skill;
                }

                if(totalA > totalB){
                    delete gladiators[gladiator1];
                }else{
                    delete gladiators[gladiator2];
                }
                
            }else{
                continue;
            }
        }else if( info === "Ave Cesar"){
            break;
        }
    }

    
    let sortedGladiators = Object.entries(gladiators).sort(compareSkill);

    for (let [gladiator, techs] of sortedGladiators) {
        console.log(gladiator);

        let total = 0;
        for(let skill of Object.values(techs)){
            total += skill;
        }
        console.log(`${gladiator}:${total} skill`);

        let sortedTechs = Object.entries(techs).sort(compareTech);

        for(let [tech, skill] of sortedTechs){
            console.log(` - ${tech} <!> ${skill}`);
        }
       
      }


    function compareSkill(a, b){
        
        
        let totalA = 0;
        let totalB = 0;

        for(let skill of Object.values(a)){
            totalA += skill;
        }

        for(let skill of Object.values(b)){
            totalB += skill;
        }

        return (totalB - totalA) || a[0].localeCompare(b[0]);
        //console.log(totalA, totalB);
    }

    function compareTech(a, b){
        return b[1] - a[1] || a[0].localeCompare(b[0]);
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
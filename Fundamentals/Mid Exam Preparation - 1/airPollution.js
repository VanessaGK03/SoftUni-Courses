function airPollution(arr, forces){
    
    let matrix = [];
    for(let str of arr){
        let curArr = str.split(' ').map(Number);
        matrix.push(curArr);
    }

    for(let force of forces){
        let tokens = force.split(' ');
        let type = tokens[0];
        let num = Number(tokens[1]);

        if(type == 'breeze'){
            for(let j = 0; j < 5; j++){
              matrix[num][j] -= 15;      
            }
        }else if(type == 'gale'){
            for(let i = 0; i < 5; i++){
                matrix[i][num] -= 20;
            }
        }else if(type == 'smog'){
            for(let i = 0; i < matrix.length; i++){
                for(let j = 0; j < matrix.length; j++){
                    matrix[i][j] += num;
                }
            }
        }
    }

    let pollutedAreas = [];
    for(let i = 0 ; i < 5; i++){
        for(let j = 0; j < 5; j++){
            if(matrix[i][j] > 50){
                pollutedAreas.push(`[${i}-${j}]`);
            }
        }
    }

    if(pollutedAreas.length > 0){
        console.log(`Polluted areas: ${pollutedAreas.join(', ')}`);
    }else{
        console.log("No polluted areas");
    }
}

airPollution(['5 7 3 28 32',

'41 12 49 30 33',

'3 16 20 42 12',

'2 20 10 39 14',

'7 34 4 27 24'],

['smog 11', 'gale 3', 'breeze 1',

'smog 2']);
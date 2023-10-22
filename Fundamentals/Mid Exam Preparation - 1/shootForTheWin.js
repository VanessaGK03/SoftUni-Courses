function shootForTheWin(arr){
    let targets = arr.shift().split(' ').map(Number);
    let command = arr.shift();

    let count = 0;
    
    while(command != 'End'){
        let index = Number(command);

        if(index < 0 || index >= targets.length){
            command = arr.shift();
            continue;
        }

        let curNum = targets[index];
        
        targets[index] = -1;
        count++;

        for(let i = 0; i < targets.length; i++){
            if(targets[i] != -1){
                if(targets[i] <= curNum){
                    targets[i] += curNum;
                }else if(targets[i] > curNum) {
                    targets[i] -= curNum;
                }
            }
        }
       
        command = arr.shift();
    }

    console.log(`Shot targets: ${count} -> ${targets.join(' ')}`);
}

shootForTheWin(["30 30 12 60 54 66",
"5",
"2",
"4",
"0",
"End"]);
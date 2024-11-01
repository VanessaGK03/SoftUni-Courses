function race(arr){
    let list = arr.shift().split(', ');

    let racers = {};
    
    let command = arr.shift();
    while(command != 'end of race'){
        let name = '';
        let km = 0;
        for(let char of command){
            if(/[A-Za-z]/.test(char)){
                name += char;
            }else if(/[0-9]/.test(char)){
                km += Number(char);
            }
        }

        if(list.includes(name)){
            if(racers.hasOwnProperty(name)){
                racers[name] += km;
            }else{
                racers[name] = km;
            }
        }
        command = arr.shift();
    }

    let entries = Object.entries(racers);
    entries = entries.sort((a, b) => b[1] - a[1]);

    console.log(`1st place: ${entries[0][0]}`);
    console.log(`2nd place: ${entries[1][0]}`);
    console.log(`3rd place: ${entries[2][0]}`);
}

race(['George, Peter, Bill, Tom',

'G4e@55or%6g6!68e!!@ ',

'R1@!3a$y4456@',

'B5@i@#123ll',

'G@e54o$r6ge#',

'7P%et^#e5346r',

'T$o553m&6',

'end of race']);
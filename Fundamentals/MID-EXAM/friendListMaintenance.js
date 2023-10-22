function friendListMaintenance(arr){
    let list = arr.shift().split(', ');

    arr.pop();

    let blacklistedCount = 0;
    let lostedCount = 0;

    for(let command of arr){
        let tokens = command.split(' ');
        let type = tokens[0];

        if(type == 'Blacklist'){
            let name = tokens[1];
            if(list.includes(name)){
                let index = list.indexOf(name);
                list[index] = 'Blacklisted';
                console.log(`${name} was blacklisted.`);
                blacklistedCount++;
            }else{
                console.log(`${name} was not found.`);
            }
        }else if(type == 'Error'){
            let index = tokens[1];
            if(index >= 0 && index < list.length){
                let name = list[index];
                if(name != 'Blacklisted' && name != 'Lost'){
                    list[index] = 'Lost';
                    console.log(`${name} was lost due to an error.`);
                    lostedCount++;
                }
            }
        }else if(type == 'Change'){
            let index = tokens[1];
            let newName = tokens[2];

            if(index >= 0 && index < list.length){
                let curName = list[index];
                list[index] = newName;

                console.log(`${curName} changed his username to ${newName}.`);
            }

        }
    }

    console.log(`Blacklisted names: ${blacklistedCount}`);
    console.log(`Lost names: ${lostedCount}`);
    console.log(list.join(' '));
}
/*
friendListMaintenance(["Mike, John, Eddie, William",
"Blacklist Maya",
"Error 1",
"Change 4 George",
"Report"]);
*/

friendListMaintenance(["Mike, John, Eddie",
"Blacklist Mike",
"Error 0",
"Report"]);
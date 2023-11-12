function partyTime(arr){
 
    let guestList = {
        vip: [],
        regular: [],
    };

    let command = arr.shift();

    while(command !== "PARTY"){
        
        let firstChar = command.charCodeAt(0);

        if(firstChar >= 48 && firstChar <= 57){
            guestList['vip'].push(command);
        }else{
            guestList['regular'].push(command);
        }

        command = arr.shift();
    }

    for(let guest of arr){
        for(let key of Object.keys(guestList)){
            if(guestList[key].includes(guest)){
                let index = guestList[key].indexOf(guest);
                guestList[key].splice(index, 1);
            }
        }
    }

    let counter = 0;
    for(let key of Object.keys(guestList)){
        counter += guestList[key].length;
    }

    console.log(counter);

    let nonArivedGuests = [];
    
    for(let key of Object.keys(guestList)){
        if(guestList[key].length > 0){
            nonArivedGuests.push(...guestList[key]);
        }
    }

    console.log(nonArivedGuests.join('\n'));    
    
}

/*partyTime(
    ['7IK9Yo0h', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc', 'tSzE5t0p', 'PARTY', 
    '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc' ]
);*/

partyTime(['m8rfQBvl', 'fc1oZCE0', 'UgffRkOn',
 '7ugX7bm0', '9CQBGUeJ', '2FQZT3uC', 'dziNz78I',
'mdSGyQCJ', 'LjcVpmDL', 'fPXNHpm1', 'HTTbwRmM',
'B5yTkMQi', '8N0FThqG', 'xys2FYzn', 'MDzcM9ZK', 
'PARTY', '2FQZT3uC', 'dziNz78I', 'mdSGyQCJ', 
'LjcVpmDL', 'fPXNHpm1', 'HTTbwRmM', 'B5yTkMQi', 
'8N0FThqG', 'm8rfQBvl', 'fc1oZCE0', 'UgffRkOn', 
'7ugX7bm0', '9CQBGUeJ' ]);
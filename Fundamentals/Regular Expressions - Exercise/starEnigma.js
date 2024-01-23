function starEnigma(arr){
    let msgCount = Number(arr.shift());
    let starPattern = /[star]/gi;

    let newMsg = [];

    for(let i = 0; i < msgCount; i++){
        let currMsg = arr[i];
        let descyptedMsg = '';

        let matches = currMsg.match(starPattern);

        if(matches){
            let count = matches.length;

            for(let char of currMsg){
                let code = char.charCodeAt();
                code -= count;
                let newChar = String.fromCharCode(code);
                descyptedMsg += newChar;
            }
        }else{
            descyptedMsg = currMsg;
        }
        newMsg.push(descyptedMsg);
    }

    let planetPattern = /@(?<planet>[A-Za-z]+)[^@\-!:>]*:(?<population>\d+)[^@\-!:>]*!(?<type>[AD])![^@\-!:>]*->(?<soldier>\d+)/;

    let attackedPlanets = [];
    let destroyedPlanets = [];

    for(let msg of newMsg){
        let match = msg.match(planetPattern);

        if(match){
            let { planet, type } = match.groups;
        
             if(type == 'A'){
               attackedPlanets.push(planet);
             }else if(type == 'D'){
                destroyedPlanets.push(planet);
             }
        }   
    }

    attackedPlanets.sort((a, b) => a.localeCompare(b));
    destroyedPlanets.sort((a, b) => a.localeCompare(b));

    console.log(`Attacked planets: ${attackedPlanets.length}`);
    attackedPlanets.forEach((planet) => console.log(`-> ${planet}`));
    console.log(`Destroyed planets: ${destroyedPlanets.length}`);
    destroyedPlanets.forEach((planet) => console.log(`-> ${planet}`));

}

//starEnigma(['2', 'STCDoghudd4=63333$D$0A53333', 'EHfsytsnhf?8555&I&2C9555SR']);
starEnigma(['3',

"tt(''DGsvywgerx>6444444444%H%1B9444",

'GQhrr|A977777(H(TTTT',

'EHfsytsnhf?8555&I&2C9555SR']);
function messageDecrypter(arr){
    
    let inputs = Number(arr.shift());

    let pattern = /^([%$])(?<tag>[A-Z][a-z]{2,})\1:\s\[(?<first>\d+)\]\|\[(?<second>\d+)\]\|\[(?<thirt>\d+)\]\|$/g;

    for(let i = 0; i < inputs; i++){
        let message = arr[i];
        let match = pattern.exec(message);

        if(match == null){
            console.log("Valid message not found!");
            continue;
        }

        let {tag, first, second, thirt} = match.groups;

       

        first = Number(first);
        second = Number(second);
        thirt = Number(thirt);

        let char1 = String.fromCharCode(first);
        let char2 = String.fromCharCode(second);
        let char3 = String.fromCharCode(thirt);

        let name = char1 + char2 + char3;

        console.log(`${tag}: ${name}`);
        
    }
}

//messageDecrypter(["4", "$Request$: [73]|[115]|[105]|", "%Taggy$: [73]|[73]|[73]|", "%Taggy%: [118]|[97]|[108]|", "$Request$: [73]|[115]|[105]|[32]|[75]|"]);

messageDecrypter(["3",

"This shouldnt be valid%Taggy%:[118]|[97]|[108]|",

"$tAGged$: [97][97][97]|",

"$Request$: [73]|[115]|[105]|true"]);
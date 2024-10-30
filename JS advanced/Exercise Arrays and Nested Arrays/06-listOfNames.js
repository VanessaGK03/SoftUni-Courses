function listOfNames(arr){
    arr.sort((a, b) => a.localeCompare(b));
    
    for(let i = 1; i <= arr.length; i++){
        let name = arr[i - 1];
        console.log(`${i}.${name}`);
        
    }

}

listOfNames(["John", "Bob", "Christina", "Ema"]);
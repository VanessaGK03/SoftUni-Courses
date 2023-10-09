function arrayRotation(arr, num){
    for(let rotation = 1; rotation <= num; rotation++){
        let temp = arr.shift();
        arr.push(temp);
    }
    console.log(arr.join(" "));
}

arrayRotation([51, 47, 32, 61, 21], 2);
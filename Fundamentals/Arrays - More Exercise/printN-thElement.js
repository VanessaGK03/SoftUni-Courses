function printNthElement(array){
let step = Number(array[array.length - 1]);
let newArray = [];
newArray.push(array[0]);
let counter = 0;
    for(let i = 1; i < array.length - 1; i++){
        counter++;
        if(step == counter){
            counter = 0;
            newArray.push(array[i])
        }
    }

    console.log(newArray.join(" "));
}

printNthElement(['5', '20', '31', '4', '20', '2']);
printNthElement(['dsa', 'asd', 'test', 'test', '2']);
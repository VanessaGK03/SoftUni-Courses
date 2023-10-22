function theLift(arr){
    let people = Number(arr.shift());

    let wagons = arr[0].split(' ').map(Number);
    
    for(let i = 0; i < wagons.length; i++){
        while(wagons[i] < 4 && people > 0){
            wagons[i] += 1;
            people--;
        }
    }

    for(let wagon of wagons){
        if(wagon < 4){
            console.log('The lift has empty spots!');
            break;
        }
    }

    if(people > 0){
        console.log(`There isn't enough space! ${people} people in a queue!`);
    }

    console.log(wagons.join(' '));
}

theLift([
    "30",
    "0 2 0"
   ]);
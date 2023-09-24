function cake(input){
    let length = Number(input[0]);
    let widht = Number(input[1]);

    let totalPices = length * widht;
    let eatenCake = false;

    let index = 2;
    let command = input[index];

    while(command !== "STOP"){
        let pices = Number(command);
        index++;
        totalPices -= pices;
        if(totalPices < 0){
            console.log(`No more cake left! You need ${Math.abs(totalPices)} pieces more.`);
            eatenCake = true;
            break;
        }

        command = input[index];
        
    }

    if(!eatenCake){
        console.log(`${totalPices} pieces are left.`);
    }
}

cake(["10",

"2",

"2",

"4",

"6",

"STOP"])
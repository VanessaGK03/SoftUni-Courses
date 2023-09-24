function moving(input){
    let length = Number(input[0]);
    let widht = Number(input[1]);
    let height = Number(input[2]);

    let totalSpase = length * widht * height;

    let index = 3;
    let command = input[index];

    while(command !== "Done"){
        let boxes = Number(command);
        totalSpase -= boxes;
        if(totalSpase < 0){
            console.log(`No more free space! You need ${Math.abs(totalSpase)} Cubic meters more.`);
            break;
        }
        index++;
        command = input[index];
    }

    if(totalSpase >= 0){
        console.log(`${totalSpase} Cubic meters left.`);
    }
}
function trainingLab(input){
    let l = Number(input[0]) * 100;
    let w = Number(input[1]) * 100;

    let temp = w - 100;

    let rowDesks = Math.floor(temp / 70);
    let colDesks = Math.floor(l / 120);

    let totalDesks = rowDesks * colDesks - 3;

    console.log(totalDesks);

}

trainingLab([15,
8.9]);
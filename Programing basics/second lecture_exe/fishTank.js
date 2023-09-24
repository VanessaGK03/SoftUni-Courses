function fishTank(input){
    let lenght = Number(input[0]);
    let widht = Number(input[1]);
    let height = Number(input[2]);
    let  percent = Number(input[3]) /100;

    let volume = lenght * widht * height;
    let liters = volume / 1000;

    let water = liters - (liters * percent);

    console.log(water);

}

fishTank(["85 ","75 ","47 ","17 "]);
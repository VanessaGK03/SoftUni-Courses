function cone(radius, height){
    //V = (1/3)πr2h
    let volume = (1/3) * Math.PI * Math.pow(radius, 2) * height;
    console.log(`volume = ${volume.toFixed(4)}`);

    //s = √(r2 + h2)
    let s = Math.sqrt(radius * radius + height * height);

    //L = πrs = πr√(r2 + h2);
    let L = Math.PI * radius * s;

    //B = πr2
    let B = Math.PI * (Math.pow(radius, 2));

    //A = L + B;
    let area = L + B;
    console.log(`area = ${area.toFixed(4)}`);

}

cone(3, 5);
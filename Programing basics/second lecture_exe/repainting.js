function repainting(input){
    let nylon = (Number(input[0]) + 2) * 1.50 ;
    let paint = (Number(input[1]) * 1.10) * 14.50;
    let thinner = Number(input[2]) * 5;
    let hours = Number(input[3]);
    let plasticBag = 0.40;

    let total = nylon + paint + thinner + plasticBag;

    let workmanFee = (total * 0.30) * hours;

    let finalPrice = workmanFee + total;

    console.log(finalPrice);



}

repainting(["10 ","11 ","4 ","8 "])
function fishingBoat(input){
    let buget = Number(input[0]);
    let season = input[1];
    let people = Number(input[2]);

    let price = 0;

//"Spring", "Summer", "Autumn", "Winter

    if(season === "Spring"){
        price = 3000;
    }else if(season === "Summer" || season === "Autumn"){
        price = 4200;
    }else {
        price = 2600;
    }

    if (people <= 6){
        price = price * 0.90;
    }else if(people >=7 && people <= 11){
        price *= 0.85;
    }else if(people >= 12){
        price *= 0.75;
    }

    if(people % 2 === 0 && season !== "Autumn"){
        price *= 0.95;
    }

    let diff = Math.abs(buget - price);

    if(buget >= price){
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);

    }else{
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
    }
}

fishingBoat(["2000", "Winter", "13"])
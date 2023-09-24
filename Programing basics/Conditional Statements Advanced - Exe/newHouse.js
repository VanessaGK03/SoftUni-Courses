function newHous(input){
    //"Roses", "Dahlias", "Tulips", "Narcissus", "Gladiolus"

    let flower = input[0];
    let flowerCount = Number(input[1]);
    let buget = Number(input[2]);

    let price = 0;
    

    if(flower === "Roses"){
        price = 5 * flowerCount;
        if(flowerCount > 80){
         price -= (price * 0.10);
        }
    } else if(flower === "Dahlias"){
        price = 3.80 * flowerCount;
        if(flowerCount > 90){
            price -= (price * 0.15);
        }
    }else if(flower === "Tulips"){
        price = 2.80 * flowerCount;
        if(flowerCount > 80){
            price -= (price * 0.15);
        }
    } else if(flower === "Narcissus"){
        price = 3 * flowerCount;
        if(flowerCount < 120){
            price += (price * 0.15);
        }
    }else if(flower === "Gladiolus"){
        price = 2.50 * flowerCount;
        if(flowerCount < 80){
            price += (price * 0.20);
        }
    }

    if( price <= buget){
        console.log(`Hey, you have a great garden with ${flowerCount} ${flower} and ${(buget - price).toFixed(2) } leva left.`);
    }else{
        console.log(`Not enough money, you need ${(price - buget).toFixed(2) } leva more.`);
    }
}

newHous(["Roses",

"55",

"250"])
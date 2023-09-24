function thePyramidOfKingDjoser(base, increment){
    let area = 0;
    let steps = 0;

    let totalStone = 0;
    let totalMarble = 0;
    let totalLapis = 0;
    let totalGold = 0;

    let fifthStep = 0;

    for(let i = base; i >= 1; i -= 2){
        steps++;
    }

    let height = steps;

    steps = 0;
    for(let i = base; i >= 1; i -= 2){
        area = i * i;
        steps++;
        fifthStep++;

        //stone and mramor
        let stone = 0;
        if(steps != height){
            let temp = i - 2;
            stone = temp * temp;
            totalStone += stone * increment;
        }

        let marble = 0;
        if(steps != height && fifthStep != 5){
            marble = area - stone;
            totalMarble += marble * increment;
        }

        let lapis = 0;
        if(fifthStep == 5){
            lapis = area - stone;
            totalLapis += lapis * increment;
        }

        if(steps == height){
            totalGold = (area * increment);
        }

        if(fifthStep == 5){
            fifthStep = 0;
        }
    }

    let totalHeight = Math.floor(steps * increment);

    console.log(`Stone required: ${Math.ceil(totalStone)}`);
    console.log(`Marble required: ${Math.ceil(totalMarble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(totalLapis)}`);
    console.log(`Gold required: ${Math.ceil(totalGold)}`);
    console.log(`Final pyramid height: ${totalHeight}`);
    /* Stone required: 165
     Marble required: 112 
     Lapis Lazuli required: 8 
     Gold required: 1 
     Final pyramid height:*/
} 

thePyramidOfKingDjoser(23, 0.5);
function buildWall(arr){
    //arr.map(Number);

   
    let totalYard = [];
    let totalPrice = 0;
    let day = 0;
    while(arr.length > 0){
        let perDay = 0;
        day++;
        for(let wall of arr){
            let index = arr.indexOf(wall);
            if(wall < 30){
               let newFoot = wall + 1;
               arr.splice(index, 1, newFoot);
                perDay += 195;
            }
        }

        if(arr.includes(30)){
            let index = arr.indexOf(30);
            arr.splice(index, 1);
        }

        if(perDay != 0){
            totalYard.push(perDay);
        }
        totalPrice += perDay;
     
    }
    console.log(totalYard.join(', '));
    totalPrice *= 1900;
    console.log(totalPrice + ' ' + 'pesos');
}

buildWall([17, 22, 17, 19, 17])
//buildWall([24, 29, 24, 26, 24]);
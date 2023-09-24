function trekkingMania(input){
    let groupsCount = Number(input[0]);
    
    let musala = 0;
    let monblan = 0;
    let kilimandjaro = 0;
    let k2 = 0;
    let everest = 0;

    for(let i = 1; i < input.length; i++){
        let group = Number(input[i]);
        if(group <= 5){
            musala += group ;
        }else if(group <= 12){
            monblan += group ;
        }else if(group <= 25){
            kilimandjaro += group ;
        }else if(group <= 40){
            k2 += group ;
        }else{
            everest += group;
        }
    }

    let totalPeople = musala + monblan + kilimandjaro + k2 + everest;

    console.log(`${(musala / totalPeople * 100).toFixed(2)}%`);
    console.log(`${(monblan / totalPeople * 100).toFixed(2)}%`);
    console.log(`${(kilimandjaro / totalPeople * 100).toFixed(2)}%`);
    console.log(`${(k2 / totalPeople * 100).toFixed(2)}%`);
    console.log(`${(everest / totalPeople * 100).toFixed(2)}%`);
}

trekkingMania(["10",

"10",

"5",

"1",

"100",

"12", 
"26", "17", "37", "40", "78"])
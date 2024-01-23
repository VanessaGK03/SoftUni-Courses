function adAstra(input){
    let pattern = /([|#])(?<food>[A-Za-z\s]+)\1(?<expDate>\d{2}\/\d{2}\/\d{2})\1(?<kcal>\d+)\1/g;
    let str = input.shift();
    let totalKcals = 0;
    let products = [];

    let matches = str.matchAll(pattern);
    
    for(let match of matches){
        let {food, expDate, kcal} = match.groups;
        kcal = Number(kcal);
        products.push(`Item: ${food}, Best before: ${expDate}, Nutrition: ${kcal}`);
        totalKcals += kcal;
    }

    let days = Math.floor(totalKcals / 2000);

    console.log(`You have food to last you for: ${days} days!`);
    for(let item of products){
        console.log(item);
    }
}

adAstra([ '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#IceCream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|' ])
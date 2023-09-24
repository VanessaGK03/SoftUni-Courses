function footballKit(input){
    let tshirt = Number(input[0]);
    let neededMoney = Number(input[1]);

    let shorts = tshirt * 0.75;
    let socks = shorts * 0.20;
    let shoes = (tshirt + shorts) * 2;
    
    let sum = tshirt + shorts + socks + shoes;
    let finalSum = sum - sum * 0.15;

    if(finalSum >= neededMoney){
        console.log("Yes, he will earn the world-cup replica ball!");
        console.log(`His sum is ${finalSum.toFixed(2)} lv.`);
    }else{
        console.log("No, he will not earn the world-cup replica ball.");
        console.log(`He needs ${(neededMoney - finalSum).toFixed(2)} lv. more.`);
    }
}
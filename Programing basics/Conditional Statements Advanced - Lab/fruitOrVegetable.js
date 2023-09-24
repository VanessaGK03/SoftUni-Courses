function fruitOrVegetable(input){
    //banana, apple, kiwi, cherry, lemon и grape
    //tomato, cucumber, pepper и carro
    
    
    let food = input[0];

    if(food === "banana" || food === "apple" || food === "kiwi" || 
    food === "cherry" || food === "lemon" || food === "grapes"){
        console.log("fruit");
    }else if(food === "tomato" || food === "cucumber" || food === "pepper" || food === "carrot"){
        console.log("vegetable");
    }else{
        console.log("unknown");
    }
}
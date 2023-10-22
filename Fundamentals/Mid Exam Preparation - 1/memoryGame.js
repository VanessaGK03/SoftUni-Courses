function memoryGame(arr){
    let numbers = arr.shift().split(' ');
    

    arr.pop();
    let moves = 0;
    for(let nums of arr){
        let tokens = nums.split(' ').map(Number);
        let index1 = tokens[0];
        let index2 = tokens[1];

        moves++;

        if((index1 >= 0 && index1 < numbers.length) && (index2 >= 0 && index2 < numbers.length)){
            let num1 = numbers[index1];
            let num2 = numbers[index2];
            if(num1 == num2){
                console.log(`Congrats! You have found matching elements - ${num1}!`);
                numbers.splice(index1, 1);
                let newIndex = numbers.indexOf(num2);
                numbers.splice(newIndex, 1);
            }else{
                console.log("Try again!");
            }
        }else{
            numbers.splice(numbers.length/2, 0, `-${moves}a`, `-${moves}a`);
            console.log("Invalid input! Adding additional elements to the board");
        }

        if(numbers.length == 0){
            console.log(`You have won in ${moves} turns!`);
            return;
        }

    }

    console.log('Sorry you lose :(');
    console.log(numbers.join(' '));
}

memoryGame([
    "a 2 4 a 2 4", 
    "4 0", 
    "0 2",
    "0 1",
    "0 1", 
    "end"
    ]);
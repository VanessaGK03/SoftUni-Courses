function ticTacToe(arr){
    let dash = [[false, false, false],
                [false, false, false],
                [false, false, false]];

    let index = 0;
    let hasWinner = false;

    for (let str of arr) {
        let [row, col] = str.split(' ');
        row = Number(row);
        col = Number(col);
        
        let player;

        if(index % 2 == 0){
            player = 'X';
        }else{
            player = 'O';
        }
            

        if(dash[row][col] == false){
            dash[row][col] = player;
            index++;
        }else{
            if(dash.some(row => row.includes(false))){
                console.log("This place is already taken. Please choose another!");
                continue;
            }else{
                console.log("The game ended! Nobody wins :(");
                
            }
        }

        for(let i = 0; i < 3; i++){
            if((dash[i][0] == dash[i][1] && dash[i][1] == dash[i][2]) && dash[i][0] != false){
                console.log(`Player ${dash[i][0]} wins!`);
                hasWinner = true;
                break;
            }

            if((dash[0][i] == dash[1][i] && dash[1][i] == dash[2][i]) && dash[0][i] != false){
                console.log(`Player ${dash[0][i]} wins!`);
                hasWinner = true;
                break;
            }

        }

        if(hasWinner){
            break;
        }

        if((dash[0][0] == dash[1][1] && dash[1][1] == dash [2][2]) && dash[0][0] != false){
            console.log(`Player ${dash[0][0]} wins!`);
            break; 
        }

        if((dash[0][2] == dash[1][1] && dash[1][1] == dash [2][0]) && dash[0][2] != false){
            console.log(`Player ${dash[0][0]} wins!`);
            break; 
        }

    }

    for(let i = 0; i < 3; i++){
        let buff = '';
        for(let j = 0; j < 3; j++){
            buff += dash[i][j] + '\t';
        }
        console.log(buff.trim());
    }
    
}

/*ticTacToe([
        "0 1",
        "0 0",
        "0 2", 
        "2 0",
        "1 0",
        "1 1",
        "1 2",
        "2 2",
        "2 1",
        "0 0"]);*/

/*ticTacToe(["0 0",
    "0 0",
    "1 1",
    "0 1",
    "1 2",
    "0 2",
    "2 2",
    "1 2",
    "2 2",
    "2 1"]);*/

    ticTacToe(["0 1",
        "0 0",
        "0 2",
        "2 0",
        "1 0",
        "1 2",
        "1 1",
        "2 1",
        "2 2",
        "0 0"]);
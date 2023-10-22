function arrayManipulations(input){
    let arr = input.shift().split(' ');
    
    for(let i = 0; i < input.length; i++){
        let command = input[i].split(' ');
       // for(let j = 0; j < command.length; j++){
            let operation = command[0];
            let firstnum = command[1];
            let secondnum = command[2];

            if(operation == 'Add'){
                arr.push(firstnum);
            }else if(operation == 'Remove'){
                remove(arr, firstnum);
            }else if(operation == 'RemoveAt'){
                arr.splice(firstnum, 1);
            }else if(operation == 'Insert'){
                arr.splice(secondnum, 0, firstnum);
            }
       // }
    }
    console.log(arr.join(' '));

    function remove(arr, num){
        for(let i = 0; i < arr.length; i++){
            if(num == arr[i]){
                arr.splice(i, 1);
            }
        }
        return arr;
    }

    

}

arrayManipulations(['4 19 2 53 6 43',

'Add 3',

'Remove 2',

'RemoveAt 1',

'Insert 8 3'])
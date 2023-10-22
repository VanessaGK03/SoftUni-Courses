function arrayManipulator(arr, input){
    for(let command of input){
        let tokens = command.split(' ');
        let operation = tokens[0];

        if(operation == 'add'){
            let index = Number(tokens[1]);
            let num = Number(tokens[2]);
            arr.splice(index, 0, num);
        }else if(operation == 'addMany'){
            let index = Number(tokens[1]);
            let nums = tokens.slice(2,);

            for(let num of nums){
                arr.splice(index, 0, num);
                index++;
            }

        }else if(operation == 'contains'){
            let element = Number(tokens[1]);
            console.log(arr.indexOf(element));
        }else if(operation == 'remove'){
            let index = Number(tokens[1]);
            arr.splice(index, 1);
        }else if(operation == 'shift'){
            let rotation = Number(tokens[1]);
            for(let i = 0; i < rotation; i++){
                let curNum = arr.shift();
                arr.push(curNum);
            }
        }else if(operation == 'sumPairs'){
            let tempArr = [];
            for(let i = 0; i < arr.length; i+=2){
                if(i + 1 < arr.length){
                tempArr.push(Number(arr[i]) + Number(arr[i + 1]));
                }else{
                    tempArr.push(Number(arr[i]));
                }
            }
            arr = tempArr;
        }else if(operation == 'print'){
            console.log(`[ ${arr.join(', ')} ]`);
        }
    }
}



 arrayManipulator([1, 2, 3, 4, 5],

    ['addMany 5 9 8 7 6 5', 'contains 15', 'sumPairs', 'remove 3',
    
    'shift 1', 'print'])
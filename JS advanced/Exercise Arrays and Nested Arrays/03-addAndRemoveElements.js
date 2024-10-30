function addAndRemoveElements(arr){
    let newArr = [];
    let num = 1;

    for(let command of arr){
        if(command == 'add'){
            newArr.push(num);
        }else if(command == 'remove'){
            newArr.pop();
        }
        num++;
    }

    if(newArr.length != 0){
        newArr.forEach(element => console.log(element));
    }else{
        console.log('Empty');
        
    }
}

addAndRemoveElements(['add', 
    'add', 
    'add', 
    'add']);

console.log('---');


addAndRemoveElements(['add', 
    'add', 
    'remove', 
    'add', 
    'add']);

console.log('---');

addAndRemoveElements(['remove', 
    'remove', 
    'remove']
    )

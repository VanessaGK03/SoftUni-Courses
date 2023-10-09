function addAndRemove(commands){
    let array = [];
    for(let i = 0; i < commands.length; i++){
        

        let command = commands[i];

        if(command == "add" && commands[i + 1] != "remove"){
            array.push(i + 1);
        }else if(command = "remove"){
            array.slice();
        } 
    }



    if(array.length != 0){
        console.log(array.join(" "));
    }else{
        console.log("Empty");
    }
} 

addAndRemove(['add', 'add', 'add', 'add']);
addAndRemove(['add', 'add', 'remove', 'add', 'add']);
addAndRemove(['remove', 'remove', 'remove']);
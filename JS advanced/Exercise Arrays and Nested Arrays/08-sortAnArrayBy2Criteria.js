function sortAnArrayBy2Criteria(arr){
    arr.sort((a, b) => {
        //return a.length - b.length || a.localeCompare(b);
        if(a.length != b.length){
            return a.length - b.length;
        }else{
            return a.localeCompare(b);
        }
    });

    arr.forEach(element => {
        console.log(element);  
    });
   
}

sortAnArrayBy2Criteria(['alpha', 
    'beta', 
    'gamma']);

sortAnArrayBy2Criteria(['Isacc', 
    'Theodor', 
    'Jack', 
    'Harrison', 
    'George']);

sortAnArrayBy2Criteria(['test', 
    'Deny', 
    'omen', 
    'Default']);
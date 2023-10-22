function softUniReception(arr){
    let students = Number(arr.pop());
    let hours = 0;
    
    
    let studentsPerHour = arr.map(Number).reduce((acc, value) => acc + value);
    

    while( students > 0){
       
        hours++;

        if(hours % 4 == 0){
            continue;

        }else{
            students -= studentsPerHour;
        }
    }
    
    console.log(`Time needed: ${hours}h.`);

   

    
}

softUniReception(['3','2','5','40']);
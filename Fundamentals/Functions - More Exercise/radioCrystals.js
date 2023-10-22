
function radioCrystals(array){
    let wishedSize = array[0];

    for(let i = 1; i < array.length; i++){
        let curSize = array[i];
        console.log(`Processing chunk ${curSize} microns`);
        let counter = 0;
        let isReady = false;
        
        while(curSize != wishedSize){
            while((curSize / 4) >= wishedSize - 1){
                curSize = cut(curSize); 
                counter++; 
            }
            if(counter > 0){
            console.log(`Cut x${counter}`);
            curSize = transporting(curSize);
            counter = 0;
            }
            
            
            while((curSize * 0.80) >= wishedSize - 1){
                curSize = lap(curSize);
                counter++;
                
            }
            
            if(counter > 0){
            console.log(`Lap x${counter}`); 
            curSize = transporting(curSize);
            counter = 0;
            }

            

            while((curSize - 20) >= wishedSize - 1){
                curSize = grind(curSize);
                counter++;
                
            }
            if(counter > 0){
            console.log(`Grind x${counter}`); 
            curSize = transporting(curSize);
            counter = 0;
            }
           

            while((curSize - 2) >= wishedSize - 1){
                curSize = etch(curSize);
                counter++;   
            }
           
            if(counter > 0){
            console.log(`Etch x${counter}`); 
            curSize = transporting(curSize);
            counter = 0;
            }

            if(curSize < wishedSize){
                curSize = xRay(curSize);
                console.log(`X-ray x1`);
            }
        }
        console.log(`Finished crystal ${curSize} microns`);
    }


    function transporting(curSize){
        curSize = Math.floor(curSize);
        console.log('Transporting and washing');
        return curSize;
    }

    function cut(curSize){
        curSize /= 4;
        return curSize;
    }

    function lap(curSize){
        curSize *= 0.80;
        return curSize;
    }

    function grind(curSize){
        curSize -= 20;
        return curSize;
    }

    function etch(curSize){
        curSize -= 2;
        return curSize;
    }

    function xRay(curSize){
        curSize += 1;
        return curSize;
    }
}


//radioCrystals([1375, 50000]);
radioCrystals([1000, 4000, 8100]);
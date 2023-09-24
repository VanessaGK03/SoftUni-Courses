function hairSalon(input){
    let goal = Number(input[0]);

    let currMoney = 0;

    let index = 1; 
    let command = input[index];
   // index++;

    while(command !== "closed"){
    
        let type = input[index];
        //index++;
        if(type === "haircut"){
            index++;
            let human = input[index];
            
            if(human === "mens"){
                currMoney += 15;
            }else if(human === "ladies"){
                currMoney += 20;
            }else if(human === "kids"){
                currMoney += 10;
            }
        }else if( type === "color"){
            index++;
            let parts = input[index];
            
            if(parts === "touch up"){
                currMoney += 20;
            }else if(parts === "full color"){
                currMoney += 30;
            }
        }

        if(currMoney >= goal){
            console.log("You have reached your target for the day!");
            break;
        }
        index++;
        command = input[index];
    }

    if( currMoney < goal){
        console.log(`Target not reached! You need ${goal - currMoney}lv. more.`);
    }

    console.log(`Earned money: ${currMoney}lv.`);
}

hairSalon(["300",
"haircut",
"ladies",
"haircut",
"kids",
"color",
"touch up",
"closed"]);

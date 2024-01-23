    function worldTour(arr){
        let stops = arr.shift();

        let command = arr.shift();
        while(command != 'Travel'){
            let tokens = command.split(':');
            let action = tokens[0];
            
            if(action == 'Add Stop'){
                let index = Number(tokens[1]);
                let str = tokens[2];

                if(index >= 0 && index < stops.length){
                    let firstPart = stops.slice(0, index);
                    let secondPart = stops.slice(index);

                    stops = firstPart + str + secondPart;
                }

            }else if(action == 'Remove Stop'){
                let startIndex = Number(tokens[1]);
                let endIndex = Number(tokens[2]);

                let firstPart = stops.slice(0, startIndex);
                let secondPart = stops.slice(endIndex + 1);

                stops = firstPart + secondPart;

            }else if(action == 'Switch'){
            let oldStr = tokens[1];
            let newStr = tokens[2];

            stops = stops.split(oldStr).join(newStr);
            }
            
            console.log(stops);

            command = arr.shift();
        }

        console.log(`Ready for world tour! Planned stops: ${stops}`);
    }


function specialNumbers(input){
    let n = Number(input[0]);

    let buff = "";


    for(let i = 1111; i <= 9999; i++){
        let numberAsStirng = String(i);

        let isMagicNumber = false;
        let counter = 0;

        for(let j = 0; j < numberAsStirng.length; j++){
            let currNum = Number(numberAsStirng[j]);
            if(n % currNum == 0){
                counter++;
            }else {
                break;
            }
        }

        if(counter === 4){
            isMagicNumber = true;
            buff += numberAsStirng + " ";
        }
    }

    console.log(buff);
}

specialNumbers(["3"]);
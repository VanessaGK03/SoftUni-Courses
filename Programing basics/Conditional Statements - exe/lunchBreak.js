function lunchBreak(input){
    let nameSerial = input[0];
    let episodeLast = Number(input[1]);
    let breakTime = Number(input[2]);

    let lunchTime = breakTime * (1/8);
    let rest = breakTime * (1/4);

    breakTime -= (lunchTime + rest);

    if(breakTime >= episodeLast){
        console.log(`You have enough time to watch ${nameSerial} and left with ${Math.ceil(breakTime - episodeLast)} minutes free time.`);
    }else{
        console.log(`You don't have enough time to watch ${nameSerial}, you need ${Math.ceil(episodeLast - breakTime)} more minutes.`);
    }
}

lunchBreak(["Game of Thrones",
"60",
"96"])
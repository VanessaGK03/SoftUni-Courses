function loadingBar(num){
    let singsCount = num / 10;
    let result = '';
    for(let i = 1; i <= 10; i++){
        if(i <= singsCount){
            result += '%'
        }else{
            result += '.'
        }
    }

    if(num < 100){
        console.log(`${num}% [${result}]`);
        console.log('Still loading...');
    }else{
        console.log('100% Complete!');
        console.log(`[${result}]`);
    }
}

loadingBar(100);

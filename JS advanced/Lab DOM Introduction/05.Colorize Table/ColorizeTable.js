function colorize() {
    let tableElements = document.querySelectorAll('table tr');
    
    let index = 1;
    for (const element of tableElements) {
        if(index % 2 == 0){
            element.style.background = 'Teal';
        }
        index++;
    }
    
}
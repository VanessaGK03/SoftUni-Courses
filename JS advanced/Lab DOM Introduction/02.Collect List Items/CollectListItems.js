function extractText() {
   /*
   //first option
    const liElements = document.getElementsByTagName('li');
    const textAreaElement = document.getElementById('result');

    let array = [];

    for(let liElement of liElements){
        //console.log(liElement.textContent);
        array.push(liElement.textContent);
    }

    textAreaElement.value = array.join('\n');
    */


    //second option
    const liElements = document.querySelectorAll('li');
    let textAreaElement = document.getElementById('result');

    let items = Array.from(liElements)
                .map(liElement => liElement.textContent);

    
    textAreaElement.value = items.join('\n');
    
}
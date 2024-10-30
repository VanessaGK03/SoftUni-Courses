function sumTable() {
    let tdElements = document.querySelectorAll('tbody tr td:nth-of-type(2):not(#sum)')

    let sum = 0;

    for(let price of tdElements){
        sum += Number(price.textContent);
    }

    let sumElement = document.getElementById('sum');
    sumElement.textContent = sum;
}
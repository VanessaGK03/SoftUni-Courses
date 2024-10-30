function fromJSONToHTMLTable(input){
    let arr = JSON.parse(input);

    let keys = [];
    
    for(let key in arr[0]){
        keys.push(key);
    }
    
    console.log('<table>');
    let buff = '   <tr>';
    for(let element of keys){
        buff += '<th>' + element + '</th>';
    }
    buff += '</tr>';
    console.log(buff);
    
    for(let el of arr){
        buff = '   <tr>';
        for (const key in el) {
            buff += '<td>' + el[key] + '</td>';
        }
        buff += '</tr>';
        console.log(buff);
        
    }

    console.log('</table>');
    
    
   
    
}

fromJSONToHTMLTable(`[{"Name":"Stamat",
    "Score":5.5},
   {"Name":"Rumen",
    "Score":6}]`);

fromJSONToHTMLTable(`[{"Name":"Pesho",
    "Score":4,
    "Grade":8},
   {"Name":"Gosho",
    "Score":5,
    "Grade":8},
   {"Name":"Angel",
    "Score":5.50,
    "Grade":10}]`);
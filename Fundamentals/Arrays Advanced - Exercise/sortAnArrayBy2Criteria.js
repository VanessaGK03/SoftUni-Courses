function sortArrayBy2Criteria(arr){
    arr.sort((a, b) => a.length - b.length || a.localeCompare(b));
    console.log(arr.join('\n'));
}

sortArrayBy2Criteria(['alpha',

'beta',

'gamma']);
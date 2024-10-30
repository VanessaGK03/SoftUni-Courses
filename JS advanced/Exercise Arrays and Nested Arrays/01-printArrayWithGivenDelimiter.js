function printArrayWithGivenDelimiter(arr, delimiter){
    let result = arr.join(delimiter);
    console.log(result);
    
}

printArrayWithGivenDelimiter(['One', 
    'Two', 
    'Three', 
    'Four', 
    'Five'], 
    '-');

printArrayWithGivenDelimiter(['How about no?', 
    'I',
    'will', 
    'not', 
    'do', 
    'it!'], 
    '_'
    );
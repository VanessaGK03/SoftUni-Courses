function solve(array){

    

console.log(array);

const index = array.indexOf(9);
if (index > -1) { // only splice array when item is found
  array.splice(index, 1); // 2nd parameter means remove one item only
}

// array = [2, 9]
console.log(array); 
}

solve([2, 5, 9]);
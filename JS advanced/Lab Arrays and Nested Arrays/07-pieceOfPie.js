function pieceOfPie(arr, start, end){
    

    let startIndex = arr.indexOf(start);
    let endIndex = arr.indexOf(end);

    //for(let i = startIndex; i <= endIndex; i++){
      //  newArr.push(arr[i]);
    //}

    let newArr = arr.slice(startIndex, endIndex + 1);

    //console.log(newArr);
    
    return newArr;
        
}

pieceOfPie(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
   'Key Lime Pie',
   'Lemon Meringue Pie');

pieceOfPie(['Apple Crisp',
    'Mississippi Mud Pie',
    'Pot Pie',
    'Steak and Cheese Pie',
    'Butter Chicken Pie',
    'Smoked Fish Pie'],
   'Pot Pie',
   'Smoked Fish Pie');
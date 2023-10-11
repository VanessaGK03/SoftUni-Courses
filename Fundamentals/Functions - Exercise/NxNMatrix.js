function NxNMatrix(n){
    for(let i = 0; i < n; i++){
       let row = `${n} `.repeat(n);
       console.log(row);
    }
}

NxNMatrix(3);
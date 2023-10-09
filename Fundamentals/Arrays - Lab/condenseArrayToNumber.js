function condenseArrayToNumber(array){

if(array.length > 1){
    
let condensed = [];
while(condensed.length != 1){
    condensed = [];
for(let i = 0; i < array.length - 1; i++){
condensed.length = array.length - 1;

condensed[i] = array[i] + array[i+1];

}
array = condensed;
}

console.log(Number(condensed));

}else{
    console.log(array[0]);
}



}
   


//condenseArrayToNumber([2,10,3]);
condenseArrayToNumber([5,0,4,1,2]);
//condenseArrayToNumber([1]);
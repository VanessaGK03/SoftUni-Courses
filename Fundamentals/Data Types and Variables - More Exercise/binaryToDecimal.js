function binaryToDecimal(binary){
   //1000 = 1*2^4 + 0*2^3 + 0*2^2...
   let decimal = 0;
   let power = binary.length - 1;

   for(let i = 0; i < binary.length; i++){
    let temp = Number(binary[i]) * Math.pow(2, power);
    power--;
    decimal += temp;
   }

   console.log(decimal);
}

binaryToDecimal('00001001');
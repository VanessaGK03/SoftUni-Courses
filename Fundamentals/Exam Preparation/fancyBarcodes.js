function fancyBarcodes(arr){
    let n = Number(arr.shift());
    let pattern = /(@)#+[A-Z][A-Za-z\d]{4,}[A-Z]\1/g;

    let validBarcodes = [];

    for(let i = 0; i < n; i++){
        let barcode = arr[i];
        
        let match = pattern.exec(barcode);

        if(match != null){
            let group = '';
            for(let char of barcode){
                if(/[0-9]/.test(char)){
                    group += char;
                }
            }
            if(group == ''){
              group = '00';
            }
            console.log(`Product group: ${group}`);
        }else{
            console.log("Invalid barcode");
        }
        pattern.lastIndex = 0;
    }

}

fancyBarcodes(["3",
"@#FreshFisH@#",
"@###Brea0D@###",
"@##Che4s6E@##"]);
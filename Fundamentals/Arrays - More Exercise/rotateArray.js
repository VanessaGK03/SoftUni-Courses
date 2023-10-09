function rotateArray(arr){
    let rotation = Number(arr[arr.length - 1]);

    arr.pop();

    for( let i = 1 ; i <= rotation; i++){
        let temp = arr[arr.length - 1];
        arr.pop();
        arr.unshift(temp);
        
    }
    console.log(arr.join(' '));
}


//rotateArray(['1', '2', '3', '4', '2']); 
rotateArray(['Banana', 'Orange', 'Coconut','Apple', '15']);
//r1 : O C A B
//r2: C A B O
//r3: A B O C
//r4: B O C A
//r5: O C A B
//r6: C A B O
//r7: A B O C
//r8: B O C A
//r9: O C A B
//r10 C A B O
//r11 A B O C
//r12 B O C A
//r13 O C A B
//r14 C A B O
//r15 A B O C

 
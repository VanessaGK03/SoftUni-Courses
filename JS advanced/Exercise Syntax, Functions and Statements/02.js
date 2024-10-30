function gcd(a, b){
    let r = a % b;

    while(r != 0){
        a = b;
        b = r;
        r = a % b;
    }

    console.log(b);
}

gcd(2154, 458);
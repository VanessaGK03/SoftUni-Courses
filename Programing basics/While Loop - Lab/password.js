function password(input){
    let username = input[0];
    let realPassword = input[1];
    let password = input[2];

    let index = 3;

    while(password !== realPassword){
        password = input[index];
        index++;
    }

    console.log(`Wellcome ${username}!`);
}

password(["Nakov",

"1234",

"Pass",

"1324",

"1234"])
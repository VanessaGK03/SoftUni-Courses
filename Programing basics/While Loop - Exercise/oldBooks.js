function oldBooks(input){
    let book = input[0];

    let index = 1;
    let command = input[index];
    let counter = 0;

    while(command !== book){
        
        if(command === "No More Books"){
            console.log(`The book you search is not here!`);
            console.log(`You checked ${counter} books.`);
            break;
        }
        counter++;
        index++;
        command = input[index];
    }

    if(command === book){
        console.log(`You checked ${counter} books and found it.`);
    }
}

oldBooks(["The Spot",

"Hunger Games",

"Harry Potter",

"Torronto",

"Spotify",

"No More Books"])
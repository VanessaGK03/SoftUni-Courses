function schoolLibrary(arr){
    let books = arr.shift().split('&');
    
    let command = arr.shift();

    while(command != "Done"){
        let tokens = command.split(' | ');
        let action = tokens[0];

        if(action == 'Add Book'){
            let book = tokens[1];
            if(!(books.includes(book))){
                books.unshift(book);
            }
        }else if(action == 'Take Book'){
            let book = tokens[1];
            if(books.includes(book)){
                let index = books.indexOf(book);
                books.splice(index, 1);
            }
        }else if(action == 'Swap Books'){
            let book1 = tokens[1];
            let book2 = tokens[2];
            if(books.includes(book1) && books.includes(book2)){
                let index1 = books.indexOf(book1);
                let index2 = books.indexOf(book2);

                books[index1] = book2;
                books[index2] = book1;
            }
        }else if(action == 'Insert Book'){
            let book = tokens[1];
            if(!(books.includes(book))){
                books.push(book);
            }
        }else if(action == 'Check Book'){
            let index = tokens[1];
            if(index >= 0 && index < books.length){
                console.log(books[index]);
            }
        }

        command = arr.shift();
    }
    console.log(books.join(', '));
}

schoolLibrary(["Don Quixote&The Great Gatsby&Moby Dick",
"Add Book | Ulysses",
"Take Book | Don Quixote",
"Insert Book | Alice's Adventures in Wonderland",
"Done"])


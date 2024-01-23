function matchFullName(names){
    let patern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;

    let validNames =  [];
    let validName = patern.exec(names);

    while(validName != null){
        validNames.push(validName[0]);
        validName = patern.exec(names);
    }

    console.log(validNames.join(' '));
}

matchFullName('ivan ivanov, Ivan ivanov, ivan Ivanov, Test Testov, IVan Ivanov, Ivan IvAnov, Ivan Ivanov')
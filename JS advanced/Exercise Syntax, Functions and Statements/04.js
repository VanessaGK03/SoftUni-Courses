function previousDay(year, month, day){

    let date = new Date(year, month , day - 1);

    console.log(`${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`);
}

previousDay(2024, 9, 30);


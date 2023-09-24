function vacationBooksList(input){
    let numberOfPages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let neededDays = Number(input[2]);

    let totalHours = numberOfPages / pagesPerHour;
    let hoursPerDay = totalHours / neededDays;

    console.log(hoursPerDay);

}

vacationBooksList(["212 ","20 ","2 "]);
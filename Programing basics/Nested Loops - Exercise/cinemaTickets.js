function cinemaTickets(input){
    let index = 0;
    let command = input[index];

    let kidsTickets = 0;
    let studentsTickets = 0;
    let standartTickets = 0;
    let totalTickets = 0;

    while(command !== "Finish"){
        let movie = command;
        index++;
        let places = Number(input[index]);
        index++;
        let type = input[index];
        let holdPlace = 0;
        while(type !== "End"){
            holdPlace++;
            if(type === "kid"){
                kidsTickets++;
            }else if(type === "student"){
                studentsTickets++;
            }else if(type === "standard"){
                standartTickets++;
            }

            totalTickets++;

            if(holdPlace === places){
                break;
            }

            index++;
            type = input[index];
        }

        let percentPerMovie = holdPlace / places  * 100;

        console.log(`${movie} - ${percentPerMovie.toFixed(2)}% full.`);

        index++;
        command = input[index];
       

    }

    let percentKidsTickets = kidsTickets / totalTickets * 100;
    let percentStudentsTickets = studentsTickets / totalTickets * 100;
    let percentStandartTickets = standartTickets / totalTickets * 100;

    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${percentStudentsTickets.toFixed(2)}% student tickets.`);
    console.log(`${percentStandartTickets.toFixed(2)}% standard tickets.`);
    console.log(`${percentKidsTickets.toFixed(2)}% kids tickets.`);
}

cinemaTickets(["Taxi", 

"10", "standard", "kid", "student", "student", "standard", "standard", "End", "Scary Movie", "6", "student", "student", "student", "student", "student", "student", "Finish"])
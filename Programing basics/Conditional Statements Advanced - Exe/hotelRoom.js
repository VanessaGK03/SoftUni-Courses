function hotelRoom(input){
    //May, June, July, August, September или October

    let month = input[0];
    let niths = Number(input[1]);

    let apartment = 0;
    let studio = 0;

    if(month === "May" || month === "October"){
        studio = 50 * niths;
        apartment = 65 * niths;
        if(niths > 7 && niths <= 14){
            studio -= studio * 0.05;
        }else if(niths > 14){
            studio -= studio * 0.30;
            apartment -= apartment * 0.10;
        }
    }else if(month === "June" || month === "September"){
        studio = 75.20 * niths;
        apartment = 68.70 * niths;
        if(niths > 14){
            studio -= studio * 0.20;
            apartment -= apartment * 0.10;
        }
    }else if(month === "July" || month === "August"){
        studio = 76 * niths;
        apartment = 77 * niths;
        if(niths > 14){
            apartment -= apartment * 0.10;
        }
    }

    console.log(`Apartment: ${apartment.toFixed(2)} lv.`);
    console.log(`Studio: ${studio.toFixed(2)} lv.`);
}
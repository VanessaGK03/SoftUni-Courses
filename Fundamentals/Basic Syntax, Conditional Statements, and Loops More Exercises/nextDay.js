function nextDay(year, month, day){
    newDay = day + 1;
    newMonth = month;
    newYear = year;

    if(newYear >= 1 && newYear <= 10){
        newYear += 1900;
    }
    if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12){
        
        if(newDay > 31){
            newDay = 1;
            newMonth = month + 1;
            if(newMonthonth > 12){
                newMonth = 1;
                newYear = year + 1;
            }
        }
    }else if(month == 4 || month == 6 || month == 9 || month == 11){
       
        if( newDay > 30){
            newDay = 1;
            newMonth = month + 1;
        }
    }else if(month == 2){
       
        if(newDay > 28){
            newDay = 1;
            newMonth = month + 1;
        }
    }

    console.log(`${newYear}-${newMonth}-${newDay}`);

}

nextDay(2016, 9, 30);
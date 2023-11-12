function companyUsers(arr){
    let companyEmployees = {};
    
    for(let companyEmployee of arr){
        let [company, employeeId] = companyEmployee.split(' -> ');
        if(company in companyEmployees){
            if(!companyEmployees[company].includes(employeeId)){
                companyEmployees[company].push(employeeId);
            }
        }else{
            companyEmployees[company] = [employeeId];
        }
    }

    

    let entries = Object.entries(companyEmployees);
    entries.sort((a, b) => a[0].localeCompare(b[0]));

    for(let [company, employeeIds] of entries){
        console.log(company);
        for(let id of employeeIds){
            console.log(`-- ${id}`);
        }
    }

    
}

companyUsers([ 'SoftUni -> AA12345', 'SoftUni -> BB12345', 'Microsoft -> CC12345', 'HP -> BB12345' ]);
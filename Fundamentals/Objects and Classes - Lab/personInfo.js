function personInfo(firstName, lastname, age){
   let person = {};

   person.firstName = firstName;
   person.lastname = lastname;
   person.age = age;

   return person;
}

let result = personInfo("Peter", "Pan", "20");
console.log(result);
///////////////////
// PROBLEM 2 /////
/////////////////

// Given the object:
var employee = {
    name: "John Smith",
    job: "Programmer",
    age: 31,
    details:function(){
        // return `Name is ${this.name}, Job is ${this.job}, Age is ${this.age}. `;
        alert(`Name is ${this.name}, Job is ${this.job}, Age is ${this.age}. `);
    },
}
  
// Write program that will create an Alert in the browser of each of the
// object's values for the key value pairs. For example, it should alert:
  
// Name is John Smith, Job is Programmer, Age is 31.
// console.log(employee.details());
employee.details();
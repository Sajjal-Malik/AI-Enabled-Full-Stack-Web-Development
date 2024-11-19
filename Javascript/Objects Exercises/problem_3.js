///////////////////
// PROBLEM 3 /////
/////////////////

// Given the object:
var employee = {
    name: "John Smith",
    job: "Programmer",
    age: 31,
    lastName: function(){
        nameArray = this.name.split(" ");
        return nameArray[1];
    },
}
  
// Add a method called lastName that prints
// out the employee's last name to the console.
  
// You will need to figure out how to split a string to an array.
// Hint: http://www.w3schools.com/jsref/jsref_split.asp
console.log(employee.lastName());
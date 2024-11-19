////////////////////
// PROBLEM 1 //////
//////////////////

// Given the object:
var employee = {
    name: "John Smith",
    job: "Programmer",
    age: 31,
    nameLength: function(){
        return this.name.length;
    },
}

// Add a method called nameLength that prints out the
// length of the employees name to the console.
console.log(employee.nameLength());

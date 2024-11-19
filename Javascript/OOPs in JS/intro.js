// Procedural way
let baseSalary = 40_000;
let overTime = 20;
let rate = 20;

function getWage(baseSalary, overTime, rate) {
    return baseSalary + (overTime * rate);
}

// Object Oriented way 
let employee = {
    baseSalary : 40_000,
    overTime : 20,
    rate : 20,
    getWage: function getWage() {
        return this.baseSalary + (this.overTime * this.rate)
    }   
}

employee.getWage();
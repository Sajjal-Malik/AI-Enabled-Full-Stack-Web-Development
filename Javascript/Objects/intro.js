var vehicle = {
    make: 'toyota',
    year: 2021,
    model: 'prius'
}

console.log(typeof vehicle);
console.log(vehicle['make']);
console.log(vehicle['year']);


// vehicle['year']=2012
// vehicle['year'] += 1;
console.log(vehicle);
// console.dir(vehicle);
console.log();

var mess = { 
    a: "hello", 
    b: ['x','y','z'] , 
    c: {'inside': [ 4 ,5, ["weird"]]}
};

console.log(mess['c']['inside'][2]);  // it grabbing the list inside of list inside of object
console.log(mess['c']['inside'][2][0]); // it grabbing the first value of list inside of list inside of object
console.log(mess)
console.log();


for(key in mess){
    // console.log(key);
    // console.log(mess[key]);
    console.log(key + ": " + mess[key]);
}
console.log();

var newObject = {
    name: "Sajjal",
    age: 24,
    details: function(year){  // defining a method
        this.age = year;
        return "Hello from object function";
    }
}

console.log(newObject.details(23));
console.log(newObject);
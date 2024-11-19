class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    age() {
        const date = new Date();
        return date.getFullYear() - this.year;
    }

    present() {
        return 'I have a ' + this.carname;
    }
}


class Model extends Car {
    constructor(brand, mod) {
        super(brand);
        this.model = mod;
    }
    show() {
        return this.present() + ', it is a ' + this.model;
    }

    get cnam() {
        return this.carname;
    }
    set cnam(x) {
        this.carname = x;
    }

    static hello() {
        return "Hello!!";
    }

    // static hello(x) {
    //     return "Hello " + x.name;
    // }
}

const myCar1 = new Car("Ford", 2014);
const myCar2 = new Car("Audi", 2019);

let myCar = new Model("Ford", "Mustang");
let myCarN = new Model("Tesla");

// base class properties and methods
console.log(myCar1.name);
console.log(myCar1.year);
console.log(myCar1.age());

// inherited class properties and methods
console.log(myCar.model);
console.log(myCar.present());
console.log(myCar.age());

// console.log(myCarN.cnam('BMW'));
console.log(myCarN.name);
myCar.cnam = 'BMW';
console.log(myCarN.cnam);

// console.log(myCarN.hello()); // this will throw error
// console.log(myCar.hello());
// console.log(Car.hello());


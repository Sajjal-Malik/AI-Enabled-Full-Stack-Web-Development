const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function(){
        console.log('draw');
    },
};

// circle.draw();

// Factory function
function createCircle(radius){
    return {
        radius,
        draw: function(){
            console.log('draw');
        }
    }
}
// don't need to use new keyword with factory functions
const c = createCircle(1);
// console.log(c.radius);
// console.log(c.constructor);

// Constructor function
function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
    // this happend automatically
    // return this;
}

// new keyword is a must use with constructor functions
const another = new Circle(1);
// console.log(another.radius);

let objS = {};  // implicit call of object constructor
let objN = new Object();  // object constructor use expicitly
let str = new String();  // string constructor
let bool = new Boolean();  // boolean constructor
let number = new Number();  // number constructor



function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
    // this happend automatically
    // return this;
}

const obj = new Circle(1);

const Circle1 = new Function('radius', `
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
`);

const obj1 = new Circle(1);
obj1.location = {x: 1};
const propertyName = 'location';
obj1['location'] = {x: 1};
// Circle.call(window, 1);
Circle.call({}, 1);
Circle.apply({}, [1,2,3,]);

for(let key in obj1) {
    if(typeof obj1[key] !== 'function')
        console.log(key, obj1[key]);
}

const keys = Object.keys(obj);
console.log(keys);

if('radius' in obj1){
    console.log("circle has radius");
}


let str1 = 'Malik';
let str2 = str1;
// key take-away - primitives are copied by value
console.log(str1);
console.log(str2);
str1 = "Bhatti";
console.log(str1);
console.log(str2);


let x = {value: 20};
let y = x;
// key take-away - objects are copied by reference
console.log(x);
console.log(y);


let num = 10;
function increase(number){
    number++;
}

increase(num);
console.log(num);

let obj2 = {value: 10};
function increase(obj2){
    obj2.value++;
}

increase(obj2);
console.log(obj2);
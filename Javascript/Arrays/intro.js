var countries = ['Pak','US','Canada'];

// console.log(countries[0]);
// console.log(countries[1]);
// console.log(countries[2]);

for(let name of countries){
    console.log(name);
}


var mixed = [1, 'hello', 'A', 2.20];

// for(let val of mixed){
//     console.log(val);
// }


console.log(mixed.length); 

var lastValue = mixed.pop(); // it removes the last element from the array
console.log(lastValue);


// push returns size along with inserting the element into the array
console.log(mixed.push('new'));
console.log(mixed.push('newAgain'));

// printing the array after pushing two values into array
console.log(mixed);

console.log(mixed[mixed.length - 1]);

let arr = [1,2,3];

for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

for(num in arr){
    console.log(num);
}

// console.log(arr.forEach(alert));

var course = ['Python', 'JavaScript', 'Django'];
function Awsome(s){
    console.log(s + " is Awesome");
}

course.forEach(Awsome);


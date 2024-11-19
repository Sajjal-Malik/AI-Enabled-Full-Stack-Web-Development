function hello(){
    console.log("Hello World!");
}

// fetching complete function object
// hello;

// function call
hello();


function hello_with_param(name){
    console.log("Greetings " + name + "!");
}

// calling without parameters will not give error but will use undefined 
// hello_with_param();

hello_with_param("Malik");


function addTwoValues(num1, num2){
    console.log(num1 + num2);
}

addTwoValues(1, 2);
addTwoValues();  // will not give eror but prints NaN


// function with default parameters
function addTwoValues2(num1=0, num2=4){
    console.log(num1 + num2);
}

addTwoValues2(1, 2);
addTwoValues2();



function greet(title="Sir", name="Malik"){
    return title + " "  + name
}

console.log("welcome " + greet());
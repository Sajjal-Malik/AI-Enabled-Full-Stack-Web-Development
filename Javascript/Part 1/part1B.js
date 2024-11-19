var val = prompt("Enter the temprature: ");  // bedefault the input is of string type like in python
var temp = parseInt(val);

if(temp === 30){
    alert("It is pleasant today...");
}
else if(temp < 30){
    alert("It is Cold Today...");
}
else{
    alert("It is hot today...");
}

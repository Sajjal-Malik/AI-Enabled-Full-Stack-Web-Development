const prompt=require("prompt-sync")({sigint:true});

var flag = true;

while(flag){
    var fname = prompt("Enter your first name plz: ");
    var lname = prompt("Enter your last name plz: ");
    var age = prompt("Enter your age plz: ");
    var intAge = parseInt(age);
    var height = prompt("Enter your height in m plz:");
    var intHeight = parseInt(height);
    var petName = prompt("Enter your pet name plz:");
    let lengthPetName = petName.length;

    if((fname[0] === lname[0]) && (intAge > 20 || intAge < 30) && (intHeight > 170) && (petName[lengthPetName - 1] === 'y')){
        console.log(`YOU are CAUGHT.....!!!
                    Your name is: ${fname} ${lname}.
                    Your age is: ${intAge}. 
                    You are ${intHeight}m Tall.
                    your pet name is: ${petName}.`);
                    flag = false;
    }
    else{
        let response = prompt("Would you like to enter your data and check again: ");
        if(response == 'yes'){
            flag = true;
        }
        else{
            flag = false;
        }
    }
}
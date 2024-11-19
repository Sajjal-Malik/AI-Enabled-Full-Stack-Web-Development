var roster=[]
var query;

var start = prompt("Would you like to start roster web app? y/n")

if (start=="y") {
    
    while (true) {
        query=prompt("Select Command: add, remove, display, quit")

        if (query=="add"){
            var entry=prompt("Enter a name:");
            roster.push(entry);
        }
        else if (query=="remove") {
            var entry=prompt("Enter a name:");
            var index= roster.indexOf(entry);
            roster.splice(index,1);        
        }
        else if (query=="display") {
            console.log(roster);
        }
        else if (query=="quit") {
            break;
        }   
    }
}

alert("Thank you for using Roster web app!")
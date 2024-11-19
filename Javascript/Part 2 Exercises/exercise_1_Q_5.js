// PROBLEM 5:
//
// You are driving a little too fast, and a police officer stops you. Write code to
// compute the result, encoded as an int value: 0=no ticket, 1=small ticket,
// 2=big ticket. If speed is 60 or less, the result is 0. If speed is between 61
// and 80 inclusive, the result is 1. If speed is 81 or more, the result is 2.
// Unless it is your birthday -- on that day, your speed can be 5 higher in all cases.
//
// Here are some example inputs and outputs:
//
// caught_speeding(60, false) → 0
// caught_speeding(65, false) → 1
// caught_speeding(65, true) → 0

function caught_speeding(speed, is_birthday) {
    if (is_birthday) {
        speed -= 5;
    }
    if (speed <= 60) {
        return 0 //No Ticket
    }
    if (speed <= 80) {
        return 1 //small ticket
    }
    else {
        return 2 //Big Ticket
    }
}

console.log(caught_speeding(60, false));
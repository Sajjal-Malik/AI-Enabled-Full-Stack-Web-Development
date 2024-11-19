// PROBLEM 3: STRING TIMES
//
// Given a string and a non-negative int n, return a larger
// string that is n copies of the original string.
//
// Example input and output:
//
// stringTimes("Hi", 2) → "HiHi"
// stringTimes("Hi", 3) → "HiHiHi"
// stringTimes("Hi", 1) → "Hi"

function stringTimes(str, n) {
    if (n < 1) {
        return ''
    }
    var result = str
    for (i = 1; i < n; i++) {
        result = result + str
    }
    return result
}

console.log(stringTimes("Hi",4));
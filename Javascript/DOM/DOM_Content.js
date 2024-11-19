// Let's type this into the console, follow along with the video lecture

var x = document.querySelector("p")

// Show Text
console.log(x.textContent);

// Reassign Text
x.textContent = "new"

// Refresh the page
// Show actual HTML
console.log(x.innerHTML)

// Edit HTML
x.innerHTML = "This is <strong>BOLD</strong>"

// Can't do that with just textContent

/////////////////
// Attributes //
///////////////

var special = document.querySelector("#special")
var specialA = y.querySelector("a")

console.log(specialA.getAttribute("href"));

specialA.setAttribute("href","https://www.amazon.com")
var my_heading = document.querySelector("h1")

function change_color() {
    var letters = "0123456789ABCDEF"
    var color = "#"
    for (var i = 0; i < 6; i++) {
        // string concatenation
        color += letters[Math.floor(Math.random() * 16)] // 0-16, 11.8=11
    }
    my_heading.style.color = color
}

setInterval("change_color()", 1000)
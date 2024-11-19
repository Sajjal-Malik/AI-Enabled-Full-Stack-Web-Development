// BONUS: MAKE BRICKS
//
// We want to make a row of bricks that is goal inches long. We have a number of
// small bricks (1 inch each) and big bricks (5 inches each). Return true if it
// is possible to make the goal by choosing from the given bricks. This is a
// little harder than it looks and can be done without any loops in a single line!
//
// If you can't figure this one out, don't worry, that's why its a bonus!
//
// makeBricks(3, 1, 8) → true
// makeBricks(3, 1, 9) → false
// makeBricks(3, 2, 10) → true
// makeBricks(0, 3, 11) → false

function makeBricks(small, big, goal){
    return (5*big + small >= goal) && (goal%5 - small <= 0);
}  

console.log(makeBricks(1, 1, 1));
console.log(makeBricks(1, 0, 0));
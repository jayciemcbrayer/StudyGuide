// Psuedo code

// Print bottles from max amount to least amount
// Start at max
// State how many beers on the wall
// Repeat 
// Take one down
// decrement the amount of bottles 
// repeat

let bottleCount = 99;
let phrase = " bottles of beer "

while (bottleCount >= 1) {
    if (bottleCount > 1) {
        console.log(bottleCount + phrase + "on the wall")
        console.log(bottleCount + phrase)
        console.log("Take one down, pass it around")
        bottleCount = bottleCount - 1;
    } else if (bottleCount == 1) {
        phrase = " bottle of beer "
        console.log(bottleCount + phrase + "on the wall")
        console.log(bottleCount + phrase)
        console.log("Take one down, pass it around")
        bottleCount = bottleCount - 1;
        console.log(bottleCount + " bottles of beer on the wall")
        console.log(bottleCount + " bottles of beer")
        console.log("Take one down, pass it around")
    }
}
console.log("No more bottles of beer on the wall");


 


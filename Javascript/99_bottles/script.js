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

while (bottleCount > 1) {
  console.log(bottleCount + phrase + "on the wall" );
  bottleCount = bottleCount - 1;
} 
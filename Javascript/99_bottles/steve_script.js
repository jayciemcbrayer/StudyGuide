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
let diffPhrase = " bottle of beer "

while (bottleCount > 0) {
  console.log(bottleCount + phrase + "on the wall" );
  console.log(bottleCount + phrase);
  console.log("Take one down, pass it around,");
  bottleCount = bottleCount - 1;
  
	if (bottleCount > 1) {
    console.log(bottleCount + phrase + "on the wall");
    } else {
    console.log(bottleCount + diffPhrase + "on the wall");
    console.log(bottleCount + diffPhrase + "on the wall");
    console.log(bottleCount + diffPhrase);
    console.log("Take one down, pass it around,");
    bottleCount = bottleCount - 1;
  } 
}
  console.log("No more" + phrase + "on the wall");
   
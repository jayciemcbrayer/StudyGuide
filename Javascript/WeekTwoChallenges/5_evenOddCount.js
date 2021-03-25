// Count up 100
// Only print the odd numbers
// If the number is even  print "the word is even"

function evenOrOdd(int) {
    while (int < 100) {
        int++; //this is the same as evenOrOdd = evenOrOdd + 1;
            if (int % 2 == 0) { //this makes sure the number divided by 2 is equal to 0, thus separating out the even numbers;
                console.log("the word is even")
            } else {
                console.log(int);
            }
    }
}

evenOrOdd(0)
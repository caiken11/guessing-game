//store upperbound in variable
let highest = getUpperBound("What is the upper bound or the highest the number can be?")

//generate random number to be guessed
let secretNum = Math.floor(Math.random()*highest) +1;

//console.log(secretNum);

//create array to hold valid guesses
let arr = [];

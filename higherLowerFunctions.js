//function to collect and validate an upperbound from user
function getUpperBound(prompt) {
    let validInput = false;
    let input, upperBound;
//ask user to input number for upperbound
    while (!validInput) {
        input = window.prompt(prompt);

        upperBound = Number(input);
//validate that input is a number greater than 0, trim decimals
        if (!isNaN(upperBound) && upperBound > 0) {
            upperBound = Math.round(Number(input));
            validInput = true;
        }
    }//update instructions with inputted upperbound
    let instructions = document.getElementById("instructions");
    instructions.innerHTML = `Guess an integer between 1 and ${upperBound}`;
    return upperBound;
}
//function to validate guess and check guess against secret random number
function runGame() {
    let guess = Number(document.getElementById("guess").value);
    
    let message = document.getElementById("message");
//validate guess is a number, in range and error messages
    if (isNaN(guess)) {
        message.innerHTML = "That is not a number!";
    }
    else if (guess > highest) {
        message.innerHTML = "That number is not in range, try again.";
    }
    else if (guess < 0) {
        message.innerHTML = "That number is not in range, try again.";
    }//if guess is correct and message
    else if (guess == secretNum) {
        arr.push(guess);
        message.innerHTML = `You got it! It took you ${arr.length} tries and your guesses were ${arr.toString()}.`;
    }//validate guess is not repeated and error message
    else if (arr.indexOf(guess) != -1) {
        message.innerHTML = `You already guessed ${guess}! Try again.`;
    }//check if guess is higher or lower than secret number and store guesses in an array
    else if (guess > secretNum) {
        arr.push(guess);
        message.innerHTML = "Incorrect, try a lower number.";
    }
    else {
        arr.push(guess);
        message.innerHTML = "Incorrect, try a higher number.";
    }
}



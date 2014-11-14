function guessNumber(number, clue) {
  // Prompt the user for a number using the string value of clue
  var guess = prompt(clue);  
  // Convert their guess to a number using +
  guess = +guess;
  
  // Define base case
  if (guess === number) {
    return console.log("You got it! The number was " + number);
  }
  // Define first recursive case (guess is too low)
  else if (guess < number) {
    return guessNumber(number, "too low"); 
  }
  // Define second recursive case (guess is too high)
  else if (guess > number) {
      return guessNumber(number, "too high");
  }
}

guessNumber(13, "Guess a number between 1 and 25.");

// with while loop

function guessNumber(number, clue) {
  // Prompt the user for a number using the string value of clue
  guess = prompt(clue);
  // Convert their guess to a number using +
  guess = +guess;
  
  while (guess !== number) {
    if (guess < number) {
      guess = prompt("Too low. Guess again.");
    }
    else if (guess > number) {
      guess = prompt("Too high. Guess again.");
    }
    guess = +guess;
  }
  
  console.log("You got it! The number was " + number);
}

guessNumber(13, "pick a number from 1-20");

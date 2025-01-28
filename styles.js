function checkGuess() {
    console.log("Button clicked"); // Check if the button click event is detected
    
    let guessedNumber = parseInt(userInput.value);
    console.log("Guessed Number:", guessedNumber); // Check the value of guessedNumber

    console.log("Random Number:", randomNumber); // Check the value of randomNumber

        if (guessedNumber > randomNumber) {
        gameResult.textContent = "Too High ! Try Again.";
        gameResult.style.backgroundColor = "red";
    } else if (guessedNumber < randomNumber) {
        gameResult.textContent = "Too Low ! Try Again.";
        gameResult.style.backgroundColor = "#1e217c";
    } else if (guessedNumber === randomNumber) {
        gameResult.textContent = "Congrats 👍 ";
        gameResult.style.backgroundColor = "green";
    } else {
        gameResult.textContent = "Please Provide a valid input";
        gameResult.style.backgroundColor = "Black";
    }

}

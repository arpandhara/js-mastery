// Nested if else 


// we are going to make a game 
// there is a winning number 
// the user enters a number 
// if the user guess the number right he wins and gets a message that he or she won 
// if he guesses the number below the winnng numbe then he gets a message that the guess is too low 
// if he guesse the numbee above the winnnig numbe then he gets a message the guess is too high 
// make a statement that can execute all this things


 
let winningNumber = 19; // the winnig no 
let userGuess = prompt("Guess a number : "); // where the user will guess the his no
userGuess = Number(userGuess); // as the input taken fron the user is a string it has to be converted to a no first thus this statement

if (userGuess === winningNumber) { //if the no or the guess is right 
    console.log("Yayy you are absolutely right"); // this will gets executed 
} else { // else iit will return any of the two statement 

    if (userGuess < winningNumber) { // this is nested if else , writing ifelse inside else is called nested if else
        console.log("you guess is too low");
    } else {
        console.log("you guess is too high")
    }

}

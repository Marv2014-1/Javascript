// Rock paper scisors

let playGame = confirm("Do you want to play a game of rock, paper, scissors?");

if (playGame) {
    // play the game
    let userChoice = prompt("Please choose rock, paper, or scissors");

    if (userChoice) {
        // convert the user choice to lowercase and trim any whitespace
        let playerChoice = userChoice.trim().toLowerCase();
        if (
            playerChoice === "rock" ||
            playerChoice === "paper" ||
            playerChoice === "scissors"
        ) {
            // generate a random number between 0 and 2
            let computerChoice = Math.floor(Math.random() * 3);
            let computerText = "";
            // convert the computer choice to rock, paper, or scissors
            if (computerChoice === 0) {
                computerText = "rock";
            } else if (computerChoice === 1) {
                computerText = "paper";
            } else {
                computerText = "scissors";
            }
            // output the computer choice
            alert("The computer chose " + computerText);
            // determine the winner
            if (playerChoice === computerText) {
                alert("It's a tie!");
            } else if (
                (playerChoice === "rock" && computerText === "scissors") ||
                (playerChoice === "paper" && computerText === "rock") ||
                (playerChoice === "scissors" && computerText === "paper")
            ) {
                alert("You win!");
            } else {
                alert("You lose!");
            }
        } else {
            alert("You did not enter rock, paper, or scissors. Goodbye.");
        }
    } else {
        alert("You must enter a valid choice next time. Goodbye.");
    }
} else {
    alert("Goodbye");
}

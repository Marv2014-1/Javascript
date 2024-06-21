let playGame = confirm("Do you want to play a game of rock, paper, scissors?");

if (!playGame) {
    alert("Maybe next time!");
} else {
    let userChoice = prompt("Please choose rock, paper, or scissors");
    if (!userChoice) {
        alert("You did not make a choice. Goodbye.");
        // Early exit if userChoice is falsy
        return;
    }

    let playerChoice = userChoice.trim().toLowerCase();

    if (
        playerChoice !== "rock" &&
        playerChoice !== "paper" &&
        playerChoice !== "scissors"
    ) {
        alert("You did not enter rock, paper, or scissors. Goodbye.");
        // Early exit if playerChoice is not one of the options
        return;
    }

    let computerChoice = Math.floor(Math.random() * 3);
    let computerText = ["rock", "paper", "scissors"][computerChoice];
    alert("The computer chose " + computerText);

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
}

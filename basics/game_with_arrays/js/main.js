// Rock paper scisors game refactored to use arryas

let playGame = confirm("Do you want to play a game of Rock, Paper, Scissors?");

if (playGame) {
    // play
    while (playGame) {
        const playerChoice = prompt("Please choose rock, paper or scissors");
        const choices = ["rock", "paper", "scissors"];

        if (playerChoice == null) {
            alert("Maybe next time");
            break;
        }

        if (!choices.includes(playerChoice)) {
            let responce = confirm("Invalid choice. Please try again.");

            if (responce == false) {
                alert("Maybe next time");
                break;
            }

            continue;
        }

        const computerChoice =
            choices[Math.floor(Math.random() * choices.length)];

        alert(`Player: ${playerChoice}`);
        alert(`Computer: ${computerChoice}`);

        if (playerChoice === computerChoice) {
            alert("It's a tie!");
        } else if (
            (playerChoice === "rock" && computerChoice === "scissors") ||
            (playerChoice === "paper" && computerChoice === "rock") ||
            (playerChoice === "scissors" && computerChoice === "paper")
        ) {
            alert("Player wins!");
        } else {
            alert("Computer wins!");
        }

        playGame = confirm("Do you want to play again?");
    }
} else {
    alert("Maybe next time");
}

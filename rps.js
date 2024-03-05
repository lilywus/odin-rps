function getComputerChoice() {
    let randNum = Math.floor(Math.random() * 3) + 1;
    let choice = (randNum == 1) ? "Rock" :
        (randNum == 2) ? "Paper" :
        "Scissors";

    return choice;
}

function playRound(playerSelection, computerSelection) {
    playerCap = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
    computerCap = computerSelection[0].toUpperCase() + computerSelection.slice(1).toLowerCase();

    let playerNum = (playerCap == "Rock") ? 1 :
        (playerCap == "Paper") ? 2 :
        3;

    let computerNum = (computerCap == "Rock") ? 1 :
        (computerCap == "Paper") ? 2 :
    3;

    let message = (playerNum == computerNum) ? "It's a tie! Both played " + computerCap :
            (playerNum == 1 && computerNum == 2) || (playerNum == 2 && computerNum == 3) ||
                (playerNum == 3 && computerNum == 1) ? "You lose! " + computerCap + " beats " + playerCap :
            "You win! " + playerCap + " beats " + computerCap;

    return message;
}

//const playerSelection = "scissors"
//const computerSelection = getComputerChoice();
//console.log(playRound(playerSelection, computerSelection))

function playGame() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Please type: 'Rock', 'Paper', or 'Scissors':");
        let computerSelection = getComputerChoice()
        let whoWon = playRound(playerSelection, computerSelection);

        if (whoWon[4] == "l") {
            computerScore++;
        } else if (whoWon[4] == "w") {
            playerScore++;
        }

        //console.log(whoWon + "\n\tYou: " + playerScore + "\t Computer: " + computerScore)
    }
    
    let message = (playerScore == computerScore) ? "It's a tie!" :
        (playerScore > computerScore) ? "You win " + playerScore + " to " + computerScore :
        "You lose " + playerScore + " to  " + computerScore;

    return message;
}

console.log(playGame());
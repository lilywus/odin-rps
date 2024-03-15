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

const buttons = document.querySelectorAll("button");
const resultsDiv = document.querySelector("#results");
let numRounds = 0;
let playerScore = 0;
let computerScore = 0;

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function (e) {
        let playerChoice = this.id[0].toUpperCase() + this.id.slice(1);
        let result = playRound(playerChoice, getComputerChoice());
        
        numRounds++;
        if (result[4] == "l") computerScore++;
        if (result[4] == "w") playerScore++;
        
        if (numRounds % 5 == 0) {
            let message = (playerScore == computerScore) ? "It's a tie of " + playerScore + "!":
                (playerScore > computerScore) ? "You win " + playerScore + " to " + computerScore :
                "You lose " + playerScore + " to  " + computerScore;

            let displayMessage = numRounds + " rounds played! " + message;
            let messageP = document.createElement("p");
            messageP.textContent = displayMessage;
            resultsDiv.prepend(messageP);
        }
    });
}
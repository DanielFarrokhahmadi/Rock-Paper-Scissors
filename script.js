const rps = ["rock", "paper", "scissors"]

function GetPlayerChoice() {
    return prompt("whats your choice between rock, paper & scissors?");
}

function sanitizePlayerChoice() {
    playerSelection = GetPlayerChoice().toLowerCase();
    if (rps.includes(playerSelection) === true) {
        return playerSelection;
    }
    else {
        alert("invalid Input!");
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getComputerChoice() {
    return rps[getRandomInt(0, 3)];
}

function playRound() {
    let computerSelection = getComputerChoice();
    let playerSelectionSanitized = sanitizePlayerChoice();
    if (playerSelectionSanitized === "rock" && computerSelection === "rock" || playerSelectionSanitized === "paper" && computerSelection === "paper" || playerSelectionSanitized === "scissors" && computerSelection === "scissors") {
        return "It's a draw!";
    }

    else if (playerSelectionSanitized === "rock" && computerSelection === "paper") {
        return "You lose! Paper covers rock";
    }

    else if (playerSelectionSanitized === "rock" && computerSelection === "scissors") {
        return "You win! Rock crushes paper";
    }

    else if (playerSelectionSanitized === "paper" && computerSelection === "rock") {
        return "You win! Paper covers rock";
    }

    else if (playerSelectionSanitized === "paper" && computerSelection === "scissors") {
        return "You lose! Scissors cut paper";
    }

    else if (playerSelectionSanitized === "scissors" && computerSelection === "rock") {
        return "You lose! Rock crushes paper";
    }

    else {
        return "You win! Scissors cut paper";
    }

}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    for (i = 0; i < 5; i++){
        roundResult = playRound()
        if (roundResult.includes("win") === true) {
            playerScore += 1;
        }

        else if (roundResult.includes("lose") === true) {
            computerScore += 1;
        }

        else {
            continue;
        }
    }


    console.log(`Your score = ${playerScore}`);
    console.log(`Computer's score = ${computerScore}`);
    
    if (playerScore > computerScore) {
        console.log("You win!");
    }

    else {
        console.log("You lose!");
    }
}

playGame()
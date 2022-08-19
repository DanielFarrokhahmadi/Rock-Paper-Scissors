const div = document.querySelector('.results-container');
const rps = ["rock", "paper", "scissors"]
const rocks = document.querySelectorAll('.player > .rock');
const papers = document.querySelectorAll('.player > .paper');
const scissors = document.querySelectorAll('.player > .scissors');

rocks.forEach(rock => rock.addEventListener('click', function() {
    playRound("rock");
}))
papers.forEach(paper => paper.addEventListener('click', function() {
    playRound("paper");
}))
scissors.forEach(scissors => scissors.addEventListener('click', function() {
    playRound("scissors");
}))

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getComputerChoice() {
    return rps[getRandomInt(0, 3)];
}

function playRound(playerSelection) {
    let computerSelection = getComputerChoice();

    if (playerSelection === "rock" && computerSelection === "rock" || playerSelection === "paper" && computerSelection === "paper" || playerSelection === "scissors" && computerSelection === "scissors") {
        div.textContent = "It's a draw!";
    }

    else if (playerSelection === "rock" && computerSelection === "paper") {
        div.textContent = "You lose! Paper covers rock";
    }

    else if (playerSelection === "rock" && computerSelection === "scissors") {
        div.textContent = "You win! Rock crushes paper";
    }

    else if (playerSelection === "paper" && computerSelection === "rock") {
        div.textContent = "You win! Paper covers rock";
    }

    else if (playerSelection === "paper" && computerSelection === "scissors") {
        div.textContent = "You lose! Scissors cut paper";
    }

    else if (playerSelection === "scissors" && computerSelection === "rock") {
        div.textContent = "You lose! Rock crushes scissors";
    }

    else if (playerSelection === "scissors" && computerSelection === "paper") {
        div.textContent = "You win! Scissors cut paper";
    }

}
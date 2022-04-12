

function computerPlay() {
    const CHOICES = ["rock", "paper", "scissors"];
    return CHOICES[Math.floor(Math.random() * CHOICES.length)];
};

function play(playerSelection, computerSelection) {

    switch (playerSelection) {
        case 'rock':
            if (computerSelection === "rock") {
                return `Tie! You both chose ${playerSelection}!`
            } else if (computerSelection === "paper") {
                return `You Lose! ${computerSelection} beats ${playerSelection}!`
            } else {
                return `You Win! ${playerSelection} beats ${computerSelection}!`
            };

        case 'paper':
            if (computerSelection === "paper") {
                return `Tie! You both chose ${playerSelection}!`
            } else if (computerSelection === "scissors") {
                return `You Lose! ${computerSelection} beats ${playerSelection}!`
            } else {
                return `You Win! ${playerSelection} beats ${computerSelection}!`
            }

        case 'scissors':
            if (computerSelection === "scissors") {
                return `Tie! You both chose ${playerSelection}!`
            } else if (computerSelection === "rock") {
                return `You Lose! ${computerSelection} beats ${playerSelection}!`
            } else {
                return `You Win! ${playerSelection} beats ${computerSelection}!`
            }

    }
};

function game() {

    for (let i = 0; i < 5; i++) {
        computerSelection = computerPlay();
        playerSelection = prompt("Rock, Paper, or Scissors?")

        result = play(playerSelection.toLowerCase(), computerSelection);

        console.log(result);
    }

};

game();

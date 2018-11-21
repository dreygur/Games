let userScore = 0;
let computerScore = 0;
const userScoreSpan = document.getElementById("user-score");
const computerScoreSpan = document.getElementById("computer-score");
const scoreBoardDiv = document.querySelector(".score-board");
const resultDiv = document.querySelector(".result > p");
const rockDiv = document.getElementById("r");
const paperDiv = document.getElementById("p");
const scissorsDiv = document.getElementById("s");


function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === 'r') return "Rock";
    if (letter === 'p') return "Paper";
    return "Scissors";
}

function win(userChoice, computerChoice) {
    const userChoiceDiv = document.getElementById(userChoice);
    userScore++;
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
    resultDiv.innerHTML = convertToWord(userChoice) + " beats " + convertToWord(computerChoice) + ". You Won!";
    userChoiceDiv.classList.add('green-glow');
    setTimeout(() => { userChoiceDiv.classList.remove('green-glow') }, 300);
}

function lose(userChoice, computerChoice) {
    const userChoiceDiv = document.getElementById(userChoice);
    computerScore++;
    computerScoreSpan.innerHTML = computerScore;
    userScoreSpan.innerHTML = userScore;
    resultDiv.innerHTML = convertToWord(computerChoice) + " beats " + convertToWord(userChoice) + ". You Lost!";
    userChoiceDiv.classList.add('red-glow');
    setTimeout(() => { userChoiceDiv.classList.remove('red-glow') }, 300);
}

function draw(userChoice, computerChoice) {
    const userChoiceDiv = document.getElementById(userChoice);
    resultDiv.innerHTML = convertToWord(userChoice) + " equals " + convertToWord(computerChoice) + ". It's a Draw!";
    userChoiceDiv.classList.add('gray-glow');
    setTimeout(() => { userChoiceDiv.classList.remove('gray-glow') }, 300);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rockDiv.addEventListener('click', () => {game('r')});
    paperDiv.addEventListener('click', () => {game('p')});
    scissorsDiv.addEventListener('click', () => {game('s')});
}

main();

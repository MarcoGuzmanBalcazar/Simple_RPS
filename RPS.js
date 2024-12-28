
let humanScore = 0
let computerScore = 0

function getComputerChoice(){
    randomNum = Math.floor(Math.random() * 3)

    if (randomNum === 0){
        return "Rock"
    }
    else if (randomNum === 1){
        return "Paper"
    }
    else{
        return "Scissors"
    }
}

function getHumanChoice(){
    let choice = prompt("Rock, Paper, or Scissors");
    choice = choice.toLowerCase();
    if ((choice === "rock") || (choice === "paper") || (choice === "scissors")){
        return choice.charAt(0).toUpperCase() + choice.slice(1);
    }
    else{
        return "Try Again"
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice){
        return "Tie"
    }
    else if (((humanChoice === "Paper") && (computerChoice === "Rock")) || ((humanChoice === "Rock") && (computerChoice === "Scissors")) 
        || ((humanChoice === "Scissors") && (computerChoice === "Paper"))){
        humanScore = humanScore + 1
        return "Human Wins"
    }
    else{
        computerScore = computerScore + 1
        return "Computer Wins"
    }
  }

function playgame(humanPick){

    const humanSelection = humanPick;
    const computerSelection = getComputerChoice();

    playerDecision.textContent = "Human Picked: " + humanPick
    computerDecision.textContent = "Computer Picked: " + computerSelection

    playRound(humanSelection, computerSelection);

    playerCount.textContent = "Human Score: " + humanScore
    computerCount.textContent = "Computer Score: " + computerScore

    if (computerScore == 5 || humanScore === 5){
        if (humanScore > computerScore){
            winner.textContent = "Human Wins!"
        }
        else if (computerScore > humanScore){
            winner.textContent = "Computer Wins!"
        }
        else{
            winner.textContent = "Its a Tie!"
        }
    }
}

const scissorsButton = document.querySelector("#scissors");
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");

scissorsButton.addEventListener("click", () => {
    playgame("Scissors")
});

rockButton.addEventListener("click", () => {
    playgame("Rock")
});

paperButton.addEventListener("click", () => {
    playgame("Paper")
});

const playerDecision = document.querySelector("#playerDecision");
const computerDecision= document.querySelector("#computerDecision");

const playerCount = document.querySelector("#playerCount");
const computerCount = document.querySelector("#computerCount");

const winner = document.querySelector("#winner")




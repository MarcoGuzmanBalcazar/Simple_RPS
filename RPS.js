
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
    console.log(humanChoice)
    console.log(computerChoice)
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
  
function playgame(){
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    console.log(humanScore)
    console.log(computerScore)
    if (humanScore > computerScore){
        return "HUMAN WINS"
    }
    else if (computerScore > humanScore){
        return "COMPUTER WINS"
    }
    else{
        return "TIE"
    }
}

console.log(playgame())



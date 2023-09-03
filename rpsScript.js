function getComputerChoice() { // picks choice for computer
    const choiceRPS = ['rock', 'paper', 'scissors']
    let randomChoice = choiceRPS[Math.floor(Math.random() * choiceRPS.length)] 
    return randomChoice;
}
// Round Conditions
function playRound(randomChoice,playerSelection) {
    // Win conditions
  console.log("computer: " + randomChoice);
  console.log("player:" + playerSelection)
    if (computerChoice === playerSelection){
         console.log("It's a draw!")                
    }
    else if (playerSelection == "rock" && computerChoice == "scissors"){
        playerScoreDisplay.innerHTML = ++(playerScore)
         console.log("Rock beats scissors, you win!")
    }
    else if (playerSelection == "paper" && computerChoice == "rock"){
        playerScoreDisplay.innerHTML = ++(playerScore)
         console.log("Paper beats rock, nice one!")
    }
    else if (playerSelection == "scissors" && computerChoice == "paper"){
        playerScoreDisplay.innerHTML = ++(playerScore)
         console.log("Scissors beats paper, good job!")
    }
    //Loss conditions
    else if (playerSelection == "scissors" && computerChoice == "rock"){
        computerScoreDisplay.innerHTML = ++(computerScore)
         console.log("Rock beats scissors, you lose!")
    }
    else if (playerSelection == "rock" && computerChoice == "paper"){
        computerScoreDisplay.innerHTML = ++(computerScore)
         console.log("Paper eats rock, you lose!")
    }
    else if (playerSelection == "paper" && computerChoice =="scissors"){
        computerScoreDisplay.innerHTML = ++(computerScore)
         console.log("Scissors cuts paper, you lose!")
    }
    else{
         console.log("Error! Invalid choice.")
    }
}
function game() {
    computerChoice = getComputerChoice();
    playRound(computerChoice, playerSelection);
    totalScore = `The Score is: Player = ${playerScore}, Computer = ${computerScore}`
    const results = document.querySelector(".results")
    if (playerScore > computerScore){
        results.innerHTML = "Player wins!"
    } else if (computerScore > playerScore){
        results.innerHTML = "Computer wins!"
    }else{
        results.innerHTML = "Tie Game!"
    }
 }

let playerScore = 0;
const playerScoreDisplay = document.querySelector(".player-score");
playerScoreDisplay.innerHTML = `${playerScore}`;
let computerScore = 0;
const computerScoreDisplay = document.querySelector(".computer-score");
computerScoreDisplay.innerHTML = `${computerScore}`
let playerSelection; //all one line
let computerChoice;
const rock = document.querySelector(".rock");
rock.addEventListener("click",() => {
    playerSelection = "rock";
    return game();
});
const paper = document.querySelector(".paper");
paper.addEventListener("click",() => {
    playerSelection = "paper"
    return game()
});
const scissors = document.querySelector(".scissors");
scissors.addEventListener("click", () => {
    playerSelection = "scissors"
    return game();
})
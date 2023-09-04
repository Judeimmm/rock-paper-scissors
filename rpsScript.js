function getComputerChoice() { // picks choice for computer
    const choiceRPS = ['rock', 'paper', 'scissors']
    let randomChoice = choiceRPS[Math.floor(Math.random() * choiceRPS.length)] 
    return randomChoice;
}
// Round Conditions
function playRound(randomChoice,playerSelection) {
    // Win conditions
  computerHand.innerHTML = "computer: " + randomChoice;
  playerHand.innerHTML = "player: " + playerSelection;
    if (computerChoice === playerSelection){
        roundResults.innerHTML = "It's a draw!";
    }
    else if (playerSelection == "rock" && computerChoice == "scissors"){
        playerScoreDisplay.innerHTML = ++(playerScore)
        roundResults.innerHTML ="Rock beats scissors, you win!";
    }
    else if (playerSelection == "paper" && computerChoice == "rock"){
        playerScoreDisplay.innerHTML = ++(playerScore)
         roundResults.innerHTML = "Paper beats rock, nice one!";
    }
    else if (playerSelection == "scissors" && computerChoice == "paper"){
        playerScoreDisplay.innerHTML = ++(playerScore)
         roundResults.innerHTML ="Scissors beats paper, good job!";
    }
    //Loss conditions
    else if (playerSelection == "scissors" && computerChoice == "rock"){
        computerScoreDisplay.innerHTML = ++(computerScore)
        roundResults.innerHTML = "Rock beats scissors, you lose!";
    }
    else if (playerSelection == "rock" && computerChoice == "paper"){
        computerScoreDisplay.innerHTML = ++(computerScore)
        roundResults.innerHTML = "Paper eats rock, you lose!";
    }
    else if (playerSelection == "paper" && computerChoice =="scissors"){
        computerScoreDisplay.innerHTML = ++(computerScore)
        roundResults.innerHTML = "Scissors cuts paper, you lose!";
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
    if (playerScore == 5){
        results.innerHTML = "Player wins!";
        playerScoreDisplay.innerHTML = 0, computerScoreDisplay.innerHTML = 0;
        return playerScore = 0, computerScore = 0;
    } else if (computerScore == 5){
        results.innerHTML = "Computer wins!";
        playerScoreDisplay.innerHTML = 0, computerScoreDisplay.innerHTML = 0;
        return playerScore = 0, computerScore = 0;
    }else{
        results.innerHTML = "";
    }
 }

let playerScore = 0;
const playerScoreDisplay = document.querySelector(".player-score");
playerScoreDisplay.innerHTML = `${playerScore}`;
let computerScore = 0;
const computerScoreDisplay = document.querySelector(".computer-score");
computerScoreDisplay.innerHTML = `${computerScore}`;

let playerSelection; //all one line
let computerChoice;

const playerHand = document.querySelector(".player-hand");
const computerHand = document.querySelector(".computer-hand")

const roundResults = document.querySelector(".round-results")

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
});
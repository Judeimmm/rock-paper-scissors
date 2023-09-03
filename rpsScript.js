function getComputerChoice() {
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
        playerScore = ++(playerScore)
         console.log("Rock beats scissors, you win!")
    }
    else if (playerSelection == "paper" && computerChoice == "rock"){
        playerScore = ++(playerScore)
         console.log("Paper beats rock, nice one!")
    }
    else if (playerSelection == "scissors" && computerChoice == "paper"){
        playerScore = ++(playerScore)
         console.log("Scissors beats paper, good job!")
    }
    //Loss conditions
    else if (playerSelection == "scissors" && computerChoice == "rock"){
        computerScore = ++(computerScore)
         console.log("Rock beats scissors, you lose!")
    }
    else if (playerSelection == "rock" && computerChoice == "paper"){
        computerScore = ++(computerScore)
         console.log("Paper eats rock, you lose!")
    }
    else if (playerSelection == "paper" && computerChoice =="scissors"){
        computerScore = ++(computerScore)
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
    console.log(totalScore)
    if (playerScore > computerScore){
        console.log("Player wins!")
    } else if (computerScore > playerScore){
        console.log("Computer wins!")
    }else{
        console.log("Tie Game!")
    }
 }
let playerScore = 0;
let computerScore = 0;
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
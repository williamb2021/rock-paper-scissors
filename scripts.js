let computerScore = 0;
let playerScore = 0;
let round = 0;
const playerChoice = document.querySelector(".player-choice");
const computerChoice = document.querySelector(".computer-choice");
const roundResult = document.querySelector(".round-result");
const playerScoreText = document.querySelector(".player-score");
const computerScoreText = document.querySelector(".computer-score");
const gameResult = document.querySelector(".game-result");
const gameContainer = document.querySelector(".game");
const resetButton = document.createElement('button');
resetButton.textContent = "Start again?";

resetButton.addEventListener('click',(e) => {
    computerScore = 0;
    computerScoreText.textContent = `Computer score:${computerScore}`;
    playerScore = 0;
    playerScoreText.textContent = `Player score:${playerScore}`;
    gameContainer.removeChild(resetButton);
    gameResult.textContent = "";
});

const choiceButtons = document.querySelectorAll(".choice");
choiceButtons.forEach((button) => {  
        button.addEventListener('click',() => {
            playRound(button.id, computerSelection());
        });
});

//randomly generates a computer selection of rock paper scissors
function computerSelection(){
    let random = Math.random();
    let choice = "";
    if (random < 0.33){
        choice = "rock";
    }
    else if (random >= 0.33 && random < 0.66){
        choice = "paper";
    }
    else {
        choice = "scissors";
    }
   return choice; 
}

//function to calculate the winner of each round
//and display the results on the DOM
function playRound(playerSelection, computerSelection){
    let roundWinner; //if player wins: 0, tie: 1, pc: 2
    
    playerChoice.textContent = `Player chooses: ${playerSelection.toUpperCase()}`;
    computerChoice.textContent = `Computer chooses: ${computerSelection.toUpperCase()}`;

    if ((playerSelection === "rock" && computerSelection === "scissors")
      || (playerSelection === "paper" && computerSelection === "rock")
      || (playerSelection === "scissors" && computerSelection == "paper")){
        roundResult.textContent = "Player wins!";
        game(0);
    }
    else if (playerSelection===computerSelection){
        roundResult.textContent = "It's a tie!";
        game(1);
    }
    else{
        roundResult.textContent = "Computer Wins!";
        game(2);
    }
}


//function to calculate the overall game score and display it on the DOM
//called by the playRound function
function game (roundWinner){
    if (computerScore < 5 && playerScore < 5){
        if (roundWinner === 0){
            playerScore++;
            playerScoreText.textContent = `Player score:${playerScore}`;
        }
        else if (roundWinner === 2){
            computerScore++;
            computerScoreText.textContent = `Computer score:${computerScore}`;
        }    
    }
    else if (computerScore === 5 || playerScore === 5){
        if (computerScore === 5){
            gameResult.textContent = "Game over! Computer wins!";
            gameContainer.appendChild(resetButton);
        }
        else if (playerScore === 5) {
            gameResult.textContent = "Game over! Player wins!";
            gameContainer.appendChild(resetButton);
        }
    }

}
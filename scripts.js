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

function playerSelection(){
    return prompt("Rock, paper, or scissors?","Rock").toLowerCase();
}


function playRound(playerSelection, computerSelection){
    let result = "";
    console.log(`Player chooses: ${playerSelection}, Computer chooses: ${computerSelection}`);
    if ((playerSelection === "rock" && computerSelection === "scissors")
        || (playerSelection === "paper" && computerSelection === "rock")
        || (playerSelection === "scissors" && computerSelection == "paper")){
        result = "player";
    }
    else if (playerSelection===computerSelection){
        result = "tie";
    }
    else{
        result = "computer";
    }
    return result;
}

function game(){
    let computerScore = 0;
    let playerScore = 0;
    for ( let i=0 ; i<5 ; i++ ) {
        let game = playRound(playerSelection(), computerSelection());
        if (game === "player"){
            playerScore +=1;
        }
        else if (game === "computer"){
            computerScore +=1;
        }
        console.log(`Computer score: ${computerScore} \nPlayer score: ${playerScore}`)        
    }
    if (playerScore > computerScore){
        console.log("Player wins!");
    }
    else if (computerScore > playerScore){
        console.log("Computer wins!");
    }
    else {
        console.log("It's a tie! That's no fun, so try again :)");
    }
    
}

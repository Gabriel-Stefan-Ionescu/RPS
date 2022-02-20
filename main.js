// Array of choices

const selection = ["rock", "paper", "scissors"];

let playerSelection
let computerSelection

function computerPlay() {
    computerSelection = selection[Math.floor(Math.random()*selection.length)];
}

function playerPlay() {
    playerSelection = prompt();
}


function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    roundWinner = "Tie";
  } else if (playerSelection !== computerSelection) {
    if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "scissors" && computerSelection === "paper") ||
      (playerSelection === "paper" && computerSelection === "rock")
    ) {
      roundWinner = "You Win";
    } else if (
      (playerSelection === "rock" && computerSelection === "paper") ||
      (playerSelection === "paper" && computerSelection === "scissors") ||
      (playerSelection === "scissors" && computerSelection === "rock")
    ) {
      roundWinner = "You Lose";
    }
  }
  return roundWinner;
}


function initGame () {
    playerPlay();
    computerPlay();
    playRound(playerSelection, computerSelection);
    return roundWinner;
}

















/*


function playerPlay() {
    const input = prompt(`Please input "Rock", "Paper" or "Scissors"`);
    
    return playerChoice

}

function playerInput() {
    let playerSel = i
    let
}

*/
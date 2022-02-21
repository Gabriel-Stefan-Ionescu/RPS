// Array of choices

const selection = ["rock", "paper", "scissors"];


function computerPlay() {
    computerSelection = selection[Math.floor(Math.random()*selection.length)];
}

function playerPlay() {
  playerSelection = prompt(`Please choose "Rock", "Paper", "Scissors"`);
  playerSelection = playerSelection.toLowerCase();
  while (playerSelection  == null){
    playerSelection = prompt(`Please choose "Rock", "Paper", "Scissors"`);
    playerSelection = playerSelection.toLowerCase();
  } function validateData(playerSelection) {
    if (selection.includes(playerSelection)) {
      return true;
    }
    return false;
  } while (validateData(playerSelection) == false) {
    playerSelection = prompt(`Please choose "Rock", "Paper", "Scissors"`);
    playerSelection = playerSelection.toLowerCase();
  }
  playerSelection = playerSelection.toLowerCase();
  console.log(playerSelection)
}


function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    roundWinner = `Tie! ${playerSelection} and ${computerSelection} are the same.`;
  } else if (playerSelection !== computerSelection) {
    if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "scissors" && computerSelection === "paper") ||
      (playerSelection === "paper" && computerSelection === "rock")
    ) {
      roundWinner = `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if (
      (playerSelection === "rock" && computerSelection === "paper") ||
      (playerSelection === "paper" && computerSelection === "scissors") ||
      (playerSelection === "scissors" && computerSelection === "rock")
    ) {
      roundWinner = `You Lose! ${computerSelection} beats ${playerSelection}`;
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
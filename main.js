// Array of choices

const selection = ["rock", "paper", "scissors"];
let computerScore = 0;// need a better way to reset score
let playerScore = 0;// need a better way to reset score

function computerPlay() {
    computerSelection = selection[Math.floor(Math.random()*selection.length)];
}

function playerPlay() {
  playerSelection = prompt(`Please choose "Rock", "Paper", "Scissors"`);
  playerSelection = playerSelection.toLowerCase();
  while (playerSelection  == null){
    playerSelection = prompt(`Please choose "Rock", "Paper", "Scissors"`);
  } function validateData(playerSelection) {
    if (selection.includes(playerSelection)) {
      return true;
    }
    return false;
  } while (validateData(playerSelection) == false) {
    playerSelection = prompt(`Please choose "Rock", "Paper", "Scissors"`);
    playerSelection = playerSelection.toLowerCase();
  }
  playerSelection = playerSelection.toLowerCase();// too many .toLowerCase need to make it simpler
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
      playerScore++;
    } else if (
      (playerSelection === "rock" && computerSelection === "paper") ||
      (playerSelection === "paper" && computerSelection === "scissors") ||
      (playerSelection === "scissors" && computerSelection === "rock")
    ) {
      roundWinner = `You Lose! ${computerSelection} beats ${playerSelection}`;
      computerScore++;
    }
  }
  return roundWinner;
}

function mainGame() {
  for (let i = 0; i < 5; i++) {
    playerPlay();
    computerPlay();
    playRound(playerSelection, computerSelection);
    console.log(roundWinner);
  } if (playerScore > computerScore) {
    console.log("Player Wins");// need a better way to reset score
    playerScore = 0;
    computerScore = 0;
  } else {
  console.log("Computer Wins");
  playerScore = 0;
  computerScore = 0;
  }
}

mainGame()


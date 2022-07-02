function computerPlay() {
  const random = Math.floor(Math.random() * 3);
  switch (random) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

let playerChoice = prompt("Rock, Paper or Scissors?").toLowerCase();
let playerScore = 0;
let botScore = 0;

function playRound(botChoice, playerChoice) {
  if (
    (playerChoice === "rock" && botChoice === "scissors") ||
    (playerChoice === "paper" && botChoice === "rock") ||
    (playerChoice === "scissors" && botChoice === "paper")
  ) {
    playerScore++;
    return `You win! ${playerChoice} beats ${botChoice}`;
  } else if (playerChoice === botChoice) {
    return "It's a draw";
  } else {
    botScore++;
    return `You lose! ${botChoice} beats ${playerChoice}`;
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    console.log(playRound(computerPlay(), playerChoice));
  }
  if (playerScore > botScore) {
    console.log(`Player Wins!!! ${playerScore} - ${botScore}`);
  } else {
    console.log(`Bot Wins!!! ${botScore} - ${playerScore}`);
  }
  resetScore();
}

function resetScore() {
  playerScore = 0;
  botScore = 0;
}

//main global variables and DOM nodes
let playerChoice;
let playerScore = 0;
let botScore = 0;
const result = document.querySelector("#roundTally");
const playerDisplay = document.querySelector("#playerScore");
const botDisplay = document.querySelector("#botScore");
const playerButton = document.querySelectorAll(".playerButton");

//each click triggers a round
playerButton.forEach((button) =>
  button.addEventListener("click", (e) => {
    playerChoice = e.currentTarget.id;
    playRound(botPlay(), playerChoice)
  })
);

//basic game logic
function botPlay() {
  const random = Math.floor(Math.random() * 3);
  switch (random) {
    case 0:
      return "ninja";
    case 1:
      return "hunter";
    case 2:
      return "bear";
  }
}

function playRound(botChoice, playerChoice) {
  if (
    (playerChoice === "ninja" && botChoice === "hunter") ||
    (playerChoice === "hunter" && botChoice === "bear") ||
    (playerChoice === "bear" && botChoice === "ninja")
  ) {
    playerScore++;
    result.innerText = `You win! ${playerChoice} beats ${botChoice}`;
  } else if (playerChoice === botChoice) {
    result.innerText = "It's a draw";
  } else {
    botScore++;
    result.innerText = `You lose! ${botChoice} beats ${playerChoice}`;
  }
  updateScore();
  gameOverMan();
}


//update & reset DOM based on scores

function updateScore() {
  playerDisplay.innerText = `You: ${playerScore}`;
  botDisplay.innerText = `Bot: ${botScore}`;
}

function gameOverMan() {
  if (playerScore >= 5) {
    result.innerText = `You win the game!!! ${playerScore}:${botScore}. Chose again to start a new game`;
    resetScore();
  } else if (botScore >= 5) {
    result.innerText = `You lose the game!!! ${botScore}:${playerScore}. Chose again to start a new game`;
    resetScore();
  }
}

function resetScore() {
  playerScore = 0;
  botScore = 0;
}

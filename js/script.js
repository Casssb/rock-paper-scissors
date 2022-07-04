//main global variables and DOM nodes
let playerChoice;
let playerScore = 0;
let botScore = 0;
const result = document.querySelector("#roundTally");
const playerDisplay = document.querySelector("#playerScore");
const botDisplay = document.querySelector("#botScore");
const botImagecontainer = document.querySelector(".botImage");
const botImage = document.createElement("img");
const playerButton = document.querySelectorAll(".playerButton");

//each click triggers a round
playerButton.forEach((button) =>
  button.addEventListener("click", (e) => {
    playerChoice = e.currentTarget.id;
    playRound(botPlay(), playerChoice);
  })
);

//basic game logic

//bot selection appends image of bot choice to the DOM
function botPlay() {
  const random = Math.floor(Math.random() * 3);
  switch (random) {
    case 0:
      botImage.src = "img/ninja.png";
      botImagecontainer.appendChild(botImage);
      return "ninja";
    case 1:
      botImage.src = "img/hunter.png";
      botImagecontainer.appendChild(botImage);
      return "hunter";
    case 2:
      botImage.src = "img/bear.png";
      botImagecontainer.appendChild(botImage);
      return "bear";
  }
}

function playRound(botChoice, playerChoice) {
    result.style.fontSize = "medium";
    result.style.color = "black";
    botImagecontainer.style.backgroundColor = 'white';
    botImagecontainer.style.border ='0.2rem solid black'
  if (
    (playerChoice === "ninja" && botChoice === "hunter") ||
    (playerChoice === "hunter" && botChoice === "bear") ||
    (playerChoice === "bear" && botChoice === "ninja")
  ) {
    playerScore++;
    botImagecontainer.style.backgroundColor = 'mediumseagreen';
    result.innerText = `You win! ${playerChoice} beats ${botChoice}`;
  } else if (playerChoice === botChoice) {
    botImagecontainer.style.backgroundColor = 'goldenrod';
    result.innerText = "It's a draw";
  } else {
    botScore++;
    botImagecontainer.style.backgroundColor = 'crimson';
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
    result.style.fontSize = "large";
    result.style.color = "seagreen";
    result.innerText = `You win the game!!! ${playerScore}:${botScore}. Chose again to start a new game`;
    resetScore();
  } else if (botScore >= 5) {
    result.style.fontSize = "large";
    result.style.color = "crimson";
    result.innerText = `Oops you lost! ${botScore}:${playerScore}. Chose again to start a new game`;
    resetScore();
  }
}

function resetScore() {
  playerScore = 0;
  botScore = 0;
}

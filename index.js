const player = document.getElementById("player");
const player2 = document.getElementById("player2");
const cactus = document.getElementById("cactus");
const cactus2 = document.getElementById("cactus2");
const cactus3 = document.getElementById("cactus3");
const background = document.getElementById("background");
const buttonPlayStop = document.getElementById("buttonPlayStop");
const board = document.getElementById("board");
const restarButton = document.getElementById("restarGame");

let score = 0;
let intervalId;
board.addEventListener("click", function () {
  playerJump();
});

function playerJump() {
  player.classList.add("playerJump");
}

player.addEventListener("animationend", function () {
  removeJump();
});

function removeJump() {
  player.classList.remove("playerJump");
}

function interval() {
  intervalId = setInterval(() => {
    score++;
    document.getElementById("score").innerText = score;
  }, 1000);
}

function resumeScore() {
  interval();
}

function stopScore() {
  clearInterval(intervalId);
}

function resumeAnimation() {
  cactus.style.animationPlayState = "running";
  player.style.animationPlayState = "running";
  player.style.visibility = "visible";
  player2.style.visibility = "hidden";
  background.style.animationPlayState = "running";

  resumeScore();
}

function resumeAnimatioRestar() {
  cactus.style.animationPlayState = "running";
  player.style.animationPlayState = "running";
  player.style.visibility = "visible";
  player2.style.visibility = "hidden";
  background.style.animationPlayState = "running";
  buttonPlayStop.classList.remove("play");
}

function pauseAnimation() {
  cactus.style.animationPlayState = "paused";
  player.style.animationPlayState = "paused";
  player.style.visibility = "hidden";
  player2.style.visibility = "visible";
  background.style.animationPlayState = "paused";
}

function pausarGame() {
  pauseAnimation();
  stopScore();
}

function continuarGame() {
  resumeAnimation();
}

buttonPlayStop.addEventListener("click", () => {
  if (buttonPlayStop.classList.contains("play")) {
    continuarGame();
  } else {
    pausarGame();
  }
  buttonPlayStop.classList.toggle("play");
});

restarButton.addEventListener("click", restarGame);

function restarGame() {
  resetScore();
  removeJump();
  // cactus.classList.remove("cactusMovement");
  // void cactus.offsetWidth;
  // cactus.classList.add("cactusMovement");
  resumeAnimatioRestar();
}

function resetScore() {
  score = 0;
  document.getElementById("score").innerText = score;
}

document.addEventListener("keyup", (event) => {
  const keyPressed = event.key;
  if (keyPressed == "ArrowUp") {
    playerJump();
  }
  if (keyPressed.toLocaleLowerCase() == "w") {
    playerJump();
  }
  if (keyPressed == "ArrowDown") {
    removeJump();
  }
});

interval();

const player = document.getElementById("player");
const player2 = document.getElementById("player2");
const cactus = document.getElementById("cactus");
const background = document.getElementById("background");
const buttonPlayStop = document.getElementById("buttonPlayStop");
const board = document.getElementById("board");
const restarButton = document.getElementById("restarGame");
const img = document.getElementById("img");
const img2 = document.getElementById("img2");
let encolision = false;
let score = 0;
let intervalId;
let random;
let caso = 0;
board.addEventListener("click", function () {
  playerJump();
});

function contador() {
  caso++;
  if (caso > 2) {
    caso = 0;
  }
}

function stopContador() {
  caso--;
}

function changeDisplayImg() {
  contador();
  random = Math.floor(Math.random() * 2 * caso);
  if (random === 0) {
    img.style.display = "none";
    img2.style.display = "none";
  } else if (random === 1) {
    img.style.display = "flex";
    img2.style.display = "none";
  } else if (random === 2) {
    img2.style.display = "flex";
    img.style.display = "flex";
  }
  console.log(random);
}

setInterval(changeDisplayImg, 5000);

function playerJump() {
  player.classList.add("playerJump");
}

player.addEventListener("animationend", function () {
  removeJump();
});

restarButton.addEventListener("click", restarGame);

function removeJump() {
  player.classList.remove("playerJump");
}

function interval() {
  intervalId = setInterval(() => {
    score++;
    document.getElementById("score").innerText = score;
  }, 1000);
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
  interval();
}

function resumeAnimationRestar() {
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

function restarGame() {
  resetScore();
  removeJump();
  cactus.classList.remove("cactusMovement");
  void cactus.offsetWidth;
  cactus.classList.add("cactusMovement");
  resumeAnimationRestar();
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

let canvas;
let world;
let keyboard = new Keyboard();

function start() {
  canvas = document.getElementById("canvas");
  start = document.getElementById("start");

  world = new World(canvas, keyboard);
  canvas.classList.remove("d-non");
  start.classList.add("d-non");
  buttonStart.classList.add("d-non");
  if (gameover == true) reset();
}

function reset() {
  canvas = document.getElementById("canvas");
  buttonRestart.classList.add("d-non");
  over.classList.add("d-non");
  canvas.classList.remove("d-non");
  world = new World(canvas, keyboard);
  

}

function gameover() {
  canvas = document.getElementById("canvas");
  buttonRestart.classList.remove("d-non");
  over.classList.remove("d-non");
  canvas.classList.add("d-non");
  // stopGame();
}

// function stopGame() {


// }


function win() {
  canvas = document.getElementById("canvas");
  button.classList.remove("d-non");
  win.classList.remove("d-non");
  canvas.classList.add("d-non");
}


function toggleFullScreen() {
  let element = document.getElementById("canvas");
  element.requestFullscreen();
}

window.addEventListener("keydown", (e) => {
  if (e.key == "ArrowRight") {
    keyboard.RIGHT = true;
  }
  if (e.key == "ArrowLeft") {
    keyboard.LEFT = true;
  }
  if (e.key == "ArrowDown") {
    keyboard.DOWN = true;
  }
  if (e.key == "ArrowUp") {
    keyboard.UP = true;
  }
  if (e.key == " ") {
    keyboard.SPACE = true;
  }
  if (e.key == "w") {
    keyboard.W = true;
  }
  if (e.key == "a") {
    keyboard.A = true;
  }
  if (e.key == "s") {
    keyboard.S = true;
  }
  if (e.key == "d") {
    keyboard.D = true;
  }
  if (e.key == "e") {
    keyboard.E = true;
  }
  if (e.key == "Control") {
    keyboard.CONTROL = true;
  }
  // console.log('keydown', e.key);
});

window.addEventListener("keyup", (e) => {
  if (e.key == "ArrowRight") {
    keyboard.RIGHT = false;
  }
  if (e.key == "ArrowLeft") {
    keyboard.LEFT = false;
  }
  if (e.key == "ArrowDown") {
    keyboard.DOWN = false;
  }
  if (e.key == "ArrowUp") {
    keyboard.UP = false;
  }
  if (e.key == " ") {
    keyboard.SPACE = false;
  }
  if (e.key == "w") {
    keyboard.W = false;
  }
  if (e.key == "a") {
    keyboard.A = false;
  }
  if (e.key == "s") {
    keyboard.S = false;
  }
  if (e.key == "d") {
    keyboard.D = false;
  }
  if (e.key == "e") {
    keyboard.E = false;
  }
  if (e.key == "Control") {
    keyboard.CONTROL = false;
  }
});

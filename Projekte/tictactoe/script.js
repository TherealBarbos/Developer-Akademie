let fields = [];
let gameOver = false;
let currentShape = "cross";

function fill(id) {
  if (!fields[id] && !gameOver) {
    if (currentShape == "cross") {
      currentShape = "circle";
      document.getElementById("pOne").classList.add("player-inaktiv");
      document.getElementById("pTwo").classList.remove("player-inaktiv");
    } else {
      currentShape = "cross";
      document.getElementById("pOne").classList.remove("player-inaktiv");
      document.getElementById("pTwo").classList.add("player-inaktiv");
    }
    fields[id] = currentShape;

    draw();
    win();
  }
}

function draw() {
  for (let i = 0; i < fields.length; i++) {
    if (fields[i] == "circle") {
      document.getElementById("circle-" + i).classList.remove("hide");
    }
    if (fields[i] == "cross") {
      document.getElementById("cross-" + i).classList.remove("hide");
    }
  }
}
function win() {
  let winner;

  if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) {
    winner = fields[0];
    document.getElementById("line-1").classList.remove("hide");
  }
  if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
    winner = fields[3];
    document.getElementById("line-0").classList.remove("hide");
  }
  if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6]) {
    winner = fields[6];
    document.getElementById("line-2").classList.remove("hide");
  }
  if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
    winner = fields[0];
    document.getElementById("line-3").classList.remove("hide");
  }
  if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
    winner = fields[1];
    document.getElementById("line-4").classList.remove("hide");
  }
  if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
    winner = fields[2];
    document.getElementById("line-5").classList.remove("hide");
  }
  if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
    winner = fields[2];
    document.getElementById("line-7").classList.remove("hide");
  }
  if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
    winner = fields[0];
    document.getElementById("line-6").classList.remove("hide");
  }
  if (winner) {
    gameOver = true;
    gameover(winner);
  }
}

function gameover(winner) {
  document.getElementById("player").innerHTML = `
  <div class="win">
    <img src="./img/circle.png" alt="" id="winImg" />
    <span class="neonText">Wins the game</span>
    </div>
  `;
  if (winner == "circle") {
    document.getElementById("winImg").src = "./img/circle.png";
  } else {
    document.getElementById("winImg").src = "./img/cross.png";
  }
}

function restart() {
  gameOver = false;
  fields = [];
  document.getElementById(
    "player"
  ).innerHTML = `<div id="pOne">Circle <img src="./img/circle.png" alt="" /></div>
  <div id="pTwo" class="player-inaktiv">
    Cross <img src="./img/cross.png" alt="" />
  </div>`;
  for (let i = 0; i < 8; i++) {
    document.getElementById("line-" + i).classList.add("hide");
  }
  for (let i = 0; i < 9; i++) {
    document.getElementById("circle-" + i).classList.add("hide");
    document.getElementById("cross-" + i).classList.add("hide");
  }
}

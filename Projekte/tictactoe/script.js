let fields = [];
let currentShape = "cross";

function fill(id) {
  if (!fields[id]) {
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
    document.getElementById('line-1').classList.remove("hide");
  }
  if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
    winner = fields[3];
    document.getElementById('line-0').classList.remove("hide");
  }
  if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6]) {
    winner = fields[6];
    document.getElementById('line-2').classList.remove("hide");
  }
  if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
    winner = fields[0];
    document.getElementById('line-3').classList.remove("hide");
  }
  if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
    winner = fields[1];
    document.getElementById('line-4').classList.remove("hide");
  }
  if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
    winner = fields[2];
    document.getElementById('line-5').classList.remove("hide");
  }
  if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
    winner = fields[2];
    document.getElementById('line-7').classList.remove("hide");
  }
  if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
    winner = fields[0];
    document.getElementById('line-6').classList.remove("hide");
  }
  if (winner) {
    console.log("Gewonnen", winner);
  }
}

// function block() {
//   document.getElementById("cross-" + i).parentNode.classList.add("block");
//   document.getElementById("circle-" + i).parentNode.classList.add("block");
// }

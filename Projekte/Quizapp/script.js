let currentQuestion = 0;
let rightQuestions = 0;

function init() {
  document.getElementById("all-questions").innerHTML = questions.length;

  showQuestion();
}

function showQuestion() {
  if (currentQuestion >= questions.length) {
    endScreen();
  } else {
    updateQuestion();
  }
  progress();
  score();
}

function updateQuestion() {
  let question = questions[currentQuestion];

  document.getElementById("curQuestion").innerHTML = currentQuestion + 1;
  document.getElementById("questionText").innerHTML = question["question"];
  document.getElementById("answer_1").innerHTML = question["answer_1"];
  document.getElementById("answer_2").innerHTML = question["answer_2"];
  document.getElementById("answer_3").innerHTML = question["answer_3"];
  document.getElementById("answer_4").innerHTML = question["answer_4"];
}

function answer(selection) {
  let question = questions[currentQuestion];
  let qNumber = selection.slice(-1);
  let rightAnswer = `answer_${question["right_answer"]}`;

  if (qNumber == question["right_answer"]) {
    document.getElementById(selection).classList.add("bg-success");
    rightQuestions++;
    blockAnswer();
  } else {
    document.getElementById(selection).classList.add("bg-danger");
    document.getElementById(rightAnswer).classList.add("bg-success");
    blockAnswer();
  }
  document.getElementById("next-btn").disabled = false;
}

function disableButton() {
  document.getElementById("answer_1").disabled = "true";
  document.getElementById("answer_2").disabled = "true";
  document.getElementById("answer_3").disabled = "true";
  document.getElementById("answer_4").disabled = "true";
}

function nextQuestion() {
  currentQuestion++;
  document.getElementById("next-btn").disabled = true;

  resetBtn();
  showQuestion();
}

// function lastQuestion() {
//   currentQuestion--;
//   document.getElementById("next-btn").disabled = true;
//   showQuestion();
// }

function resetBtn() {
  // for (let index = 0; index < array.length; index++) {
  //   const element = array[index];
  // }

  document.getElementById("answer_1").classList.remove("bg-danger");
  document.getElementById("answer_1").classList.remove("bg-success");
  document.getElementById("answer_2").classList.remove("bg-danger");
  document.getElementById("answer_2").classList.remove("bg-success");
  document.getElementById("answer_3").classList.remove("bg-danger");
  document.getElementById("answer_3").classList.remove("bg-success");
  document.getElementById("answer_4").classList.remove("bg-danger");
  document.getElementById("answer_4").classList.remove("bg-success");

  document.getElementById("answer_1").parentNode.classList.remove("block");
  document.getElementById("answer_2").parentNode.classList.remove("block");
  document.getElementById("answer_3").parentNode.classList.remove("block");
  document.getElementById("answer_4").parentNode.classList.remove("block");
}
function endScreen() {
  document.getElementById("endScreen").style = "";
  document.getElementById("qImg").style = "display: none";
  document.getElementById("qBody").style = "display: none";
  document.getElementById("qText").style = "display: none";
  document.getElementById("qMenue").style = "display: none";
}

function score() {
  document.getElementById("qAmount").innerHTML = questions.length;
  document.getElementById("qScore").innerHTML = rightQuestions;
  document.getElementById("score").innerHTML = rightQuestions;
}

function progress() {
  let percent = currentQuestion / questions.length;
  percent = Math.round(percent * 100);
  document.getElementById("progress").innerHTML = `${percent} %`;
  document.getElementById("progress").style.width = `${percent}%`;
}

function restart() {
  document.getElementById("endScreen").style = "display: none";
  document.getElementById("qImg").style = "";
  document.getElementById("qBody").style = "";
  document.getElementById("qText").style = "";
  document.getElementById("qMenue").style = "";

  percent = 0;
  currentQuestion = 0;
  rightQuestions = 0;
  init();
}
function blockAnswer() {
  document.getElementById("answer_1").parentNode.classList.add("block");
  document.getElementById("answer_2").parentNode.classList.add("block");
  document.getElementById("answer_3").parentNode.classList.add("block");
  document.getElementById("answer_4").parentNode.classList.add("block");
}

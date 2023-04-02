let currentQuestion = 0;
let rightQuestions = 0;

function init() {
    document.getElementById('all-questions').innerHTML = questions.length;

    showQuestion()

};

function showQuestion() {

    if (currentQuestion >= questions.length) {

        endScreen();

    } else {

        updateQuestion()
        
    }
    progress();
    score();
}

function updateQuestion() {
    
    let question = questions[currentQuestion];

    document.getElementById('curQuestion').innerHTML = currentQuestion + 1;
    document.getElementById('questionText').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function answer(selection) {
    let question = questions[currentQuestion];
    let qNumber = selection.slice(-1);
    let rightAnswer = `answer_${question['right_answer']}`

    if (qNumber == question['right_answer']) {
        console.log('Richtig!')
        document.getElementById(selection).classList.add('bg-success')
        rightQuestions++;
    } else {
        console.log('Falsch!')
        document.getElementById(selection).classList.add('bg-danger')
        document.getElementById(rightAnswer).classList.add('bg-success')
    }
    document.getElementById('next-btn').disabled = false;

}

function nextQuestion() {
    currentQuestion++
    document.getElementById('next-btn').disabled = true;

    resetBtn();
    showQuestion();

}

function lastQuestion() {
    currentQuestion--
    document.getElementById('next-btn').disabled = true;
    showQuestion();
}

function resetBtn() {

    document.getElementById('answer_1').classList.remove('bg-danger')
    document.getElementById('answer_1').classList.remove('bg-success')
    document.getElementById('answer_2').classList.remove('bg-danger')
    document.getElementById('answer_2').classList.remove('bg-success')
    document.getElementById('answer_3').classList.remove('bg-danger')
    document.getElementById('answer_3').classList.remove('bg-success')
    document.getElementById('answer_4').classList.remove('bg-danger')
    document.getElementById('answer_4').classList.remove('bg-success')
}
function endScreen() {
    document.getElementById('endScreen').style = '';
    document.getElementById('qImg').style = 'display: none';
    document.getElementById('qBody').style = 'display: none';
    document.getElementById('qText').style = 'display: none';
    document.getElementById('qMenue').style = 'display: none';
}

function score() {
    document.getElementById('qAmount').innerHTML = questions.length;
    document.getElementById('qScore').innerHTML = rightQuestions;
    document.getElementById('score').innerHTML = rightQuestions;

}

function progress() {

    let percent = currentQuestion / questions.length;
    percent = Math.round(percent * 100);
    console.log(percent, '%');
    document.getElementById('progress').innerHTML = `${percent} %`;
    document.getElementById('progress').style.width = `${percent}%`;
}

function restart() {

    document.getElementById('endScreen').style = 'display: none';
    document.getElementById('qImg').style = '';
    document.getElementById('qBody').style = '';
    document.getElementById('qText').style = '';
    document.getElementById('qMenue').style = '';

    percent = 0;
    currentQuestion = 0;
    rightQuestions = 0;
    init()


}

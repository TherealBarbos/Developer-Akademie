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

function disableButton() {

    document.getElementById('answer_1').disabled = 'true';
    document.getElementById('answer_2').disabled = 'true';
    document.getElementById('answer_3').disabled = 'true';
    document.getElementById('answer_4').disabled = 'true';

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

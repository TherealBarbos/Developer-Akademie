let questions = [
    {
        "question": "Wie Heißt die Hauptsadt von Deutschland?",
        "answer_1": "Berlin",
        "answer_2": "Hammburg",
        "answer_3": "Offenburg",
        "answer_4": "München",
        "right_answer": 1

    },
    {
        "question": "Welche Farben hat die Deutschlandflagge?",
        "answer_1": "Blau, Weis und Rot",
        "answer_2": "Gelb, Grün und Blau",
        "answer_3": "Schwarz, Rot und Gelb ",
        "answer_4": "Weis, Grün und Rot",
        "right_answer": 3

    }

];

let currentQuestion = 0;

function init() {
    document.getElementById('all-questions').innerHTML = questions.length;

    showQuestion()

};

function showQuestion() {
    let question = questions[currentQuestion];
    document.getElementById('questionText').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
    ;
}

function answer(selection) {
    let question = questions[currentQuestion]; 
    let qNumber = selection.slice(-1); 
 
    if (qNumber == question['right_answer']) { 
        console.log('Richtig!')
        document.getElementById(selection).classList.add('bg-success')
    } else {
        console.log('Falsch!')
        document.getElementById(selection).classList.add('bg-danger')
    }
    
    
    
    
    
    
    

    
}


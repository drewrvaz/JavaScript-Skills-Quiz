var timeRemaining = document.getElementById("time-remaining");
var startButton = document.getElementById("start-button");
var quizInstructions = document.getElementById("instruction-card");
var quizQuestions = document.getElementById("question-card");
var quizScore = document.getElementById("score-card");
var quizHighScores = document.getElementById("highscore-card");
var questionEl = document.getElementById("question");

//An array to store all the questions and their answers
var questionIndex = [
  {
    id: 0,
    question: "Commonly used data types DO NOT include:",
    answers: [ 
      {text: "1) strings",  isCorrect: false},
      {text: "2) booleans", isCorrect: false}, 
      {text: "3) alerts", isCorrect: true}, 
      {text: "4) numbers", isCorrect: false}]
  },
  {
    id: 1,
    question: "The condition in an if/else statement is enclosed within ______.",
    answers: [ 
      {text: "1) quotes",  isCorrect: false},
      {text: "2) curly brackets", isCorrect: false}, 
      {text: "3) parentheses", isCorrect: true}, 
      {text: "4) square brackets", isCorrect: false}]
  },
  {
    id: 2,
    question: "Arrays in JavaScript can be used to store ______.",
    answers: [ 
      {text: "1) numbers and strings",  isCorrect: false},
      {text: "2) other arrays", isCorrect: false}, 
      {text: "3) booleans", isCorrect: false}, 
      {text: "4) all of the above", isCorrect: true}]
  },
  {
    id: 3,
    question: "String values must be enclosed within ______ when being assigned in variables.",
    answers: [ 
      {text: "1) commas",  isCorrect: false},
      {text: "2) curly brackets", isCorrect: false}, 
      {text: "3) quotes", isCorrect: true}, 
      {text: "4) parentheses", isCorrect: false}]
  },
  {
    id: 4,
    question: "A very useful tool during development and debugging for printing content to the debugger is:",
    answers: [
      {text: "1) JavaScript",  isCorrect: false},
      {text: "2) terminal/bash", isCorrect: false}, 
      {text: "3) for loops", isCorrect: false}, 
      {text: "4) console.log", isCorrect: true}]
  }
];

// Event listener on the start button to begin the quiz
startButton.addEventListener("click", startQuiz); 

function startQuiz() {
  countdown();
  quizInstructions.classList.add("hide-card");
  quizQuestions.classList.remove("hide-card");
  quizQuestions.classList.add("card");
  showQuestion();
}

// Function for the countdown clock
function countdown() {
  var timeLeft = 75;
  var timeInterval = setInterval(function () {
    if (timeLeft > 0) {
      timeRemaining.textContent = "Time: " + timeLeft;
      timeLeft--;
    }  else {
      timeRemaining.textContent = "Time's up!";
      clearInterval(timeInterval);
      endQuiz();
    }
  }, 1000);
}

function showQuestion() {
  // Sets question text
  questionEl.innerText = questionIndex[id].question;
  // Calls the answer options
  var answer1 = document.getElementById("answer-1");
  var answer2 = document.getElementById("answer-2");
  var answer3 = document.getElementById("answer-3");
  var answer4 = document.getElementById("answer-4");
  // Sets the answer text
  answer1.innerText = questionIndex[id].answers[0].text;
  answer2.innerText = questionIndex[id].answers[1].text;
  answer3.innerText = questionIndex[id].answers[2].text;
  answer4.innerText = questionIndex[id].answers[3].text;
  // Sets the true or false value for each answer
  answer1.value = questionIndex[id].answers[0].isCorrect;
  answer2.value = questionIndex[id].answers[1].isCorrect;
  answer3.value = questionIndex[id].answers[2].isCorrect;
  answer4.value = questionIndex[id].answers[3].isCorrect;
}
console.log(showQuestion)

function endQuiz() {
quizQuestions.classList.add("hide-card");
quizScore.classList.remove("hide-card");
quizScore.classList.add("card");
var submitScore = document.getElementById("submit-score");
submitScore.addEventListener("click", showHighScores);
}

function showHighScores() {
  quizScore.classList.add("hide-card");
  quizHighScores.classList.remove("hide-card");
  quizHighScores.classList.add("card");
  var input = document.getElementById("recorded-scores").value;
  input.textContent = 
}
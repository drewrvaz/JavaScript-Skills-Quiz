var timeRemaining = document.getElementById("time-remaining");
var startButton = document.getElementById("start-button");

//An array to store all the questions and their answers
var questions = [
  {
    question: "Commonly used data types DO NOT include:",
    answers: ["1) strings", "2) booleans", "3) alerts", "4) numbers"],
    correctAnswer: "3) alerts",
  },
  {
    question: "The condition in an if/else statement is enclosed within ______.",
    answers: ["1) quotes", "2) curly brackets", "3) parentheses", "4)square brackets"],
    correctAnswer: "3) parentheses"
  },
  {
    question: "Arrays in JavaScript can be used to store ______.",
    answers: ["1) numbers and strings", "2) other arrays", "3) bolleans", "4) all of the above"],
    correctAnswer: "4) all of the above"
  },
  {
    question: "String values must be enclosed within ______ when being assigned in variables.",
    answers: ["1) commas", "2) curly brackets", "3) quotes", "4)parentheses"],
    correctAnswer: "3) quotes"
  },
  {
    question: "A very useful tool during development and debugging for printing content to the debugger is:",
    answers: ["1) JavaScript", "2) terminal/bash", "3) for loops", "4) console.log"],
    correctAnswer: "4) console.log"
  }
]

// Event listener on the start button to begin the quiz
startButton.addEventListener("click", startQuiz) 

function startQuiz() {
  countdown
}

function countdown() {
  var timeLeft = 75;
  var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timeRemaining.textContent = timeLeft;
      timeLeft--;
    }  else {
      timeRemaining.textContent = '';
      clearInterval(timeInterval);
      endQuiz;
    }
  }, 1000);
}

function endQuiz() {

}
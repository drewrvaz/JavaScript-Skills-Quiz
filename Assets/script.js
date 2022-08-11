var timeRemaining = document.getElementById("time-remaining");
var startButton = document.getElementById("start-button");
var quizInstructions = document.getElementById("instruction-card");
var quizScore = document.getElementById("score-card");
var quizHighScores = document.getElementById("highscore-card");
var questionCard = document.getElementById("question-card");
var answerButton = document.querySelectorAll("answer-button");
var questionEl = document.getElementById("question")

//Array to store the quiz questions
var questionIndex = [
  {
    question: "Commonly used data types DO NOT include: ",
    options: ["1. Strings", "2. Booleans", "3. Alerts", "4. Numbers"],
    correctAnswer: "3. Alerts"
  },
  {
    question: "The conidition in an if/else statement is enclosed within ______.",
    options: ["1. Quotes", "2. Curly Brackets", "3. Parentheses", "4. Square Brackets"],
    correctAnswer: "Parentheses"
  },
  {
    question: "Arrays in JavaScript can be used to store ______.",
    options: ["1. Numbers and Strings", "Other Arrays", "3. Booleans", "4. All of the Above"],
    correctAnswer: "4. All of the Above"
  },
  {
    question: "String values must be enclosed within ______ when being assigned in variables.",
    options: ["1. Commas", "2. Curly Brackets", "3. Quotes", "4. Parentheses"],
    correctAnswer: "3. Quotes"
  },
  {
    question: "A very useful tool during development and debigging for printing content to the debugger is: ",
    options: ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console.log", ],
    correctAnswer: "4. console.log"
  }
]

// Event listener on the start button to begin the quiz
startButton.addEventListener("click", startQuiz); 

function startQuiz() {
  countdown();
  quizInstructions.classList.add("hide-card");
  questionCard.classList.remove("hide-card");
  questionCard.classList.add("card");
  showQuestions();
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

function showQuestions() {
  for (let i = 0; i < questionIndex.length; i++) {
    questionEl = questionIndex[0].question
    answerButton = questionIndex[0].options
  }
}
console.log(showQuestions)

function checkAnswer() {
  if (answerButton === correctAnswer) {
    alert("Correct!");
  } else {
    alert("Incorrect!")
    if (timeLeft >= 10) {
      timeLeft = timeLeft - 10
    } else {
      endQuiz
    }
  }
}

// Function to end the quiz and show the user their score
function endQuiz() {
questionCard.classList.add("hide-card");
quizScore.classList.remove("hide-card");
quizScore.classList.add("card");
var submitScore = document.getElementById("submit-score");
submitScore.addEventListener("click", showHighScores);
}

// Function to take the user to the highscores page before deciding if they want to play again
function showHighScores() {
  quizScore.classList.add("hide-card");
  quizHighScores.classList.remove("hide-card");
  quizHighScores.classList.add("card");
  var input = document.getElementById("recorded-scores").value;
}
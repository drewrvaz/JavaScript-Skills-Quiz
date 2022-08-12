var timeRemaining = document.getElementById("time-remaining");
var startButton = document.getElementById("start-button");
var quizInstructions = document.getElementById("instruction-card");
var quizScore = document.getElementById("score-card");
var quizHighScores = document.getElementById("highscore-card");
var questionCard = document.getElementById("question-card");

//Array to store the quiz questions
var questionIndex = [
  {
    question: "Commonly used data types DO NOT include: ",
    options: ["1. Strings", "2. Booleans", "3. Alerts", "4. Numbers"],
    answer: "3. Alerts"
  },
  {
    question: "The conidition in an if/else statement is enclosed within ______.",
    options: ["1. Quotes", "2. Curly Brackets", "3. Parentheses", "4. Square Brackets"],
    answer: "Parentheses"
  },
  {
    question: "Arrays in JavaScript can be used to store ______.",
    options: ["1. Numbers and Strings", "Other Arrays", "3. Booleans", "4. All of the Above"],
    answer: "4. All of the Above"
  },
  {
    question: "String values must be enclosed within ______ when being assigned in variables.",
    options: ["1. Commas", "2. Curly Brackets", "3. Quotes", "4. Parentheses"],
    answer: "3. Quotes"
  },
  {
    question: "A very useful tool during development and debigging for printing content to the debugger is: ",
    options: ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console.log", ],
    answer: "4. console.log"
  }
]

// Event listener on the start button to begin the quiz
startButton.addEventListener("click", startQuiz); 

var currentQuestion;
// Function to start the quiz
function startQuiz() {
  countdown();
  quizInstructions.classList.add("hide-card");
  questionCard.classList.remove("hide-card");
  questionCard.classList.add("card");
  currentQuestion = 0
  showQuestions();
}

// Took time left out of the countdown function so that it could be read in the final score function
var timeLeft = 75;
// Function for the countdown clock
function countdown() {
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

// Function to cycle through the array containing the questions
function showQuestions() {
  let question = questionIndex[currentQuestion];
  let options = question.options;

  let questionEl = document.getElementById("question")
  questionEl.textContent = question.question

  for (let i = 0; i < options.length; i++) {
    let option = options[i];
    let answerButton = document.getElementsByClassName("answer-button" + i);
    answerButton.textContent = option;
    console.log(answerButton)
  }
} ;

// Function to move on to the next question
currentQuestion++;
if (currentQuestion < questionIndex.length) {
  showQuestions();
} else {
  endQuiz();
}

document.getElementsByClassName("answer-button").addEventListener("click", checkAnswer)

function answerIsCorrect(answerButton) {
  return answerButton.textContent === questionIndex[currentQuestion].answer;
}

// This will eventually be the function that checks the user's choice for correctness
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
var finalScore = document.getElementById("final-score");
finalScore.textContent = "Your final score is: " + timeLeft;
var submitScore = document.getElementById("submit-score");
submitScore.addEventListener("submit", showHighScores);
}

// Function to take the user to the highscores page before deciding if they want to play again
function showHighScores() {
  quizScore.classList.add("hide-card");
  quizHighScores.classList.remove("hide-card");
  quizHighScores.classList.add("card");
  var input = document.getElementById("recorded-scores").value;
}
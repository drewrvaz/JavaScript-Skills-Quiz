var timeRemaining = document.getElementById("time-remaining");
var startButton = document.getElementById("start-button");
var quizInstructions = document.getElementById("instruction-card");
var quizScore = document.getElementById("score-card");
var quizHighScores = document.getElementById("highscore-card");
var questionOne = document.getElementById("question-one");
var questionTwo = document.getElementById("question-two");
var questionThree = document.getElementById("question-three");
var questionFour = document.getElementById("question-four");
var questionFive = document.getElementById("question-five");
var answerButton = document.getElementById("answer-button");
var correctAnswer = document.getElementById("correct-answer");
var incorrectAnswer = document.getElementById("incorrect-answer");

// Event listener on the start button to begin the quiz
startButton.addEventListener("click", startQuiz); 

function startQuiz() {
  countdown();
  quizInstructions.classList.add("hide-card");
  questionOne.classList.remove("hide-card");
  questionOne.classList.add("card");
  showQuestionOne();
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

function showQuestionOne() {
  answerButton.addEventListener("click", checkAnswerOne)
}

function checkAnswerOne() {
  showQuestionTwo
  if (answerButton === correctAnswer) {

  }
}

function showQuestionTwo() {
  answerButton.addEventListener("click", checkAnswerTwo)
}

function checkAnswerTwo() {
  showQuestionThree
  if (answerButton === correctAnswer) {

  }
}

function showQuestionThree() {
  answerButton.addEventListener("click", checkAnswerThree)
}

function checkAnswerThree() {
  showQuestionFour
  if (answerButton === correctAnswer) {

  }
}

function showQuestionFour() {
answerButton.addEventListener("click", checkAnswerFour)
}

function checkAnswerFour() {
  showQuestionFive
  if (answerButton === correctAnswer) {

  }
}

function showQuestionFive() {
answerButton.addEventListener("click", checkAnswerFive)
}

function checkAnswerFive() {
  endQuiz()
  if (answerButton === correctAnswer) {

  }
}

// Function to end the quiz and show the user their score
function endQuiz() {
questionFive.classList.add("hide-card");
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
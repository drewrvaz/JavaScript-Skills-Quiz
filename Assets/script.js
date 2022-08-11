var timeRemaining = document.getElementById("time-remaining");
var startButton = document.getElementById("start-button");
var quizInstructions = document.getElementById("instruction-card");
var quizScore = document.getElementById("score-card");
var quizHighScores = document.getElementById("highscore-card");
var quesstionOne = document.getElementById("question-one");
var quesstionTwo = document.getElementById("question-two");
var quesstionThree = document.getElementById("question-three");
var quesstionFour = document.getElementById("question-four");
var quesstionFive = document.getElementById("question-five");
var answerButton = document.getElementById("answer-button");
var correctAnswer = document.getElementById("correct-answer");
var incorrectAnswer = document.getElementById("incorrect-answer");

// Event listener on the start button to begin the quiz
startButton.addEventListener("click", startQuiz); 

function startQuiz() {
  countdown();
  quizInstructions.classList.add("hide-card");
  quesstionOne.classList.remove("hide-card");
  quesstionOne.classList.add("card");
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
  if (answerButton === correctAnswer) {
    
  }
}

// Function to end the quiz and show the user their score
function endQuiz() {
quesstionFive.classList.add("hide-card");
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
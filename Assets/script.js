var timeRemaining = document.getElementById("time-remaining");
var startButton = document.getElementById("start-button");
var quizInstructions = document.getElementById("instruction-card");
var quizQuestions = document.getElementById("question-card");
var quizScore = document.getElementById("score-card");
var quizHighScores = document.getElementById("highscore-card");
var questionEl = document.getElementById("question");

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

// Function to end the quiz and show the user their score
function endQuiz() {
quizQuestions.classList.add("hide-card");
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
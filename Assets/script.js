var timeRemaining = document.getElementById("time-remaining");
var startButton = document.getElementById("start-button");

// Event listener on the start button to begin the quiz
startButton.addEventListener("click", startQuiz) 

function startQuiz() {
  countdown
}

function countdown() {
  var timeLeft = 75;
  var timeInterval = setInterval(function () {
    if (timeLeft > 0) {
      timeRemaining.textContent = timeLeft;
      timeLeft--;
    } else {
      timeRemaining.textContent = "";
      clearInterval(timeInterval);
      endQuiz;
    }
  }, 1000);
}


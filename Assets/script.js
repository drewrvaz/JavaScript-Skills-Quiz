var timeRemaining = document.getElementById("#time-remaining");
var startButton = document.getElementById("#start-button");

// Event listener on the start button to begin the quiz
startButton.addEventListener("click", startQuiz);

function startQuiz() {
  function countdown() {
    var timeLeft = 75;
    var timeInterval = setInterval(function () {
      if (timeLeft > 0) {
        timeLeft;
      } else {
        timeRemaining.textContent = "";
        clearInterval(timeInterval);
        endQuiz;
      }
    })
  }
}


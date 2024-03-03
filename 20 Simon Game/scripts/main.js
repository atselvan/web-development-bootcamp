var btnColors = ["green", "red", "yellow", "blue"];

var gamePattern = [];
var userClickedPattern = [];

var level = 0;
var started = false;

var highScore = 0;

$(document).on("keydown", startGame);

$(".btn").on("click", processBtnPress);

function startGame() {
  if (!started) {
    loadNextLevel();
    started = true;
  }
}

function processBtnPress() {
  if (started) {
    var btn = $(this);
    var btnColor = btn.attr("id");

    btn.addClass("pressed");
    playSound(btnColor);
    setTimeout(function () {
      btn.removeClass("pressed");
    }, 100);
    userClickedPattern.push(btnColor);

    checkAnswer();
  }
}

function loadNextLevel() {
  $("#currentScore").text(level);
  userClickedPattern = [];
  level++;
  $(".game-title").text("Level " + level);
  randomNumber = Math.floor(Math.random() * 4);
  btnColor = btnColors[randomNumber];

  gamePattern.push(btnColor);

  playSound(btnColor);
  $("#" + btnColor)
    .fadeOut(100)
    .fadeIn(100);
}

function checkAnswer() {
  currentClick = userClickedPattern.length - 1;

  if (gamePattern[currentClick] === userClickedPattern[currentClick]) {
    if (gamePattern.length === userClickedPattern.length) {
      setTimeout(function () {
        loadNextLevel();
      }, 1000);
    }
  } else {
    playSound("wrong");
    $("body").addClass("game-over");
    $(".game-title").text("Game Over, Press Any Key to Restart");

    if (level > highScore) {
      highScore = level - 1;
      $("#highScore").text(highScore);
    }

    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    restartGame();
  }
}

function restartGame() {
  gamePattern = [];
  level = 0;
  started = false;
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

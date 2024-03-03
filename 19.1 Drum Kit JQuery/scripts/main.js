var wAudio = new Audio("sounds/tom1.mp3");
var aAudio = new Audio("sounds/tom2.mp3");
var sAudio = new Audio("sounds/tom3.mp3");
var dAudio = new Audio("sounds/tom4.mp3");
var jAudio = new Audio("sounds/snare.mp3");
var kAudio = new Audio("sounds/crash.mp3");
var lAudio = new Audio("sounds/kick.mp3");

$(".drum").on("click", function () {
  drumButtonInnerHTML = $(this).text();
  playDrum(drumButtonInnerHTML);
  buttonAnimation(drumButtonInnerHTML);
});

$(document).on("keydown", function (event) {
  playDrum(event.key);
  buttonAnimation(event.key);
});

function playDrum(key) {
  switch (key) {
    case "w":
      wAudio.play();
      wAudio.currentTime = 0;
      break;
    case "a":
      aAudio.play();
      aAudio.currentTime = 0;
      break;
    case "s":
      sAudio.play();
      sAudio.currentTime = 0;
      break;
    case "d":
      dAudio.play();
      dAudio.currentTime = 0;
      break;
    case "j":
      jAudio.play();
      jAudio.currentTime = 0;
      break;
    case "k":
      kAudio.play();
      kAudio.currentTime = 0;
      break;
    case "l":
      lAudio.play();
      lAudio.currentTime = 0;
      break;
    default:
      break;
  }
}

function buttonAnimation(key) {
    activeButton = "." + key;
    $(activeButton).addClass("pressed");
    setTimeout(function () {
      $(activeButton).removeClass("pressed");
    }, 100);
  }

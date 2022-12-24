var buttonsAvailable = ["green", "red", "yellow", "blue"];
var started = false;
var gamePattern = [];
var userChosenPattern = [];
var i = 0;
var levelPassed = false;
var currentLevel = 0;
var check = false;
$(document).on("keydown", function () {
  if (started === false) {
    gamePattern = [];
    userChosenPattern = [];
    gameStart();
    started = true;
    currentLevel = 0;
  }
});
function gameStart() {
  setTimeout(() => {
    i = 0;
    currentLevel++;
    $("h1").text("Level " + currentLevel);
    levelPassed = false;
    var randomNum = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonsAvailable[randomNum];
    gamePattern.push(randomChosenColor);
    animatePress(randomChosenColor);
    checkPattern();
  }, 1000);
}
function checkPattern() {
  if (levelPassed !== true) {
    $(".btn").on("click", function () {
      animatePress($(this).attr("id"));
      var userChosenColor = $(this).attr("id");
      userChosenPattern.push(userChosenColor);
      check = false;
      checkClick(userChosenColor, i);
      i++;
      if (i === gamePattern.length && check === true) {
        i = 0;
        levelPassed = true;
        $(".btn").off("click");
        gameStart();
      }
    });
  }
}
function checkClick(userChosenColor, i) {
  if (userChosenColor !== gamePattern[i]) {
    $("h1").text("Game Over, Press any Key to Restart");
    var audio = new Audio("sounds/wrong.mp3");
    audio.play();
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 150);
    started = false;
    check = false;
    $(".btn").off("click");
  } else {
    check = true;
  }
}
function animatePress(randomChosenColor) {
  $("#" + randomChosenColor).addClass("pressed");
  setTimeout(function () {
    $("#" + randomChosenColor).removeClass("pressed");
  }, 150);
  var audio = new Audio("sounds/" + randomChosenColor + ".mp3");
  audio.play();
}

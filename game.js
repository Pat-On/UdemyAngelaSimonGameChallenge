// $("h1").css("color", "blue");
//
// alert("hello world");
// alert(location.hostname);

let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let level = 0;
var start = false;

$(document).keypress(function(){
  if(!start) {
    $("#level-title").text("Level: " + level);
    nextSequence();
    start = true;
  }
});

function nextSequence() {
  let randomNumber = Math.floor(Math.random() * 4);
  // console.log(randomNumber);
  let randomChosenColour = buttonColours[randomNumber];
  console.log(randomChosenColour);
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  playSound(randomChosenColour); // audio.play only when user is going to click something
  level++;
  $("#level-title").text("Level " + level);
  userClickedPattern = [];
};

// nextSequence();

$(".btn").click(function() {   // Why she used here function not a handler name.
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  console.log(userClickedPattern);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length - 1);
});

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
};

function animatePress(currentColour) {
  console.log(currentColour);
  $("#" + currentColour).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
};

function animatedGameOver() {
  $("body").addClass("game-over");
  setTimeout(function () {
    $("body").removeClass("game-over");
  }, 200);
};

function startOver() {
  level = 0;
  gamePattern = [];
  start = 0;
}

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]){
    console.log("SUCCESS");
    if (userClickedPattern.length === gamePattern.length){
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    console.log("WRONG")
    playSound("wrong");
    animatedGameOver();
    $("#level-title").text("Game Over, Press Any Key to Restart");
    startOver();
  }
}

// Keyboard detection





//
// funtion handler(){
//   // let userChosenColor =
// }

// if("red"===gamePattern[gamePattern.length-1]){
//   $("#red").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
// } else if("blue"===gamePattern[gamePattern.length-1]) {
//   $("#blue").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
// } else if("green"===gamePattern[gamePattern.length-1]) {
//   $("#green").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
// } else if("yellow"===gamePattern[gamePattern.length-1]) {
//   $("#yellow").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
// };

// for (let i = 0; i < 15; i++) {
//   nextSequence();
// };

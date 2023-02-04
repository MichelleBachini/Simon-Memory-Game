let buttonColors = ["red", "blue", "green", "yellow"];

let gamePattern = [];

let userClickedPattern = [];

function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4);

    let randomChosenColor = buttonColors[randomNumber];

    gamePattern.push(randomChosenColor);

    // use jQuery to select button using id# #color .animation
    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

    // attaches specific audio clip to the button color let audio
    let audio = new Audio("sounds/" + randomChosenColor + ".mp3");

};

$(".btn").click() {
    let userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern);
};
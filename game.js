let buttonColors = ["red", "blue", "green", "yellow"];

let gamePattern = [];

function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4);

    let randomChosenColor = buttonColors[randomNumber];

    gamePattern.push(randomChosenColor);

    // use jQuery to select button using id# #color .animation
    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

    // attaches specific audio clip to the button color let audio
    let audio = new Audio("sounds/" + randomChosenColor + ".mp3");

};


var buttonsAvailable = ["green","red","yellow","blue"];
var started = false;
var gamePattern = [];
var userChosenPattern = [];
var i = 0;
var levelPassed = false;
var currentLevel = 0;
$(document).on("keydown",function(){
    if(started === false){
        gamePattern=[];
        userChosenPattern=[];
        gameStart();
        started = true;
        currentLevel=0;
    }
});
// if(started === false){
//     $(document).on("keydown",function(){
//         started = true;
//         gameStart();
//     });
// }
function gameStart(){
    setTimeout(() => {
    currentLevel++;
    $("h1").text("Level " + currentLevel);
    levelPassed = false;
    var randomNum = Math.floor(Math.random()*4);
    var randomChosenColor = buttonsAvailable[randomNum];
    gamePattern.push(randomChosenColor);
    console.log("game pattern is " + gamePattern);
    animatePress(randomChosenColor);
    checkPattern();
    }, 1000);
}
// function nextLevel(){
//     var randomNum = Math.floor(Math.random()*4);
//     var randomChosenColor = buttonsAvailable[randomNum];
//     gamePattern.push(randomChosenColor);
//     console.log("game pattern is " + gamePattern);
//     animatePress(randomChosenColor);
//     checkPattern();
// }
function checkPattern(){
    if(levelPassed !== true){
    $(".btn").on("click",function(){
        animatePress($(this).attr("id"));
        var userChosenColor = $(this).attr("id");
        userChosenPattern.push(userChosenColor);
        console.log("user chosen color is " + userChosenColor)
        checkClick(userChosenColor,i);
        console.log(i);
        i++;
        if(i===gamePattern.length){
            i=0;
            levelPassed = true;
            console.log("level Passed");
            $(".btn").off("click");
            gameStart();
        }
    });
}
}

function checkClick(userChosenColor,i){
    if(userChosenColor !== gamePattern[i]){
        $("h1").text("Game Over, Press any Key to Restart");
        var audio = new Audio('sounds/wrong.mp3');
        audio.play();
        $('body').addClass('game-over');
    setTimeout(function(){
        $('body').removeClass('game-over')
    },150);
        started=false;
        console.log("Wrong Key pressed");
        $(".btn").off("click");
    }
    else{
        console.log("right key pressed \nuser: " + userChosenColor + " \ngame: " + gamePattern[i]);
    }
}

function animatePress(randomChosenColor){
    $('#'+randomChosenColor).addClass('pressed');
    setTimeout(function(){
        $('#'+randomChosenColor).removeClass('pressed')
    },150);
    var audio = new Audio('sounds/' + randomChosenColor +'.mp3');
    audio.play();
}














// var buttonColors = ["green","red","yellow","blue"];
// var currentLevel = 1;
// var gamePattern = [];
// var currentGameState = "Playing";
// $(document).on("keydown",function(){
//     gameStart();
// });
// function animateButton(btnIdToBePressed){
//     $(btnIdToBePressed).fadeIn(100).fadeOut(100).fadeIn(100);
//     var audio = new Audio('sounds/' + btnIdToBePressed.slice(1,(btnIdToBePressed.length)) + '.mp3');
//     audio.play();
// }
// function buttonPressed(btnIdToBePressed){
//     $(btnIdToBePressed).toggleClass('pressed');
//     setTimeout(function(){
//         $(btnIdToBePressed).toggleClass('pressed');
//     },150);
//     var audio = new Audio('sounds/' + btnIdToBePressed.slice(1,(btnIdToBePressed.length)) + '.mp3');
//     audio.play();
// }
// var userChosenColor;
// var userChosenPattern = [];
// $(".btn").on("click",function(){
//     userChosenColor = $(this).attr("id");
//     userChosenPattern.push(userChosenColor);
//     buttonPressed('#' + userChosenColor);
//     // animateButton('#'+ userChosenColor);
//     console.log(userChosenPattern);
// });
// function gameStart(){
//     currentLevel = 1;
//     gamePattern = [];
//     nextSequence();
// }
// function nextSequence(){
//     $("h1").text('Level ' + currentLevel);
//     var randomNum = Math.floor(Math.random()*4);
//     var randomChosenColor = buttonColors[randomNum];
//     gamePattern.push(randomChosenColor);
//     animateButton('#'+randomChosenColor);
//     console.log(gamePattern);
//     gameCheck();
//     currentLevel++;
// }

// function gameCheck(){
    
// }









// console.log(randomChosenColor);
// var buttonId = "#" + randomChosenColor;
// buttonClickAnimation(buttonId);
// //Produces animation and plays sound on Button Press
// function buttonClickAnimation(buttonId){
//     // var audioVar = $(buttonPressed).attr("id");
//     if(buttonId === "red"){
//         var red = new Audio('sounds/red.mp3');
//         red.play();
//     }
//     if(buttonId === "green"){
//         var green = new Audio('sounds/green.mp3');
//         green.play();
//     }
//     if(buttonId === "yellow"){
//         var yellow = new Audio('sounds/yellow.mp3');
//         yellow.play();
//     }
//     if(buttonId === "blue"){
//         var blue = new Audio('sounds/blue.mp3');
//         blue.play();
//     }
//     setTimeout(function(){
//         $(buttonId).toggleClass("pressed");
//     },200);
//         $(buttonId).toggleClass("pressed");
// }







/*
//Variable arr to store the random values generated to make the game, num stores a single random number
var arr=[],score=[],num,scoreNum,buttonPressed;

//Variable gameRun to store the current State of Game (Running, waiting to Start and Defeat)
var gameRun = "waitingToStart";
if(gameRun!=="Running"){
$(document).on("keypress",function(){
    num = Math.floor((Math.random()*4));
    console.log(num);
    arr.push(num);
    console.log(arr);
    buttonClickAnimation($($(".btn")[num]));
    inGame();
});
}
//Game Function
function inGame(){
    gameRun = "Running";
    $(".btn").on("click",function(buttonPressed){
        buttonPressed = this;
        buttonClickAnimation(buttonPressed);
        console.log($(buttonPressed).attr("id"));
        console.log($($(".btn")[0]).attr("id"));
        if($(buttonPressed).attr("id")==="green"){
            scoreNum = 0;
            score.push(scoreNum);
            console.log(scoreNum);
            console.log(score);
        }
        if($(buttonPressed).attr("id")==="red"){
            scoreNum = 1;
            score.push(scoreNum);
            console.log(scoreNum);
            console.log(score);
        }
        if($(buttonPressed).attr("id")==="yellow"){
            scoreNum = 2;
            score.push(scoreNum);
            console.log(scoreNum);
            console.log(score);
        }
        if($(buttonPressed).attr("id")==="blue"){
            scoreNum = 3;
            score.push(scoreNum);
            console.log(scoreNum);
            console.log(score);
        }
        // if(arr.length<score.length){
        //     score = [];
        //     return;
        // }
    });
    // for(var i=0;i<arr.length;i++){
    //     if($($(".btn")[i])===buttonPressed){
    //         console.log(true);
    //     }
    // }
}

//Button Click Function (stores the address of the button which is pressed and passes it to another function)
// $(".btn").on("click",function(buttonPressed){
//     var buttonPressed = this;
//     buttonClickAnimation(buttonPressed);
// });

//Produces animation and plays sound on Button Press
function buttonClickAnimation(buttonPressed){
    var audioVar = $(buttonPressed).attr("id");
    if(audioVar === "red"){
        var red = new Audio('sounds/red.mp3');
        red.play();
    }
    if(audioVar === "green"){
        var green = new Audio('sounds/green.mp3');
        green.play();
    }
    if(audioVar === "yellow"){
        var yellow = new Audio('sounds/yellow.mp3');
        yellow.play();
    }
    if(audioVar === "blue"){
        var blue = new Audio('sounds/blue.mp3');
        blue.play();
    }
    setTimeout(function(){
        $(buttonPressed).toggleClass("pressed");
    },200);
        $(buttonPressed).toggleClass("pressed");
}*/
$(".btn").on("click",function(buttonPressed){
    var buttonPressed = this;
    // console.log(buttonPressed);
    buttonClickAnimation(buttonPressed);
});
var arr=[],num;
$("h1").on("click",function(){
    num = Math.floor((Math.random()*4));
    console.log(num);
    arr.push(num);
    console.log(arr);
    // $($(".btn")[num]).toggleClass("pressed");
    buttonClickAnimation($($(".btn")[num]));
});
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
}
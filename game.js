$(".btn").on("click",function(buttonPressed){
    var buttonPressed = this;
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
    setTimeout(function(){
        $(buttonPressed).toggleClass("pressed");
    },200);
        $(buttonPressed).toggleClass("pressed");
}
var playing = false;
var score;
var trialsleft;
var step;
var action;
var fruits = ['apple','orange','pineapple','bananas','lemon','watermelon'];

$(function(){
    
$("#startreset").click(function(){
    if(playing==true){
        location.reload();
    } else{
        playing = true;
        score = 0;
        $("#scorevalue").html(score);
        trialsleft = 3;
        addhearts();
        $("#gameover").hide();
        $("#startreset").html("Reset Game");
        startaction();
    }
});

$("#fruit").mouseover(function(){
   score++;
    $("#scorevalue").html(score);
    $("#slicesound")[0].play();
    clearInterval(action);
    $("#fruit").hide("explode", 300);
    setTimeout(startaction, 1000);
});

function startaction(){
    $("#fruit").show();
    choosefruit();
    $("#fruit").css({'left':Math.round(650*Math.random()), 'top': -50});
    step = 1+ Math.round(5*Math.random());

    action = setInterval(function(){

        $("#fruit").css('top',$("#fruit").position().top + step);

        if($("#fruit").position().top > $("#fruitscontainer").height()){
            if(trialsleft > 1){
            $("#fruit").show();
            choosefruit();
            $("#fruit").css({'left': Math.round(650*Math.random()), 'top': -50});
            step = 1+ Math.round(5*Math.random());
            trialsleft --;
            addhearts();
            } else {
            $("#trialsleft").empty();
            playing = false;
            $("#startreset").html("Start Game");
            $("#gameover").show();
            $("#gameover").html('<p>Game Over!</p><p>Your score is ' +score+ '</p>');
            stopaction();
                
            }
        }
    }, 10);
}
function stopaction(){
    clearInterval(action);
    $("#fruit").hide();
}
function addhearts(){
    $("#trialsleft").empty();
    
    for(i=0; i < trialsleft; i++){
        $("#trialsleft").append('<img src="img/hearts.png" class="lives">');
    }
}
function choosefruit(){
    $("#fruit").attr('src' , 'img/'+fruits[Math.round(5*Math.random())]+'.png');
}
});
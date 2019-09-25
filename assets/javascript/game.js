
$(document).ready(function () {

    // defining variables in order of page apperance
    var winCount = 0;
    var lossCount = 0;
    var userScore = 0
    var randomNumber = Math.floor(Math.random() * 120) + 19;
    var crystal1 = Math.floor(Math.random() * 12) + 1;
    var crystal2 = Math.floor(Math.random() * 12) + 1;
    var crystal3 = Math.floor(Math.random() * 12) + 1;
    var crystal4 = Math.floor(Math.random() * 12) + 1;


    $("#winScore").text("wins: " + winCount);
    $("#lossScore").text("losses: " + lossCount);
    $("#gameScore").text("randomNumber");
    $("#totalScore").text("userScore");
    console.log(yourtotalscore);
    console.log(crystal1);
    console.log(crystal2);
    console.log(crystal3);
    console.log(crystal4);



    //winning game function

    var gameWin = function () {
        winCount++;
        $("#winScore").text("wins: " + winCount);
        reset();
    }

    //Loosing game function

    var gameLoss = function () {
        lossCount++;
        $("#lossScore").text("loss: " + lossCount);
        reset();
    }

    //Crystal Function

    $("#crystal1").click(function () {
        userScore = userScore + crystal1;
        $("#totalScore").text(userScore);
        if (userScore === randomNumber) {
            gameWin();
        }
        else if (userScore > randomNumber) {
            gameLoss();
        }
    });

    $("#crystal2").click(function () {
        userScore = userScore + crystal2;
        $("#totalScore").text(userScore);
        if (userScore === randomNumber) {
            gameWin();
        }
        else if (userScore > randomNumber) {
            gameLoss();
        }
    });

    $("#crystal3").click(function () {
        userScore = userScore + crystal3;
        $("#totalScore").text(userScore);
        if (userScore === randomNumber) {
            gameWin();
        }
        else if (userScore > randomNumber) {
            gameLoss();
        }
    });

    $("#crystal4").click(function () {
        userScore = userScore + crystal4;
        $("#totalScore").text(userScore);
        if (userScore === randomNumber) {
            gameWin();
        }
        else if (userScore > randomNumber) {
            gameLoss();
        }

    });

    var reset = function () {
        userScore = 0;
        randomNumber = Math.floor(Math.random() * 120) + 19;
        crystal1= Math.floor(Math.random()*12)+1;
        crystal2= Math.floor(Math.random()*12)+1;
        crystal3= Math.floor(Math.random()*12)+1;
        crystal4= Math.floor(Math.random()*12)+1;
        $("#gameScore").text("randomNumber");
        $("#totalScore").text("userScore");
        console.log(randomNumber);
        console.log(userScore);
        console.log(crystal1);
        console.log(crystal2);
        console.log(crystal3);
        console.log(crystal4);

    };

    

}




























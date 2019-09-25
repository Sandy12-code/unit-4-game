// defining variables in order of page apperance

var gamestart = false
var target = 0;
var points = 0;
var wins = 0;
var losses = 0;
var crystalone = {
    value: 0
};
var crystaltwo = {
    value: 0
};
var crystalthree = {
    value: 0
};
var crystalfour = {
    value: 0
};
//random number generation function

function values(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

//generating random values for variables

//create random target number min = 19, max =120
target = values(19, 120);

//crystals values min = 1, max = 12
crystalone.value = values(1, 12);
crystaltwo.value = values(1, 12);
crystalthree.value = values(1, 12);
crystalfour.value = values(1, 12);

//verifying the crystal choices are diverse
function valuecheck() {
    if (crystalone.value === crystaltwo.value | crystalone.value === crystalthree.value | crystaltwo.value === crystalthree.value | crystaltwo.value === crystalfour.value | crystalthree.value === crystalfour.value) {
        crystalone.value = values(1, 12);
        crystaltwo.value = values(1, 12);
        crystalthree.value = values(1, 12);
        crystalfour.value = values(1, 12);

    }
}

//write game star logic

$(document).ready(function startgame() {
    gamestart = true;
    values();
    $('#target').html("<p>target: " + target + "</p>")
    valuecheck();
    console.log(crystalone);
    console.log(crystaltwo);
    console.log(crystalthree);
    console.log(crystalfour);
    console.log(gamestart);
});

$("#crystalone").on("click", function () {

    if (gamestart === true) {
        points += crystalone.value;
        // console.log(crystalone);
        $('#yourtotalscore').html("<p>Points: " + points + "</p>");
        if (points === target) {
            wins();
            $('#wins').html("<p>wins: " + wins + "</p>")
            console.log(wins);
        }

        else if (points > target) {
            losses();
            $('#losses').html("<p>losses: " + losses + "</p>")
            console.log(losses);
        }
        
    }
});


$("#crystaltwo").on("click", function () {

    if (gamestart === true) {
        points += crystaltwo.value;
        // console.log(crystaltwo);
        $('#yourtotalscore').html("<p>Points: " + points + "</p>");
        if (points === target) {
            wins();
            $('#wins').html("<p>wins: " + wins + "</p>")
            console.log(wins);
        }

        else if (points > target) {
            losses();
            $('#losses').html("<p>losses: " + losses + "</p>")
            console.log(losses);
        }
     
    }
});



$("#crystalthree").on("click", function () {

    if (gamestart === true) {
        points += crystalthree.value;
        // console.log(crystalthree);
        $('#yourtotalscore').html("<p>Points: " + points + "</p>");
        if (points === target) {
            wins();
            $('#wins').html("<p>wins: " + wins + "</p>")
            console.log(wins);
        }

        else if (points > target) {
            losses();
            $('#losses').html("<p>losses: " + losses + "</p>")
            console.log(losses);
        }
        
    }
});


$("#crystalfour").on("click", function () {

    if (gamestart === true) {
        points += crystalfour.value;
        // console.log(crystalfour);
        $('#yourtotalscore').html("<p>Points: " + points + "</p>");
        if (points === target) {
            wins();
            $('#wins').html("<p>wins: " + wins + "</p>")
            console.log(wins);
        }

        else if (points > target) {
            losses();
            $('#losses').html("<p>losses: " + losses + "</p>")
            console.log(losses);
        }
        
    }
});












































// $(document).ready(function () {

    // defining variables in order of page apperance
    // var gamestart = false
    // var winCount = 0;
    // var lossCount = 0;
    // var userScore = 0
    // var randomNumber = Math.floor(Math.random() * 120-19) + 19;
    // var crystal1 = Math.floor(Math.random() * 12) + 1;
    // var crystal2 = Math.floor(Math.random() * 12) + 1;
    // var crystal3 = Math.floor(Math.random() * 12) + 1;
    // var crystal4 = Math.floor(Math.random() * 12) + 1;


    // $("#winScore").text("wins: " + winCount);
    // $("#lossScore").text("losses: " + lossCount);
    // $("#gameScore").text("randomNumber");
    // $("#totalScore").text("userScore");
    // console.log(yourtotalscore);
    // console.log(crystal1);
    // console.log(crystal2);
    // console.log(crystal3);
    // console.log(crystal4);



    //winning game function

    // var gameWin = function () {
        // winCount++;
    //     $("#winScore").text("wins: " + winCount);
    //     reset();
    // }

    //Loosing game function

    // var gameLoss = function () {
    //     lossCount++;
    //     $("#lossScore").text("loss: " + lossCount);
    //     reset();
    // }

    //Crystal Function

    // $("#crystal1").click(function () {
    //     userScore = userScore + crystal1;
    //     $("#totalScore").text(userScore);
    //     if (userScore === randomNumber) {
    //         gameWin();
    //     }
    //     else if (userScore > randomNumber) {
    //         gameLoss();
    //     }
    // });

    // $("#crystal2").click(function () {
    //     userScore = userScore + crystal2;
    //     $("#totalScore").text(userScore);
    //     if (userScore === randomNumber) {
    //         gameWin();
    //     }
    //     else if (userScore > randomNumber) {
    //         gameLoss();
    //     }
    // });

    // $("#crystal3").click(function () {
    //     userScore = userScore + crystal3;
    //     $("#totalScore").text(userScore);
    //     if (userScore === randomNumber) {
    //         gameWin();
    //     }
    //     else if (userScore > randomNumber) {
    //         gameLoss();
    //     }
    // });

    // $("#crystal4").click(function () {
    //     userScore = userScore + crystal4;
    //     $("#totalScore").text(userScore);
    //     if (userScore === randomNumber) {
    //         gameWin();
    //     }
    //     else if (userScore > randomNumber) {
    //         gameLoss();
    //     }

    // });

//     var reset = function () {
//         userScore = 0;
//         randomNumber = Math.floor(Math.random() * 120-19) + 19;
//         crystal1= Math.floor(Math.random()*12)+1;
//         crystal2= Math.floor(Math.random()*12)+1;
//         crystal3= Math.floor(Math.random()*12)+1;
//         crystal4= Math.floor(Math.random()*12)+1;
//         $("#gameScore").text("randomNumber");
//         $("#totalScore").text("userScore");
//         console.log(randomNumber);
//         console.log(userScore);
//         console.log(crystal1);
//         console.log(crystal2);
//         console.log(crystal3);
//         console.log(crystal4);

//     };



// }




























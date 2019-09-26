// defining variables in order of page apperance

var gamestart = false
var target = 0;
var points = 0;
var wins = 0;
var losses = 0;
var stats = 0;
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

});

// winning game function

var win = function () {
    wins++;
    $("#wins").text(wins); alert("You Win!");

    reset();
}

//Loosing game function

var lose = function () {
    losses++;
    $("#losses").text(losses); alert("You Lost!");

    reset();
}

$("#crystalone").on("click", function () {

    if (gamestart === true) {
        points += crystalone.value;
    
        $('#yourtotalscore').html("<p>Points: " + points + "</p>");
        if (points === target) {
            win();

        }

        else if (points > target) {
            lose();

        }

    }
});


$("#crystaltwo").on("click", function () {

    if (gamestart === true) {
        points += crystaltwo.value;

        $('#yourtotalscore').html("<p>Points: " + points + "</p>");
        if (points === target) {
            win();

        }

        else if (points > target) {
            lose();

        }

    }
});



$("#crystalthree").on("click", function () {

    if (gamestart === true) {
        points += crystalthree.value;

        $('#yourtotalscore').html("<p>Points: " + points + "</p>");
        if (points === target) {
            win();

        }

        else if (points > target) {
            lose();

        }

    }
});


$("#crystalfour").on("click", function () {

    if (gamestart === true) {
        points += crystalfour.value;

        $('#yourtotalscore').html("<p>Points: " + points + "</p>");
        if (points === target) {
            win();

        }

        else if (points > target) {
            lose();

        }

    }
});

var reset = function () {
    points = 0;
    target = Math.floor(Math.random() * 120 - 19) + 19;
    crystalone.value = Math.floor(Math.random() * 12) + 1;
    crystaltwo.value = Math.floor(Math.random() * 12) + 1;
    crystalthree.value = Math.floor(Math.random() * 12) + 1;
    crystalfour.value = Math.floor(Math.random() * 12) + 1;
    $('#target').html("<p>target: " + target + "</p>")
    $('#yourtotalscore').html("<p>Points: " + points + "</p>");
    

};































































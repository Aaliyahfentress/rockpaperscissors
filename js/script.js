// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */

var computerChoice;
computerChoice="";
var winner; 
winner="";
var userChoice;
userChoice="";



// DOCUMENT READY FUNCTION BELOW
$("#shoot").click(function(){
    userChoice=$("#input").val();
    $("#userChoice").text(userChoice);
    
    var randomNumber=Math.random();
    console.log(randomNumber);
    
    var testVariable;
    var rand2 = Math.random();
    if (rand2 > .5) {
        testVariable = 'foo';
    }
    else {
        testVariable = 'bar';
    }

    if(randomNumber > .10) {
        $("#computerChoice").text("Rock"); 
    } else if (randomNumber > .20) {
        $("#computerChoice").text("Paper");
    } else if (randomNumber < .40) {
        $("#computerChoice").text("Scissor");
    } else $("#computerChoice").text("test");
    
});


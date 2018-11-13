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
var randomNumber=Math.random();



// DOCUMENT READY FUNCTION BELOW
$("#shoot").click(function(){
    userChoice=$("#input").val();
    $("#userChoice").text(userChoice);
    
});
console.log(randomNumber);
    if(randomNumber < .10) {
        $("#computerChoice").html("Rock"); 
    } else if (randomNumber > .20) {
        $("#computerChoice").html("Paper");
    } else if (randomNumber < .40) {
        $("#computerChoice").html("Scissor");
    }
    
 


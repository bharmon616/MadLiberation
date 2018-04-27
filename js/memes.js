// Javascript!!!


/*function FirstQuestion(){




} */


function doMadLib(){


	/* 
	Once upon a time, a young boy named (name1) 
	drove all the way to (place1). He went there
	to learn about (noun1). He arrived at his hotel,
    and he found his room, number (number1).
    He looked down the hall and saw a HUGE vending machine. 
	He could not decide what to get. He bought a (foodName1) for (cost1).
	Later that night, he really wanted to go to a sports event. He wanted
	to see the (team1) play. He arrived at the stadium and saw his favorite 
	player, (playerName1). He went over to talk to him, 
	but he ran away in fear. (name1)’s life is sad.


*/

alert("Here is your madLib");

var name1 = prompt("Please tell me a name:");
var place1 = prompt("Please tell me a place:");
var noun1 = prompt("Please tell me a plural noun:");
var number1 = prompt("Please tell me a number:");
var foodName1 = prompt("Please tell me a food name:");
var cost1 = prompt("Please tell me a cost (in dollars)");
var team1 = prompt("Please tell me a team name:");
var playerName1 = prompt("Please tell me a player name:");

alert("Your story is ready to view below");


var story = 
	"Once upon a time, a young boy named <span class='single'>" + name1 + 
	"</span> drove all the way to <span class='single'>" + place1 + "</span> . <br> <br>He went there to learn about <span class='single'>" + noun1 + 
	"</span>. He arrived at his hotel, and he found his room, number <span class='single'>" + number1 + 
	"</span> . He looked down the hall and saw a HUGE vending machine. He could not decide what to get. He bought a <span class='single'>"
	 + foodName1 + "</span> for <span class='single'>" + cost1 + "</span> . <br> <br> Later that night, he really wanted to go to a sports event. He wanted to see the <span class='single'>" 
	 + team1 + "</span>  play. He arrived at the stadium and saw his favorite player <span class='single'>" 
	 + playerName1 + "</span> . He went over to talk to him, but he ran away in fear. <br> <br><span class='single'>" + name1 + "</span>'s life is sad.";


	 document.getElementById("finalMadLib").innerHTML = story;


	











}








//Greating Global Variables
let scores = [0,0];
let roundScore = 0;
let activePlayer = 0;
//Hiding the dice  
document.querySelector('.dice').style.display = 'none';
//Action on bottom click 
document.querySelector('.btn-roll').addEventListener('click', function() {
	//CurrentBet var.
	let currentBet = document.querySelector('#current-'+activePlayer);
	//Creating random number
 	let dice = Number(Math.floor(Math.random()*6) + 1);
 	//Picking Dice div
 	let diceDOM = document.querySelector('.dice');
 	//Showing Dice div
 	diceDOM.style.display = 'block';
 	//Showing the appropriate image
 	diceDOM.src = 'dice-'+ dice +'.png';
 	//Writing down the dice number to current div
 	currentBet.innerHTML = dice;
 	// update the round if the rolled number was't a 1
 	if (dice !== 1) {
 		//add score
 		document.querySelector('.dice').style.opacity = 1;
 		roundScore += dice;
 		currentBet.innerHTML = roundScore;

 	} else {
 		//Next player
 		// if (activePlayer === 0) 
 		// 	{activePlayer = 1;} 
 		// else {activePlayer = 0;}
 		nextPlayer();
 		//document.querySelector('.player-0-panel').classList.remove('active');
 		//document.querySelector('.player-1-panel').classList.add('active');
 	}
});
document.querySelector('.btn-hold').addEventListener('click', function() {
	// Current Score ==> Player score
	scores[activePlayer] += roundScore;
	// Update UI
	document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];
	// Check if Player won game
	if (scores[activePlayer] >= 100) {
		var playerName;
		if (activePlayer == 0) {
			playerName = 'The Player #1'
		} else {
		playerName= "The Player #2" 
		}
		alert(playerName+" has won the GAME");
		location.reload(true);
		}
	// Next Player
	nextPlayer()


});
//Next player Function
function nextPlayer() {
	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
 	roundScore = 0;
 	document.getElementById('current-0').textContent = '0';
 	document.getElementById('current-1').textContent = '0';
 	document.querySelector('.player-0-panel').classList.toggle('active');
 	document.querySelector('.player-1-panel').classList.toggle('active');
 	fadeOut('.dice')

}
//Animated dice hiding
function fadeOut(el) {
  
	var opacity = 1;
  
	var timer = setInterval(function() {
    
		if(opacity <= 0.1) {
		
			clearInterval(timer);
			document.querySelector(el).style.display = "none";
	
		}
	
		document.querySelector(el).style.opacity = opacity;
     
		opacity -= opacity * 0.05;
   
	}, 30);

}
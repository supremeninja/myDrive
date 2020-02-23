//Greating Global Variables
let scores = [0,0];
let roundScore = 0;
let activePlayer = 0;
let lastDice = 0;
let scoreWin;
//Hiding the dice  
document.getElementById('dice-1').style.display = 'none';
document.getElementById('dice-2').style.display = 'none';
//Action on bottom click 
document.querySelector('.btn-roll').addEventListener('click', function() {
	//CurrentBet var
	let currentBet = document.querySelector('#current-'+activePlayer);
	//Creating random number
	let diceOne = Number(Math.floor(Math.random()*6) + 1);
	let diceTwo = Number(Math.floor(Math.random()*6) + 1);
 	//Showing Dice div
 	document.getElementById('dice-1').style.display = 'block';
 	document.getElementById('dice-2').style.display = 'block';
 	//Showing the appropriate image
 	document.getElementById('dice-1').src = 'dice-'+ diceOne +'.png';
 	document.getElementById('dice-2').src = 'dice-'+ diceTwo +'.png';
 	//Writing down the dice number to current div
 	currentBet.innerHTML = diceOne+diceTwo;


 	// IN CASE of adding EXTRA RULES
 	//reset the score if player gets two 6 in a row
 	// if (dice === 6 && lastDice === 6) {
 	// 	//player loses score;
 	// 	scores[activePlayer] = 0;
 	// 	document.querySelector('#score-'+activePlayer).textContent = '0';
 	// 	nextPlayer(); 	
  	// 	}


  	// update the round if the rolled number was't a 1
  	if (diceOne !== 1 && diceTwo !==1) {
 		//add score
 		document.getElementById('dice-1').style.opacity = 1;
		document.getElementById('dice-2').style.opacity = 1;
 		roundScore += diceOne+diceTwo;
 		currentBet.innerHTML = roundScore;
 		

 	} else {
 		//Next player
 		nextPlayer();
 	}

});
document.querySelector('.btn-hold').addEventListener('click', function() {
	// Current Score ==> Player score
	scores[activePlayer] += roundScore;
	// Update UI
	document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];

	let input = document.querySelector('.btn-score').value;
	//Undefined, 0, null or '' are COERCED to fasle
	if (input) {
		scoreWin = input;
	} else {
		scoreWin = 100;
	}

	// Check if Player won game
	if (scores[activePlayer] >= scoreWin) {
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
 	fadeOut();

}
//Animated dice hiding
function fadeOut() {
  
	var opacity = 1;
  
	var timer = setInterval(function() {
    
		if(opacity <= 0.1) {
		
			clearInterval(timer);
			document.getElementById('dice-1').style.display = 'none';
 			document.getElementById('dice-2').style.display = 'none';
	
		}
	
		document.getElementById('dice-1').style.opacity = opacity;
		document.getElementById('dice-2').style.opacity = opacity;
     
		opacity -= opacity * 0.15;
   
	}, 10);

}
document.querySelector('.btn-new').addEventListener('click', function() {
location.reload(true);

});


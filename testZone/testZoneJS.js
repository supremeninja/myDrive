const deck = [
"1","2","3","4","5","6","7","8","9","10","J","Q","K","A"
			 ]
const deckSuit = ['clubs', 'spades', 'hears', 'diamonds']

function getCard() 
{
	let cardNumber = deck[Math.floor(Math.random()*deck.length)];
	let cardSuit = deckSuit[Math.floor(Math.random()*deckSuit.length)];
	return 'it\'s ' + cardNumber + ' of ' + cardSuit;
}
console.log(getCard());
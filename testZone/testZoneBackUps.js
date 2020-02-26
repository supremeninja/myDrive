// loop through non-interating object
const movieRating = {
	dog: 1,
	cat: 2,
	rat: -1
}

for (let r of Object.keys(movieRating)) {
	console.log(r, movieRating[r]);
}



// loop (for of)
const magicSquare = [ [1,1,1], [2,2,2], [3,3,3]];
let sum = 0;
for (r of magicSquare){
	for(t of r) {
			sum += t;
	}
}

console.log(sum);


// loop (for in)
const moneyAwards = {
	dog: 100,
	cat: 1000,
	rat: 50
}
let summ = 0;
for (let amount in moneyAwards) {
		summ +=moneyAwards[amount];

}
console.log(`The cat-rat-dog team won ${summ}`);



//reverseName
let name = 'dog';
let reverseName = '';
for(let i = name.length-1; i>=0; i--){
		reverseName += name[i];
}
console.log(reverseName);


//argNumber
function avgNum(num) 
{
let total = 0;
	for(let n of num) {	total += n;	}
	return total/num.length;
}
console.log(avgNum([50, 45, 40]));


//Pangram
let pan = 'The quick brown fox jumps over the lazy dog'.toLowerCase();
function isPangram(str) 
{
		for (let char of 'abcdefghijklmnopqrstuvwxyz') {
			if(str.indexOf(char) === -1) {
				return 'It\'s not a Pangram!';
			}
		}
return 'It\'s a Pangram';


//Pick a random Card
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
}
console.log(isPangram(pan));

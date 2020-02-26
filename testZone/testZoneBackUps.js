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
} console.log(sum);

// loop (for in)
const moneyAwards = {
	dog: 100,
	cat: 1000,
	rat: 50
}
let summ = 0;
for (let amount in moneyAwards) {
		summ +=moneyAwards[amount];
} console.log(`The cat-rat-dog team won ${summ}`);

//reverseName
let name = 'dog';
let reverseName = '';
for(let i = name.length-1; i>=0; i--){
		reverseName += name[i];
}
console.log(reverseName);

082//ValidPassword 
function isValidPassword(password, username) {
	const tooShort = password.length < 8;
	const hasSpace = password.indexOf(' ') !== -1;
	const tooSimilar = password.indexOf(username) !== -1;
	if (tooShort || hasSpace || tooSimilar) return false;
	return true;
	console.log(isValidPassword('password', 'password'));

083//argNumber 
function avgNum(num) 
{
let total = 0;
	for(let n of num) {	total += n;	}
	return total/num.length;
} console.log(avgNum([50, 45, 40]));

084//Pangram 
let pan = 'The quick brown fox jumps over the lazy dog'.toLowerCase();
function isPangram(str) 
{
		for (let char of 'abcdefghijklmnopqrstuvwxyz') {
			if(str.indexOf(char) === -1) {
				return 'It\'s not a Pangram!';
			}
		}
return 'It\'s a Pangram';
} console.log(isPangram(pan));


085//Pick a random Card 
const deck = [
"1","2","3","4","5","6","7","8","9","10","J","Q","K","A"
			 ]
const deckSuit = ['clubs', 'spades', 'hears', 'diamonds']

function getCard() 
{
	let cardNumber = deck[Math.floor(Math.random()*deck.length)];
	let cardSuit = deckSuit[Math.floor(Math.random()*deckSuit.length)];
	return 'it\'s ' + cardNumber + ' of ' + cardSuit;
} console.log(getCard());
085// the better verion 
const deck = [
"1","2","3","4","5","6","7","8","9","10","J","Q","K","A"
			 ]
const deckSuit = ['clubs', 'spades', 'hears', 'diamonds']
function pick(arr) {
	const pickInd = Math.floor(Math.random()*arr.length);
	return arr[pickInd];
} console.log('it\'s ' + pick(deck) + ' of ' + pick(deckSuit));


092// Returning Fuctions 
function makeBetweenFunc(min, max) {
	return function(val) {
		return val >= min && val <= max;
	}
}
const inAgeRange = makeBetweenFunc(16,22);//<=(15)
isAgeRange(15);
//ПОТОМУ ЧТО:
//const isAgeRange = function(val) {return val >= min && val <= max; }
//isAgeRange(15);
console.log(inAgeRange);

096// ARRAYS METHODS//
//forEach
const numbers = [20,21,22,23,24,25];
function printTriple(n) {
	console.log(n*3);
}
numbers.forEach(printTriple); // number.ForEach(function(n) {})
//second
const books = [
{
	title: "catcat",
	'no-title': 0
},
{
	title: 'beloved cat',
	'no-title': 1
},
{
	title: 'very beloved cat',
	'no-title': 2
}
]
books.forEach(function (book){
	console.log(book.title);
});
//else possible as
// for (let i=0; i < books.length; i++) {
//console.log(books[i].title);}

097//ARRAY METHODS MAP
const arrOfLols = ['lol', 'rofl', 'omg', 'ttyl'];
const caps = arrOfLols.map(function (t) { return t.toUpperCase();});
console.log(caps);
//ANOTHER ONE MAP
const arrOfLols = ['lol', 'rofl', 'omg', 'ttyl'];
const caps = arrOfLols.map(function (t) { 
	return t.toUpperCase().split('').join('.');
}); console.log(caps);

098-099//ARROW FUNCTION
const square = x/*(x, y), () - no arg*/ => {
	return x*x;
} console.log(square(5));
//AW THE SAME AS ABOVE
const square = x => x*x; console.log(square(5));
//AW
const digits = [1,5,10,20,30,40];
const doubleDigits = digits.map( x => x*2);
const parityList = digits..map(x => { n%2===0? 'even' : 'odd'});
console.log(doubleDigits)

100//ARRAY METHOD FIND
const movies = ['kingStiv','Mr.Siphson','Mrs.supreme'];
let movie = movies.find(movie => /*return*/ movie.includes(Mrs.));
console.log(movie);
101//Array method FILTER CREATES a new array
const nums = [1,2,3,4,5,6,7,8,9];
const odds = num.filter(n => {
	return n%2 ===1; //our callback returns true of false if it true n is added to the filtered array
});
[1,3,5,7,9]
const smallNums = nums.filter(n => n<5);
//[1,2,3,4]
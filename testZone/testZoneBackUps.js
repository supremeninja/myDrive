01 [Object.keys(arg)]// loop through non-interating object
const movieRating = {
	dog: 1,
	cat: 2,
	rat: -1
}
for (let r of Object.keys(movieRating)) {
	console.log(r, movieRating[r]);
}

[ForOf]
const magicSquare = [ [1,1,1], [2,2,2], [3,3,3]];
let sum = 0;
for (r of magicSquare){
	for(t of r) {
			sum += t;
	}
} console.log(sum);

02 [ForIn] // loop (for in) ITERATES THROUGHT OBJECT IN JS (key - dog cat, moneyAwards[key] - 100,1000,50)
const moneyAwards = {
	dog: 100,
	cat: 1000,
	rat: 50
}
let summ = 0;
for (let amount in moneyAwards) {
		summ +=moneyAwards[amount];
} console.log(`The cat-rat-dog team won ${summ}`);

03 //reverseName
let name = 'dog';
let reverseName = '';
for(let i = name.length-1; i>=0; i--){
		reverseName += name[i];
}
console.log(reverseName);

====================================8+ sections==============================================

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
// the better verion 
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

********************* ARRAYS METHODS ****************************

096 [forEach]

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

097 [MAP] //array method - CREATS NEW ARRAY

const arrOfLols = ['lol', 'rofl', 'omg', 'ttyl'];
const caps = arrOfLols.map(function (t) { return t.toUpperCase();});
console.log(caps);
//ANOTHER ONE MAP
const arrOfLols = ['lol', 'rofl', 'omg', 'ttyl'];
const caps = arrOfLols.map(function (t) { 
	return t.toUpperCase().split('').join('.');
}); console.log(caps);

098-099 [ARROW FUNCTION] 

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

0100 [FIND] //Array method

const movies = ['kingStiv','Mr.Siphson','Mrs.supreme'];
let movie = movies.find(movie => /*return*/ movie.includes(Mrs.));
console.log(movie);

0101 [FILTER] //Array method FILTER CREATES a new array

const nums = [1,2,3,4,5,6,7,8,9];
const odds = num.filter(n => {
	return n%2 ===1; //our callback returns true of false if it true n is added to the filtered array
});
[1,3,5,7,9]
const smallNums = nums.filter(n => n<5);
//[1,2,3,4]
//ANOTHER EXAMPLE OF FILTER ARRAY
const books = [{
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'Changing My Mind',
    authors: ['Zadie Smith'],
    rating: 3.83,
    genres: ['nonfiction', 'essays']
  },
  {
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42,
    genres: ['fiction', 'graphic novel', 'fantasy']
  },
  {
    title: 'American Gods',
    authors: ['Neil Gaiman'],
    rating: 4.11,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'A Gentleman in Moscow',
    authors: ['Amor Towles'],
    rating: 4.36,
    genres: ['fiction', 'historical fiction']
  },
  {
    title: 'The Name of the Wind',
    authors: ['Patrick Rothfuss'],
    rating: 4.54,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'The Overstory',
    authors: ['Richard Powers'],
    rating: 4.19,
    genres: ['fiction', 'short stories']
  },
  {
    title: 'The Way of Kings',
    authors: ['Brandon Sanderson'],
    rating: 4.65,
    genres: ['fantasy', 'epic']
  },
  {
    title: 'Lord of the flies',
    authors: ['William Golding'],
    rating: 3.67,
    genres: ['fiction']
  }
]
//All books rated over 4.3:
const goodBooks = books.filter(b => b.rating > 4.3);
// All books with fantasy as a genre:
const fantasyBooks = books.filter(book => (
  book.genres.includes('fantasy')
))
// all books that are either short stories or essays:
const shortForm = books.filter(book => (
  book.genres.includes('short stories') || book.genres.includes('essays')
))
// Simple search functionality:
const query = 'The';
const results = books.filter(book => {
  const title = book.title.toLowerCase();
  return title.includes(query.toLowerCase())
});

0102 [EVERY] //array method

const words = ["dog", 'dig', 'log', 'bag', 'wag'];

//Is every word 3 characters long?
const all3Letters = words.every(word => word.length === 3); //true

// Do all words end in 'g'?
const allEndInG = words.every(word => {
  const last = word.length - 1;
  return word[last] === 'g'
}); //true

//Does at least 1 book start with 'd'?
const someStartWithD = words.some(word => word[0] === 'd');//true

// Do all words start with 'd'?
const allStartWithD = words.every(word => word[0] === 'd');//fase

const books = [{
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'Changing My Mind',
    authors: ['Zadie Smith'],
    rating: 3.83,
    genres: ['nonfiction', 'essays']
  },
  {
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42,
    genres: ['fiction', 'graphic novel', 'fantasy']
  },
  {
    title: 'American Gods',
    authors: ['Neil Gaiman'],
    rating: 4.11,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'A Gentleman in Moscow',
    authors: ['Amor Towles'],
    rating: 4.36,
    genres: ['fiction', 'historical fiction']
  },
  {
    title: 'The Name of the Wind',
    authors: ['Patrick Rothfuss'],
    rating: 4.54,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'The Overstory',
    authors: ['Richard Powers'],
    rating: 4.19,
    genres: ['fiction', 'short stories']
  },
  {
    title: 'The Way of Kings',
    authors: ['Brandon Sanderson'],
    rating: 4.65,
    genres: ['fantasy', 'epic']
  },
  {
    title: 'Lord of the flies',
    authors: ['William Golding'],
    rating: 3.67,
    genres: ['fiction']
  }
]
//Are all books rated 3.5 or higher?
const allGoodBooks = books.every(book => book.rating > 3.5); //true

//Do any books have 2 authors?
const any2Authors = books.some(book => book.authors.length === 2) //true

0105 [SORT] //Хоть тут все понятно

0106 [REDUCE]//A LOT OF REDUCE (exp. of finding sum)

[3,5,7,9,11].reduce((accumulator/*TOTAL:stores the result*/, currentValue/*stores each element per time*/) =>
{
	return accumulator + currentValue;
	});
//(exp. of finding max val)
const topScore = [3,5,7,9,11].reduce((max, currVal) => {
	if (currVal > max) return currVal;
	return max;
});
//and a shorter way to do it w/ Math.max
const topScore = [3,5,7,9,11].reduce((max,currVal) => Math.max(max, currVal));

//still REDUCE
const votes = ['y', 'y', 'y', 'y', 'y', 'n', 'n', 'n', 'n', 'n', 'y', 'y'];

const calcVotes = votes.reduce((sum, val) => {
if(sum[val]) {sum[val]++} else {sum[val] = 1;}
return sum;
}, emptyObj);
//prosche
const calcVotes = votes.reduce((sumObj, val) => {
sumObj[val] = (sumObj[val] || 0) + 1;
return sumObj;
}, {});

console.log(calcVotes);

//else
const books = [{
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'Changing My Mind',
    authors: ['Zadie Smith'],
    rating: 3.83,
    genres: ['nonfiction', 'essays']
  },
  {
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42,
    genres: ['fiction', 'graphic novel', 'fantasy']
  },
  {
    title: 'American Gods',
    authors: ['Neil Gaiman'],
    rating: 4.11,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'A Gentleman in Moscow',
    authors: ['Amor Towles'],
    rating: 4.36,
    genres: ['fiction', 'historical fiction']
  },
  {
    title: 'The Name of the Wind',
    authors: ['Patrick Rothfuss'],
    rating: 4.54,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'The Overstory',
    authors: ['Richard Powers'],
    rating: 4.19,
    genres: ['fiction', 'short stories']
  },
  {
    title: 'A Truly Horrible Book',
    authors: ['Xavier Time'],
    rating: 2.18,
    genres: ['fiction', 'garbage']
  },
  {
    title: 'The Way of Kings',
    authors: ['Brandon Sanderson'],
    rating: 4.65,
    genres: ['fantasy', 'epic']
  },
  {
    title: 'Lord of the flies',
    authors: ['William Golding'],
    rating: 3.67,
    genres: ['fiction']
  }
]
// To group books by rating: 
const groupedByRatings = books.reduce((groupedBooks, book) => {
  const key = Math.floor(book.rating);
  if (!groupedBooks[key]) groupedBooks[key] = [];
  groupedBooks[key].push(book)
  return groupedBooks;
}, {})
console.log(groupedByRatings);


0108 [Default Value of argument]

function allo(greating = "Privet", who) {}

0110 [SPREAD]

let arr = [1,2,3]
let arr2 = [...arr,4,5,6] //=[1,2,3,4,5,6]
[..."abcdefg"] // ['a','b','c'...]
0112 [ARGUMENTS]// ARGUMENTS method ISNT WORKING WITH ARROW FUNCTIONS const mult = () => { };

function sum() {
const arr = [...arguments];
  return /*new Function*/arr.reduce((total, currVal) => /*return*/ total + currVal);
}
console.log(sum(1,2,3,4,5));

0113 [REST] //COLECTS TO REAL ARRAY, + collects remainings

function FullName(first, last, ...least) {
  console.log(first);
  console.log(last);
  console.log(least);
}

FullName('Bohdan', 'Harkavyi', 'other stuff', 'is', 'going', 'to', 'some', 'leastArray');
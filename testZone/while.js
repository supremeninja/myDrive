const target = Math.floor(Math.random()*10 +1);
let guess = Math.floor(Math.random()*10 +1);
while (guess !== target) {
	guess = Math.floor(Math.random()*10 +1);
	console.log("Guessing");
}
console.log(`Target: ${target} \n Guess: ${guess}`);
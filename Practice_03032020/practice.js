// FOR OF/IN LOOPS #############################################

// const jeopardyWinnings = {
// 	regularPlay: 2522700,
// 	watsonChallenge: 300000,
// 	tournamentOfChampions: 500000,
// 	battleOfTheDecades: 100000
// };

// for (let prop in jeopardyWinnings) {
// 	console.log(prop);
// 	console.log(jeopardyWinnings[prop]);
// }

// let total = 0;
// for (let prop in jeopardyWinnings) {
// 	total += jeopardyWinnings[prop];
// }

// console.log(`Ken Jennings Total earnings: ${total}`);

// Write isValidPassword function ##############################
// accepts 2 args: password and username
// Password must:
// - be at least 8 characters
// - cannot contain spaces
// - cannot contain username
// If all requirements are met, return true.
// Otherwise : false

// function isValidPassword(password, username) {
// 	if (password.length < 8) {
// 		return false;
// 	}
// 	if (password.indexOf(' ') !== -1) {
// 		return false;
// 	}
// 	if (password.indexOf(username) !== -1) {
// 		return false;
// 	}
// 	return true;
// }

// console.log(isValidPassword('89Fjj1nms', 'dogLubr'));
// console.log(isValidPassword('dogLuvr123!', 'dogLuvr'));
// console.log(isValidPassword('hello1', 'dogLuvr'));
// console.log(isValidPassword('89Fjj1n ms', 'dogLubr'));

// Write a function to find the average value in an array of numbers #################

// function averageValue(arr) {
// 	let total = 0;
// 	for (let nums of arr) {
// 		total += nums;
// 	}
// 	let average = total / arr.length;
// 	console.log(average);
// }

// averageValue([ 50, 0 ]);
// averageValue([ 75, 76, 80, 95, 100 ]);

// Write a function called isPangram, which checks to see if a given sentence
// contains every letter of the aplhabet. Ignore casing!

// const pangram1 = 'The five boxing wizards jump quickly.';

// function isPangram(string) {
// 	let lowerCased = string.toLowerCase();
// 	for (let char of 'abcdefjhijklmnopqrstuvwxyz') {
// 		if (lowerCased.indexOf(char) === -1) {
// 			return false;
// 		}
// 	}
// 	return true;
// }

// console.log(isPangram(pangram1));

// SAME FUNCTION REFACTORED WITH THE INCLUDES METHOD! ########################

// const pangram1 = 'The five boxing wizards jump quickly.';

// function isPangram(string) {
// 	let lowerCased = string.toLowerCase();
// 	for (let char of 'abcdefjhijklmnopqrstuvwxyz') {
// 		if (!lowerCased.includes(char)) {
// 			return false;
// 		}
// 	}
// 	return true;
// }

// console.log(isPangram(pangram1));

// Write a getCard() function which returns a random playing card object ###################

// const cardValue = [ '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A' ];
// const cardSuit = [ 'clubs', 'spades', 'hearts', 'diamonds' ];

// function getCard() {
// 	const cardVal = cardValue[Math.floor(Math.random() * cardValue.length)];
// 	const suitVal = cardSuit[Math.floor(Math.random() * cardSuit.length)];
// 	cardObj = {
// 		value: cardVal,
// 		suit: suitVal
// 	};
// 	console.log(cardObj);
// }
// getCard();

// getCard() REFACTOR ##############################################################
// Created re-usable random array picker to dry up Math function
// Threw the values of our pick functions straight into the object to return.

function randomize(arr) {
	const idx = Math.floor(Math.random() * arr.length);
	return arr[idx];
}

const cardValue = [ '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A' ];
const cardSuit = [ 'clubs', 'spades', 'hearts', 'diamonds' ];

function getCard() {
	cardObj = {
		value: randomize(cardValue),
		suit: randomize(cardSuit)
	};
	console.log(cardObj);
}
getCard();

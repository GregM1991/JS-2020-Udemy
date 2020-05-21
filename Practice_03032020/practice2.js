// // SOME FUNCTIONS WITH FUNCTIONS AS ARGUMENTS ####################

// function rage() {
// 	console.log('I HATE EVERTHING');
// }

// function cry() {
// 	console.log('BOO HOO I AM SAD');
// }

// function repeatNTimes(action, num) {
// 	for (let i = 0; i < num; i++) {
// 		action();
// 	}
// }

// // repeatNTimes(rage, 13);

// function pickOne(f1, f2) {
// 	let rand = Math.random();
// 	if (rand < 0.5) {
// 		f1();
// 	} else {
// 		f2();
// 	}
// }

// pickOne(rage, cry);

// // FUNCTIONS BEING RETURNED FROM FUNCTIONS ######################

// function multiplyBy(num) {
// 	return function(x) {
// 		return x * num;
// 	};
// }

// const triple = multiplyBy(3);
// const quadruple = multiplyBy(4);

// function makeBetweenFunc(x, y) {
// 	return function(num) {
// 		return num >= x && num <= y;
// 	};
// }

// const isChild = makeBetweenFunc(0, 18);
// const isNineties = makeBetweenFunc(1990, 1999);
// const isNiceWeather = makeBetweenFunc(16, 24);

// ARRAY.EACH ##################################

// numbers = [ 21, 22, 23, 24, 25, 26, 27 ];

// numbers.forEach(function(nums, idx) {
// 	console.log(idx, nums * 2);
// });

// for (let num of numbers) {
// 	console.log(num * 2);
// }

// ARRAY.MAP, WITH A LIL BIT O' ARROW FUNCTION LEARNS #####

// const books = [
// 	{
// 		title: 'Good Omens',
// 		authors: [ 'Terry Pratchett', 'Neil Gaiman' ],
// 		rating: 4.25
// 	},
// 	{
// 		title: 'Bone: The Complete Edition',
// 		authors: [ 'Jeff Smith' ],
// 		rating: 4.42
// 	},
// 	{
// 		title: 'American Gods',
// 		authors: [ 'Neil Gaiman' ],
// 		rating: 4.11
// 	},
// 	{
// 		title: 'A Gentleman in Moscow',
// 		authors: [ 'Amor Towles' ],
// 		rating: 4.36
// 	}
// ];

// const texts = [ 'rofl', 'lol', 'omg', 'ttyl' ];
// const caps = texts.map(function(t) {
// 	return t.toUpperCase();
// });

// console.log(caps);

// const numbers = [ 20, 21, 22, 23, 24, 25, 26, 27 ];
// const words = [ 'asap', 'byob', 'rsvp', 'diy' ];

// const numbersDoubled = numbers.map(function(n) {
// 	return n * 2;
// });

// const numDetail = numbers.map(function(n) {
// 	return {
// 		value: n,
// 		isEven: n % 2 === 0
// 	};
// });

// const abbrevs = words.map(function(word) {
// 	return word.toUpperCase().split('').join('.');
// });

// const bookTitles = books.map((b) => {
// 	return b.title;
// });

// const square = function(x) {
// 	return x * x;
// };

// const square = x => {
// 	return x * x;
// };

const greet = () => {
	console.log('Hi');
};

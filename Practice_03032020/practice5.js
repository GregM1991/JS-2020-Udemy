// // Shorthand Object Properties
// const getStats = (arr) => {
// 	const max = Math.max(...arr);
// 	const min = Math.min(...arr);
// 	const sum = arr.reduce((sum, r) => sum + r);
// 	const avg = sum / arr.length;
// 	return {
// 		max,
// 		min,
// 		sum,
// 		avg
// 	};
// };

// const reviews = [ 4.5, 5.0, 3.44, 2.8, 3.5, 4.0, 3.5 ];

// const stats = getStats(reviews);

// // Computed Properties
// const role = 'host';
// const person = 'Jools Holland';
// const role2 = 'Director';
// const person2 = 'James Cameron';

// const team = {
// 	[role]: person,
// 	[role2]: person2
// };

// // Methods
// const add = function(x, y) {
// 	return x + y;
// };

// const math = {
// 	add: function(x, y) {
// 		return x + y;
// 	},
// 	multiply: function(x, y) {
// 		return x * y;
// 	}
// };

// // Shorter syntax for methods
// const auth = {
// 	username: 'Tommyboy',
// 	login() {
// 		console.log('Logged you in!');
// 	},
// 	logout() {
// 		console.log('Goodbye!');
// 	}
// };

// The keyword this
function sayHi() {
	console.log('HI');
	console.log(this);
}

const greet = function() {
	console.log(this);
};

const person = {
	first: 'Cherilyn',
	last: 'Sarkisian',
	nickName: 'Cher',
	fullName() {
		const { first, last, nickName } = this;
		console.log(`${first} ${last} AKA: ${nickName}`);
	}
};

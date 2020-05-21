// Shorthand Object Properties
const getStats = (arr) => {
	const max = Math.max(...arr);
	const min = Math.min(...arr);
	const sum = arr.reduce((sum, r) => sum + r);
	const avg = sum / arr.length;
	return {
		max,
		min,
		sum,
		avg
	};
};

const reviews = [ 4.5, 5.0, 3.44, 2.8, 3.5, 4.0, 3.5 ];

const stats = getStats(reviews);

// Computed Properties
const role = 'host';
const person = 'Jools Holland';
const role2 = 'Director';
const person2 = 'James Cameron';

const team = {
	[role]: person,
	[role2]: person2
};

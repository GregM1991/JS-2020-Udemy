console.log('Hello world');

function giveMeFour(a, b, c, d) {
	console.log('a', a);
	console.log('b', b);
	console.log('c', c);
	console.log('d', d);
}

const colors = [ 'red', 'orange', 'yellow', 'green' ];

const feline = {
	legs: 4,
	family: 'Felidae'
};

const canine = {
	family: 'Caninae',
	furry: true
};

const dog = {
	...canine,
	isPet: true,
	adorable: true
};

const houseCat = {
	...feline,
	isGrumpy: true,
	personality: 'unpredictable'
};

function fullName(first, last, ...titles) {
	console.log('first', first);
	console.log('last', last);
	console.log('titles', titles);
}

const multiply = (...nums) => nums.reduce((total, currVal) => total * currVal);

const raceResults = [
	'Eliud Kipchoge',
	'Freyisa Lelisa',
	'Galen Rupp',
	'Ghirmay Ghebreslassie',
	'Alphonce Simbu',
	'Jared Ward'
];

const [ gold, silver, bronze ] = raceResults;
const [ first, , , fourth ] = raceResults;

const runner = {
	first: 'Eliud',
	last: 'Kipchoge',
	country: 'Kenya',
	title: 'Elder of the Order of the Golden Heart of Kenya'
};

const { first, last, time } = runner;

const { country: nation, title: honorific } = runner;

const results = [
	{
		first: 'Eliud',
		last: 'Kipchoge',
		country: 'Kenya'
	},
	{
		first: 'Feyisa',
		last: 'Lilesa',
		country: 'Ethiopia'
	},
	{
		first: 'Galen',
		last: 'Rupp',
		country: 'United States'
	}
];

const [ { first: goldWinner }, { country } ] = results;

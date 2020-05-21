const books = [
	{
		title: 'Good Omens',
		authors: [ 'Terry Pratchett', 'Neil Gaiman' ],
		rating: 4.25,
		genres: [ 'fiction', 'fantasy' ]
	},
	{
		title: 'Changing My Mind',
		authors: [ 'Zadie Smith' ],
		rating: 3.83,
		genres: [ 'nonfiction', 'essays' ]
	},
	{
		title: 'Bone: The Complete Edition',
		authors: [ 'Jeff Smith' ],
		rating: 4.42,
		genres: [ 'fiction', 'graphic novel', 'fantasy' ]
	},
	{
		title: 'American Gods',
		authors: [ 'Neil Gaiman' ],
		rating: 4.11,
		genres: [ 'fiction', 'fantasy' ]
	},
	{
		title: 'A Gentleman in Moscow',
		authors: [ 'Amor Towles' ],
		rating: 4.36,
		genres: [ 'fiction', 'historical fiction' ]
	},
	{
		title: 'The Name of the Wind',
		authors: [ 'Patrick Rothfuss' ],
		rating: 4.54,
		genres: [ 'fiction', 'fantasy' ]
	},
	{
		title: 'The Overstory',
		authors: [ 'Richard Powers' ],
		rating: 4.19,
		genres: [ 'fiction', 'short stories' ]
	},
	{
		title: 'The Way of Kings',
		authors: [ 'Brandon Sanderson' ],
		rating: 4.65,
		genres: [ 'fantasy', 'epic' ]
	},
	{
		title: 'Lord of the flies',
		authors: [ 'William Golding' ],
		rating: 3.67,
		genres: [ 'fiction' ]
	}
];

// // EVERY && SOME ##########################################

// const words = [ 'dog', 'dig', 'log', 'bag', 'wat' ];

// const all3Lets = words.every((word) => word.length === 3);
// const endsInG = words.every((word) => {
// 	const last = word.length - 1;
// 	return word[last] === 'g';
// });

// const startsWithD = words.some((word) => word[0] === 'd');

// const allGoodBooks = books.every((book) => book.rating > 3.5);

// const any2Authors = books.some((book) => book.authors.length === 2)

// SORT #####################################################

// const prices = [ 400.5, 3000, 99.99, 35.99, 12.0, 9500 ];

// const ascSort = prices.slice().sort((a, b) => a - b);
// const descSort = prices.slice().sort((a, b) => b - a);
// const badSort = prices.slice().sort();

// books.sort((a, b) => b.rating - a.rating);

// REDUCE ####################################################

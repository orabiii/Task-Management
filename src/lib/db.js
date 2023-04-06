import Dexie from 'dexie';

export const db = new Dexie('myDatabase');
db.version(1).stores({
	tasks: '++id, category, title ,description, date' // Primary key and indexed props
});

const dummyData = [
	{
		Category: 'Work',
		Title: 'Finish OS Task',
		Date: '4/5/2023'
	},
	{
		Category: 'Life',
		Title: 'Buy Stuff',
		Date: '5/5/2023'
	},
	{
		title: 'The Catcher in the Rye',
		author: 'J.D. Salinger',
		genre: 'Fiction',
		price: 9.99
	},
];
// db.on('populate', function (transaction) {
//     transaction.bulkAdd(dummyData);
// });
// console.log('Data Connected...');
// db.open();

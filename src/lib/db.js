// db file

import Dexie from 'dexie';

// import dexie plugin to work with client-side storage (indexedDB)
// initialize instance of the dababase using this instance to creae a table tasks with these parameters
export const db = new Dexie('myDatabase');
db.version(1).stores({
	tasks: '++id, category, title ,description, date' // Primary key and indexed props
});

// dumy data
const dummyData = [
	{
		Category: 'Work',
		Title: 'Finish OS Task',
		description: 'description',
		Date: '4/5/2023'
	},
	{
		Category: 'Life',
		Title: 'Buy Stuff',
		description: 'description',
		Date: '5/5/2023'
	}
];

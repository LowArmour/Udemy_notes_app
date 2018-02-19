const fs = require('fs');

const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;

var result;

switch (argv._[0])
{
	case 'add' :
		console.log('Adding new note');
		result = notes.addNote(argv.title, argv.body);
		console.log(result);
		break;
	case 'remove':
		console.log('Removing note');
		result = notes.removeNote(argv.title);
		console.log(result);
		break;
	case 'read':
		console.log('Reading note');
		result = notes.getNote(argv.title);
		if (typeof result === 'object')
		{
			console.log('----');
			console.log(result.title);
			console.log(result.body);

		} else
			console.log(result);
		break;
	case 'list' :
		console.log('Listing all notes');
		result = notes.getAll()
		console.log(result);
		break;
	default:
		console.log('Command not recognized');
		break;
}


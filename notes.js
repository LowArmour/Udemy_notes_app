const fs = require('fs');

var addNote = (title, body) =>
{
	var notes = readNotes();
	var note =
		{
			title,
			body
		};
	var isDuplicate = false;

	for (var i = 0; i < notes.length; i++)
		if (notes[i].title === title) {
			isDuplicate = true;
			break;
		}

	if (!isDuplicate) {
		notes.push(note);
		writeNotes(notes);
		return "Note successfully added";
	}

	return "Title note already taken";
};

var removeNote = (title) =>
{
	var notes = readNotes();
	var notes_filtered = notes.filter(note => note.title !== title);

	if (notes.length !== notes_filtered.length)
	{
		writeNotes(notes_filtered);
		return "Note successfully removed";
	}
	return "Note does not exist";
};

var getNote = (title) =>
{
	var notes = readNotes();
	var isFound = false;
	for (var i = 0; i < notes.length; i++)
		if (notes[i].title === title)
			return notes[i];
	return "Note does not exist";
};

var getAll = () =>
{
	var notes = readNotes();
	if (notes[0])
		return notes;
	else
		return "Note list is empty";
}

var readNotes = () =>
{
	try {
		var notes_string = fs.readFileSync('listOfNotes.json');
		return JSON.parse(notes_string);
	} catch (e) { }
	return [];
};

var writeNotes = (notes) =>
{
	var notes_string = JSON.stringify(notes);
	fs.writeFileSync('listOfNotes.json', notes_string);
};

module.exports =
{
	addNote,
	removeNote,
	getNote,
	getAll,
};
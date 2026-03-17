const app = require('./src/app');

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})


/*

Notes app

- GET /notes - list all notes
- POST /notes - create a new note
- GET /notes/:id - get a specific note by id
- DELETE /notes/:id - delete a specific note by id
- PATCH /notes/:id - update a specific note by id
- PUT /notes/:id - replace a specific note by id



note structure:
{
    id: string,
    title: string,
    content: string
}

Notes array:
Notes = [
 {
    id: '1',
    title: 'Note 1',
    content: 'This is the content of note 1'
 },
 {
    id: '2',
    title: 'Note 2',
    content: 'This is the content of note 2'
 }
]
*/
const Notes = [];

app.get('/notes', (req, res) => {
    res.json({
        message: "Notes Fetched Successfully",
        Notes: Notes
    })
})

app.post('/notes', (req, res) => {
    const note = req.body;
    Notes.push(note);
    res.status(201).json({
        message: "Note Created Successfully",
    })
})


app.get('/notes/:id', (req,res) => {
    const id = req.params.id;
    const note = Notes.find(note => note.id == id);
    if(note) {
        res.json({
            message: "Note Fetched Successfully",
            note: note
        })
    } else {
        res.status(404).json({
            message: "Note Not Found"
        })
    }
} )

app.delete('/notes/:id' , (req,res) => {
    const id = req.params.id;
    const index = Notes.findIndex(note => note.id == id);
    if(index !== -1) {
        Notes.splice(index, 1);
        res.json({
            message: "Note Deleted Successfully",
        })
    } else {
        res.status(404).json({
            message: "Note Not Found"
        })
    }
})

app.patch('/notes/:id' , (req,res) => {
    const id = req.params.id;
    const index = Notes.findIndex(Note => Note.id == id);
    if(index !== -1){
        const note = Notes[index];
        const updatedNote = { ...note, ...req.body};
        Notes[index] = updatedNote;
        res.status(200).json({
            message: "Note Updated Successfully",
        })
    }
    else {
        res.status(404).json({
            message: "Note Not Found"
        })
    }
})
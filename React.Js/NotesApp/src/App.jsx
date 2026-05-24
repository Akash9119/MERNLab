import React, {useState} from 'react'

const App = () => {
  const [name, setName]  = useState("")
  const [note, setNote] = useState("")
  const [notes, setNotes] = useState([])

  const  handleNoteChange =(e) => {
    setNote(e.target.value);
    console.log(note);
  }

  const handleNameChange = (e) => {
    setName(e.target.value);
    console.log(name);
  }

  const handleSubmit = (e) => {
    setName('');
    setNote('');
    e.preventDefault();
    const newNote ={name, note};
    setNotes([...notes, newNote]);
  }

  const handleDelete =(idx) => {
    const noteToDelete = notes.splice(notes,idx,1);
    setNotes(noteToDelete);
  }
  return (
    <div className="h-screen w-full lg:flex bg-gray-950 text-gray-50">

      <div className="lg:w-1/2 p-5">
        <form className="flex flex-col gap-5" action="#">
          <p className="text-xl font-medium pb-2">Enter your Notes Details</p>
          <input className="bg-gray-600 lg:w-[90%] px-5 py-2 border font-medium border-gray-400 rounded-md" placeholder="Enter your note title" type="text" value={name} onChange={handleNameChange} />
          <textarea className="bg-gray-600 lg:w-[90%] px-5 py-2 border font-medium border-gray-400 rounded-md h-32" placeholder="Enter your note" value={note} onChange={handleNoteChange} />
          <button className="bg-gray-50 hover:bg-gray-200 text-black lg:w-[90%] cursor-pointer font-bold py-2 px-4 rounded-md" onClick={handleSubmit} type="submit">Submit</button>
        </form>
      </div>

      <div className="lg:w-1/2 p-5 lg:border-l-2 border-gray-50 overflow-y-scroll">
        <p className="text-xl font-medium pb-7">Your Notes Details</p>
        <div className="flex flex-row gap-5 flex-wrap">
          {
            notes.map((note,idx) => (
              <div className="h-40 w-40 bg-white text-black border-gray-400 rounded-md p-3 flex flex-col justify-between" key={idx}>
                <div className="flex flex-col justify-between items-left">
                <p className="text-2lg text-gray-700">{note.name}</p>
                <p className="text-md text-gray-700">{note.note}</p>
                </div>
                <button className="w-full bg-gray-400 border-gray-800 rounded-md py-1 cursor-pointer" onClick={() => handleDelete(idx)}>Delete</button>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default App
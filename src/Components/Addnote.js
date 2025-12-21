import React from 'react';
import NoteContext from "../Context/notes/NoteContext";
import { useContext } from 'react';
import { useState } from 'react';
import NoteState from '../Context/notes/NoteState';
const Addnote = () => {
    const context=useContext(NoteContext)
    const {addNote}=context;
     const [note, setNote] = useState({title:"",description:"",tag:""})
const handleClick=(e)=>{
  e.preventDefault();
  addNote(note.title,note.description,note.tag);
 setNote({title:"",description:"",tag:""})
  
}
const onChange=(e)=>{
  setNote({...note,[e.target.name]:e.target.value})
}
  return (
    <div>
         <div className="container">
        <h2>Add a Note</h2>
        <form>
        <div className="mb-3">
  <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
  <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" value={note.title} onChange={onChange} minLength={5} required/>
</div>
<div className="mb-3">
  <label htmlFor="description" className="form-label">Descriptipon</label>
<input type="text" className="form-control" id="description" name="description" value={note.description}   onChange={onChange} minLength={5} required/>
</div>
<div className="mb-3">
  <label htmlFor="tag" className="form-label">Tag</label>
<input type="text" className="form-control" id="tag" name="tag" value={note.tag}  onChange={onChange}/>
</div>
<button disabled={note.title.length<5||note.description.length<5} className="btn btn-primary" type="submit" onClick={handleClick}>Add Note</button>
        </form>
        </div>
    </div>
  )
}

export default Addnote

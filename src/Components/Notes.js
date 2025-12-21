
import React,{useContext, useEffect,useRef,useState} from 'react';
import Noteitem from "./Noteitem";
import NoteContext from '../Context/notes/NoteContext';
import Addnote from './Addnote';
import { useNavigate  } from 'react-router-dom'


function Notes() {
  const context=useContext(NoteContext);
  let history= useNavigate();

  const {notes,getNotes,editNote}=context;
   useEffect(()=>{
    if('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU3YWZkNjFkNmMwMjgwNjE4ZjUwZmYyIn0sImlhdCI6MTcwMjU1OTIxNX0.cBhf9nFQqu_HGXRPUWG0bntrryCvbnCDb8aRerGXMl8'){

      getNotes();
    } else{
      history("/Login")
    }



  },[])
  const ref=useRef(null)
  const refClose=useRef(null)
  const [note, setNote] = useState({id:"",etitle:"",edescription:"",etag:""})
  const updateNote =(currentNote)=>{
    ref.current.click();
    setNote({id:currentNote._id,etitle:currentNote.title,edescription:currentNote.description,etag:currentNote.tag});
  }
  const handleClick=()=>{
    
    editNote(note.id,note.etitle,note.edescription,note.etag);
    refClose.current.click();
}
  const onChange=(e)=>{
    setNote({...note,[e.target.name]:e.target.value})
  }




  return (
    <>
    <Addnote/>
    <button ref={ref}  type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>
<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form>
        <div className="mb-3">
  <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
  <input type="text" className="form-control" id="etitle" name="etitle" value={note.etitle} aria-describedby="emailHelp"onChange={onChange}/>
</div>
<div className="mb-3">
  <label htmlFor="description" className="form-label">Descriptipon</label>
<input type="text" className="form-control" id="edescription" name="edescription" value={note.edescription} onChange={onChange} />
</div>
<div className="mb-3">
  <label htmlFor="tag" className="form-label">Tag</label>
<input type="text" className="form-control" id="etag" name="etag" value={note.etag} onChange={onChange} minLength={5} required />
</div>
        </form>
      </div>
      <div className="modal-footer">
        <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button disabled={note.etitle.length<5||note.edescription.length<5} onClick={handleClick} type="button" className="btn btn-primary">Update Note</button>
      </div>
    </div>
  </div>
</div>
<div className="row my-3">
         {/* <h2>Your Notes</h2> */}
         {/* <div className="container">
         {}
         </div> */}
         {notes.length===0?'No notes to display':Array.from(notes).map((note)=>{
           return <Noteitem key={note._id} notes={note} updateNote={updateNote}/>
          })}
      
    </div>
          </>
  )
}

export default Notes;

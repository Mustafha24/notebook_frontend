import {NotesContext} from '../context/NotesContext'
import {useContext,useState} from 'react';
const AddNote = () => {
    const context = useContext(NotesContext);
    const {addNote } = context;
    const [note,setNotes]=useState({title:"",description:"",tag:"default"})
    const handleClick=(e)=>{
        e.preventDefault()
        addNote(note.title,note.description,note.tag)
        setNotes({title:"",description:"",tag:""})
    }
    const onChange=(e)=>{
        e.preventDefault()
        setNotes({...note,[e.target.name]:e.target.value})
    }
  return (
    <>
    <div className="container">
      <form>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title" name="title"
            aria-describedby="emailHelp"
            placeholder="Enter Title" onChange={onChange} minLength={5} required value={note.title}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text" minLength={5} required
            className="form-control"
            id="description" name="description"
            placeholder="Enter Description" onChange={onChange} value={note.description}
          />
        </div>
        <div className="form-group">
          <label htmlFor="tag">Tag</label>
          <input
            type="text"
            className="form-control"
            id="tag" name="tag"
            placeholder="Enter Tag" onChange={onChange} value={note.tag}
          />
        </div>
        <button disabled={note.title.length<5 || note.description.length<5} className="btn btn-primary" onClick={handleClick}>
          Add Notes
        </button>
      </form>
    </div>
    </>
  );
};

export { AddNote };

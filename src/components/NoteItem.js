import { useContext } from "react";
import { NotesContext } from "../context/NotesContext";
const NoteItem = (props) => {
    const context=useContext(NotesContext)
    const {deleteNote}=context
    const {note,updateNote}=props
  return (
    <div className="card col-md-3 my-3">
      <div className="card-body">
        <h5 className="card-title">{note.title}</h5>
        <p className="card-text">
          {note.description}
        </p>
        <i className="fa-solid fa-pen-to-square mx-2" onClick={()=>{updateNote(note)}}></i>
        <i className="fa-solid fa-trash mx-2" onClick={()=>{deleteNote(note._id)}}></i>
      </div>
    </div>
  );
};
export {NoteItem};

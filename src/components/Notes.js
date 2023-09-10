import { NotesContext } from "../context/NotesContext";
import { NoteItem } from "./NoteItem";
import { useContext, useEffect, useRef,useState } from "react";
import { AddNote } from "./AddNote";
import { useNavigate } from "react-router-dom";
const Notes = () => {
  const context = useContext(NotesContext);
  const { mynotes, getAllNotes,editNote} = context;
  let navigate=useNavigate()
  useEffect(() => {
    if(localStorage.getItem('token')){
      getAllNotes();
    }
    else{
      navigate('/login')
    }
  });
  const ref = useRef(null);
  const refClose=useRef(null);
  const [note,setNotes]=useState({id:"",etitle:"",edescription:"",etag:"default"})
  const handleClick=(e)=>{
      e.preventDefault()
      editNote(note.id,note.etitle,note.edescription,note.etag)
      refClose.current.click()
  }
  const onChange=(e)=>{
      e.preventDefault()
      setNotes({...note,[e.target.name]:e.target.value})
  }
  const updateNote = (currentnote) => {
    ref.current.click();
    setNotes({id:currentnote._id,etitle:currentnote.title,edescription:currentnote.description,etag:currentnote.tag})
  };
  return (
    <>
      <AddNote />
      <button
        ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                EDIT NOTE
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="container">
                <form>
                  <div className="form-group">
                    <label htmlFor="etitle">Title</label>
                    <input
                      type="text"
                      className="form-control"
                      id="etitle"
                      name="etitle"
                      aria-describedby="emailHelp"
                      placeholder="Enter Title"
                      onChange={onChange} value={note.etitle}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="edescription">Description</label>
                    <input
                      type="text"
                      className="form-control"
                      id="edescription"
                      name="edescription"
                      placeholder="Enter Description"
                      onChange={onChange} value={note.edescription}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="etag">Tag</label>
                    <input
                      type="text"
                      className="form-control"
                      id="etag"
                      name="etag"
                      placeholder="Enter Tag"
                      onChange={onChange} value={note.etag}
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal" ref={refClose}
              >
                Close
              </button>
              <button disabled={note.etitle.length<5 || note.edescription.length<5} type="button" className="btn btn-primary" onClick={handleClick}>
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className='container'>
        {mynotes.length===0 && <p>NO NOTES TO DISPLAY</p>}
        </div>
        {mynotes.map((el) => {
          return <NoteItem note={el} key={el._id} updateNote={updateNote} />;
        })}
      </div>
    </>
  );
};
export { Notes };

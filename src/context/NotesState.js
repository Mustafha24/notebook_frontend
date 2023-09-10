import { NotesContext } from "./NotesContext";
import { useState } from "react";

const NotesState = (props) => {
  // const host = "http://localhost:5000";
  const host="https://mynotebook-dchh.onrender.com/"
  const init_notes = [];
  const [mynotes, setNotes] = useState(init_notes);

  const getAllNotes = async () => {
    const url = `${host}/notes/allnotes/`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem('token')
      },
    });
    const json = await response.json();
    setNotes(json)
  };
  const addNote = async (title, description, tag) => {
    const url = `${host}/notes/addnote/`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem('token')
      },
      body: JSON.stringify({ title,description,tag }),
    });
    const json=await response.json()
    console.log(json)
  };

  const deleteNote = async(idToDelete) => {
    const url = `${host}/notes/deletenote/${idToDelete}`;
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem('token')
      },
    });
    const json=await response.json()
    console.log(json)
  };

  const editNote = async (id, title, description, tag) => {
    const url = `${host}/notes/updatenote/${id}`;
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem('token')
        },
      body: JSON.stringify({ title, description,tag})
    });
    const json = response.json();
    console.log(json)
    for (let index = 0; index < mynotes.length; index++) {
      const element = mynotes[index];
      if (element.id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };
  return (
    <NotesContext.Provider
      value={{ mynotes, setNotes, addNote, editNote, deleteNote,getAllNotes}}
    >
      {props.children}
    </NotesContext.Provider>
  );
};

export { NotesState };

import "./App.css";
import { useState } from "react";

function App() {
  const [notes, setNotes ] = useState([]);
  const [currentId, setCurrentId] = useState(null);

  const handleAddNote = () => {
    //id, title, content, lastmodified
    const newNote = {
      id: Date.now(),
      title: "Untitled",
      content: "",
      lastModified: Date.now(),
    };
    setCurrentId(newNote.id);

    setNotes((prevNotes) => [newNote, ...prevNotes]);
      console.log(notes);
  };

  const handleSaveNote = () => {
    console.log("");
  };

  const handleDeleteNote = () => {
    console.log("");
  };

  return (
    <div class="app">
      <div class="notes-app">
        <ul class="sidebar">
          {notes.map((x) => (
            <li key = {x.id}
             class="sidebar-item">
              {x.title}
             </li>

          ))}
        </ul>
        <main class="main-content">
          <div className="button-row">
            <button className="btn" onClick={handleAddNote}>
              Add Note
            </button>
            <button className="btn" onClick={handleSaveNote}>
              Save Note
            </button>
            <button className="btn" onClick={handleDeleteNote}>
              Delete
            </button>
          </div>
          <h1 key = {currentId}>{currentId}</h1>
        </main>
      </div>
    </div>
  );
}

export default App;
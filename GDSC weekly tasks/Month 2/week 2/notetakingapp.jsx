import React, { useState } from 'react';

const NoteApp = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const addNote = () => {
    if (newNote.trim() !== '') {
      setNotes([...notes, newNote]);
      setNewNote('');
    }
  };

  const editNote = (index) => {
    setNewNote(notes[index]);
    setEditIndex(index);
  };

  const updateNote = () => {
    if (newNote.trim() !== '') {
      const updatedNotes = [...notes];
      updatedNotes[editIndex] = newNote;
      setNotes(updatedNotes);
      setNewNote('');
      setEditIndex(null);
    }
  };

  const deleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px', border: '1px solid #ddd', borderRadius: '5px' }}>
      <h2>Note Taking App</h2>

      <div>
        <textarea
          rows="4"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          placeholder="Enter your note..."
          style={{ width: '100%', marginBottom: '10px', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
        {editIndex !== null ? (
          <button onClick={updateNote} style={{ marginRight: '5px' }}>Update Note</button>
        ) : (
          <button onClick={addNote} style={{ marginRight: '5px' }}>Add Note</button>
        )}
        <button onClick={() => setNewNote('')}>Clear</button>
      </div>

      <ul style={{ listStyle: 'none', padding: '0' }}>
        {notes.map((note, index) => (
          <li key={index} style={{ marginBottom: '8px' }}>
            {note}
            <button onClick={() => editNote(index)} style={{ marginLeft: '5px', marginRight: '5px' }}>Edit</button>
            <button onClick={() => deleteNote(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NoteApp;

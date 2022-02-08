import React from 'react';
import { useNote } from '../../context/NoteContext';
import styles from './NoteList.css';

export default function NoteList() {
  const { notes } = useNote();
  const { note_card } = styles;

  return (
    <div>
      {notes?.map((note) => (
        <div key={`${note.name}-${note.message}`} className={note_card}>
          <p>-{note.name}</p>
          <p>{note.message}</p>
        </div>
      ))}
    </div>
  );
}

import React from 'react';
import { useNote } from '../../context/NoteContext';
import { useUser } from '../../context/UserContext';
import styles from './NoteList.css';

export default function NoteList() {
  const { notes } = useNote();
  const { note_card, note_text, cork } = styles;

  return (
    <div className={cork}>
      {notes?.map((note) => (
        <div key={`${note.name}-${note.message}`} className={note_card}>
          <div className={note_text}>
            <p>-{note.name}</p>
            <p>{note.message}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

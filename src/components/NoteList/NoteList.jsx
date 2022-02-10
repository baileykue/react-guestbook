import React from 'react';
import { useNote } from '../../context/NoteContext';
import styles from './NoteList.css';

export default function NoteList() {
  const { notes } = useNote();
  const { note_card, note_text, note_list } = styles;

  return (
    <div className={note_list}>
      {notes?.map((note) => (
        <div key={`${note.name}-${note.message}`} className={note_card}>
          <div className={note_text}>
            <p>-{note.name}</p>
            <p>
              {note.message} {note.emoji}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

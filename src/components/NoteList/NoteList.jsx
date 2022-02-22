import { useNote } from '../../context/NoteContext';

import React from 'react';
import styles from './NoteList.css';
import { useUser } from '../../context/UserContext';

export default function NoteList() {
  const { notes } = useNote();
  const {
    user: { email },
  } = useUser();
  const { note_card, note_text, note_list } = styles;

  return (
    <div className={note_list}>
      {notes?.map((note) => (
        <div key={`${email}-${note.message}`} className={note_card}>
          <div className={note_text}>
            <p>-{email.slice(0, 6)}</p>
            <p>
              {note.message} {note.emoji}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

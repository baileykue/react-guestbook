import React from 'react';
import { useNote } from '../../context/NoteContext';

export default function NoteList() {
  const { notes } = useNote();

  return (
    <div>
      {notes?.map((note) => (
        <div key={`${note.name}-${note.message}`}>
          <p>-{note.name}</p>
          <p>{note.message}</p>
        </div>
      ))}
    </div>
  );
}

import { useState, createContext, useContext } from 'react';

const NoteContext = createContext();

export function NoteProvider({ children }) {
  const [notes, setNotes] = useState([]);

  const NoteValues = { notes, setNotes };

  return (
    <NoteContext.Provider value={NoteValues}>{children}</NoteContext.Provider>
  );
}

export function useNote() {
  const context = useContext(NoteContext);

  if (context === undefined) {
    throw new Error('useNote must be defined within an NoteContext Provider');
  }

  return context;
}

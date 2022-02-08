import { useState, createContext, useContext } from 'react';

const EntryContext = createContext();

export function EntryProvider({ children }) {
  const [entries, setEntries] = useState([]);

  const EntryValues = { entries, setEntries };

  return <EntryContext value={EntryValues}>{children}</EntryContext>;
}

export const useEntry = () => {
  const context = useContext(EntryContext);

  if (context === undefined) {
    throw new Error('useEntry must be defined within an EntryContext Provider');
  }

  return context;
};

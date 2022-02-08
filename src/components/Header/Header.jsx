import React from 'react';
import { useUser } from '../../context/UserContext';

export default function Header() {
  const { user } = useUser();
  return (
    <header>
      {user ? (
        <p>thanks for leaving a note, {user}</p>
      ) : (
        <p>welcome! pls sign guesbook c:</p>
      )}
    </header>
  );
}

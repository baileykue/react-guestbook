import React from 'react';
import { useUser } from '../../context/UserContext';
import styles from './Header.css';

export default function Header() {
  const { header } = styles;

  const { user } = useUser();

  return (
    <header className={header}>
      {user ? (
        <p>Thanks for leaving a note, {user}</p>
      ) : (
        <p>Welcome! Pls sign guestbook C:</p>
      )}
    </header>
  );
}

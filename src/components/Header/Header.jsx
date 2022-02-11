import { useUser } from '../../context/UserContext';
import { useHover } from '../../hooks/Hover';

import React from 'react';
import styles from './Header.css';

export default function Header() {
  const { header } = styles;

  const { user } = useUser();

  const [hoverRef, isHovered] = useHover();

  return (
    <header className={header}>
      <p ref={hoverRef}>{isHovered ? '😁' : '☹️'}</p>
      {user ? (
        <p>Thanks for leaving a note, {user}</p>
      ) : (
        <p>Welcome! Pls sign guestbook C:</p>
      )}
    </header>
  );
}

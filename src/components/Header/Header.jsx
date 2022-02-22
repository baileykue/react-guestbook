import { useUser } from '../../context/UserContext';
import { useHover } from '../../hooks/useHover';

import React from 'react';
import styles from './Header.css';

export default function Header() {
  const { header } = styles;

  const { user } = useUser();
  console.log('user', user);

  const [hoverRef, isHovered] = useHover();

  return (
    <header className={header}>
      <p ref={hoverRef}>{isHovered ? '😁' : '☹️'}</p>
      {user ? (
        <p>Thanks for leaving a note, {user.email}</p>
      ) : (
        <p>Welcome! Pls log in to sign guestbook C:</p>
      )}
    </header>
  );
}

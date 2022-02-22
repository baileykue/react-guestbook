import { useUser } from '../../context/UserContext';
import { useHover } from '../../hooks/useHover';

import React from 'react';
import styles from './Header.css';

export default function Header() {
  const { header } = styles;

  const { user, logout } = useUser();

  const [hoverRef, isHovered] = useHover();

  const handleLogout = () => {
    logout(() => history.push('/'));
  };

  return (
    <header className={header}>
      <p ref={hoverRef}>{isHovered ? '😁' : '☹️'}</p>
      {user ? (
        <>
          <p>Thanks for leaving a note, {user.email.split('@')[0]}</p>
          <button onClick={handleLogout}>Log out</button>
        </>
      ) : (
        <p>Welcome! Pls log in to sign guestbook C:</p>
      )}
    </header>
  );
}

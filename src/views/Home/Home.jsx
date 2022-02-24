import { NoteProvider } from '../../context/NoteContext';

import GuestBook from '../../components/GuestBook/GuestBook';
import NoteList from '../../components/NoteList/NoteList';

import styles from './Home.css';
import React from 'react';

export default function Home() {
  const { cork } = styles;

  return (
    <NoteProvider>
      <GuestBook />
      <div className={cork}>
        <NoteList />
      </div>
    </NoteProvider>
  );
}

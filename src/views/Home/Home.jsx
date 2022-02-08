import React from 'react';
import { NoteProvider } from '../../context/NoteContext';
import GuestBook from '../../components/GuestBook/GuestBook';
import NoteList from '../../components/NoteList/NoteList';

export default function Home() {
  return (
    <NoteProvider>
      <GuestBook />
      <NoteList />
    </NoteProvider>
  );
}

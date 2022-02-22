import { useNote } from '../../context/NoteContext';

import { useState } from 'react';
import styles from './GuestBook.css';

export default function GuestBook() {
  const { notes, setNotes } = useNote();

  const [message, setMessage] = useState('');
  const [emoji, setEmoji] = useState('');

  const { form, emojis, checked } = styles;

  function handleSubmit(e) {
    e.preventDefault();

    setNotes([...notes, { message, emoji }]);

    setEmoji('');
    setMessage('');
  }

  return (
    <div>
      <form className={form}>
        <label>
          Your Note:
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>

        <label>
          Emojis:
          <div className={emojis}>
            <label>
              <input
                type="radio"
                name="emogi"
                value="&#128514;"
                onChange={(e) => setEmoji(e.target.value)}
              />
              <p>&#128514;</p>
            </label>

            <label>
              <input
                type="radio"
                name="emogi"
                value="&#127812;"
                onChange={(e) => setEmoji(e.target.value)}
              />
              <p>&#127812;</p>
            </label>

            <label>
              <input
                type="radio"
                name="emogi"
                value="&#128190;"
                onChange={(e) => setEmoji(e.target.value)}
              />
              <p>&#128190;</p>
            </label>

            <label>
              <input
                type="radio"
                name="emogi"
                value="&#127752;"
                onChange={(e) => setEmoji(e.target.value)}
              />
              <p>&#127752;</p>
            </label>

            <label>
              <input
                type="radio"
                name="emogi"
                value="&#129409;"
                onChange={(e) => setEmoji(e.target.value)}
              />
              <p>&#129409;</p>
            </label>
          </div>
        </label>

        <button onClick={handleSubmit}>Leave Note</button>
      </form>
    </div>
  );
}

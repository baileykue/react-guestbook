import { useState } from 'react';
import { useNote } from '../../context/NoteContext';
import { useUser } from '../../context/UserContext';
import styles from './GuestBook.css';

export default function GuestBook() {
  const { user, setUser } = useUser();
  const { notes, setNotes } = useNote();

  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const { form, emojis } = styles;

  function handleSubmit(e) {
    e.preventDefault();

    setUser(name);
    setNotes([...notes, { name, message }]);

    setMessage('');
  }

  function handleReset() {
    setUser('');
    setName('');
  }

  return (
    <div>
      <form className={form}>
        {!user && (
          <label>
            Your Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        )}

        <label>
          Your Note:
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>

        <feildset className={emojis}>
          <legend>Emoji:</legend>
          <label>
            <input type="radio" />
            <p>&#128514;</p>
          </label>

          <label>
            <input type="radio" />
            <p>&#127812;</p>
          </label>

          <label>
            <input type="radio" />
            <p>&#128190;</p>
          </label>

          <label>
            <input type="radio" />
            <p>&#127752;</p>
          </label>

          <label>
            <input type="radio" />
            <p>&#129409;</p>
          </label>
        </feildset>

        <button onClick={handleSubmit}>Leave Note</button>

        {user && <p onClick={handleReset}>Not {user}????</p>}
      </form>
    </div>
  );
}

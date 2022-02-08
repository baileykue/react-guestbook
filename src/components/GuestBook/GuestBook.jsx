import { useState } from 'react';
import { useNote } from '../../context/NoteContext';
import { useUser } from '../../context/UserContext';

export default function GuestBook() {
  const { user, setUser } = useUser();
  const { notes, setNotes } = useNote();

  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    setUser(name);
    setNotes([...notes, { name, message }]);

    setName('');
    setMessage('');
  }
  return (
    <div>
      <form>
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
        <button onClick={handleSubmit}>Leave Note</button>
        {user && <p onClick={() => setUser('')}>not {user}????</p>}
      </form>
    </div>
  );
}

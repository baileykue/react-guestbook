import React from 'react';

export default function GuestBook() {
  return (
    <div>
      <form>
        <label>
          Your Name:
          <input type="text" />
        </label>

        <label>
          Your Note:
          <textarea />
        </label>
        <button>Leave Note</button>
      </form>
    </div>
  );
}

import React from 'react';

export default function AuthForm() {
  return (
    <form>
      <label>
        Email
        <input type="email" />
      </label>
      <label>
        Password
        <input type="password" />
      </label>
      <button>Log In</button>
    </form>
  );
}

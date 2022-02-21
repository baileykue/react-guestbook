import React from 'react';

import styles from './Authform.css';

export default function AuthForm() {
  return (
    <form className={styles.form}>
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

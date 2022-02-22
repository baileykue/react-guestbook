import styles from './Authform.css';

export default function AuthForm({ handleFormChange, handleLogin, error }) {
  const { form } = styles;

  return (
    <form className={form}>
      <label>
        Email
        <input
          id="email"
          name="email"
          type="email"
          onChange={handleFormChange}
        />
      </label>
      <label>
        Password
        <input
          id="password"
          name="password"
          type="password"
          onChange={handleFormChange}
        />
      </label>
      {error && <p>{error}</p>}
      <button onClick={handleLogin}>Log In</button>
    </form>
  );
}

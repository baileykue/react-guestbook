import { useState } from 'react';
import { useForm } from '../../hooks/useForm';

import styles from './Authform.css';

import { useHistory, useLocation } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

export default function AuthForm() {
  const [error, setError] = useState();

  const { formState, handleFormChange } = useForm({ email: '', password: '' });
  const auth = useUser();

  const history = useHistory();
  const location = useLocation();

  const { from } = location.state || { from: { pathname: '/guestbook' } };

  const handleLogin = (e) => {
    e.preventDefault();

    const loginWasSuccessful = auth.login(formState.email, formState.password);
    console.log(loginWasSuccessful);
    console.log(formState);
    {
      loginWasSuccessful
        ? history.replace(from.pathname)
        : setError('log in has failed, please make sure your info is correct');
    }
  };

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

import { useHistory, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useForm } from '../../hooks/useForm';
import { useUser } from '../../context/UserContext';

import AuthForm from '../../components/Auth/AuthForm';

export default function Login() {
  const [error, setError] = useState();

  const { formState, handleFormChange } = useForm({ email: '', password: '' });
  const auth = useUser();

  const history = useHistory();
  const location = useLocation();

  const { from } = location.state || { from: { pathname: '/guestbook' } };

  const handleLogin = (e) => {
    e.preventDefault();
    const loginWasSuccessful = auth.login(formState.email, formState.password);

    {
      loginWasSuccessful
        ? history.replace(from.pathname)
        : setError('log in has failed, please make sure your info is correct');
    }
  };

  return (
    <div>
      <AuthForm
        error={error}
        handleLogin={handleLogin}
        handleFormChange={handleFormChange}
      />
    </div>
  );
}

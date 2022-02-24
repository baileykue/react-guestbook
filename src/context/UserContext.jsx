import { useState, createContext, useContext } from 'react';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    const loginSuccessful =
      email === process.env.REACT_APP_AUTH_EMAIL &&
      password === process.env.REACT_APP_AUTH_PASSWORD;
    if (loginSuccessful) setUser({ email });
    return loginSuccessful;
  };

  const logout = (callback) => {
    setUser(null);
    callback();
  };

  const UserValues = { user, setUser, login, logout };

  return (
    <UserContext.Provider value={UserValues}>{children}</UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('useUser must be defined within an UserContext Provider');
  }

  return context;
}

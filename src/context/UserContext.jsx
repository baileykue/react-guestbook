import { useState, createContext, useContext } from 'react';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState('');

  const UserValues = { user, setUser };

  return <UserContext value={UserValues}>{children}</UserContext>;
}

export const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('useUser must be defined within an UserContext Provider');
  }

  return context;
};

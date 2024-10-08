import React, { createContext, useState } from 'react';

type UserContextType = {
  user: string;
  setUser: React.Dispatch<React.SetStateAction<string>>;
};

export const UserContext = createContext<UserContextType | null>(null);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState('John');

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

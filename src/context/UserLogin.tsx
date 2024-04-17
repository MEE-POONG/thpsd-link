// types/UserTypes.ts
export interface User {
  id: number;
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  token: string; // Assuming a token is also returned for session management
}

// context/UserLogin.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface UserLoginType {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
}

const UserLoginContext = createContext<UserLoginType | null>(null);
  
export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (userData: User) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData)); // Storing user data in localStorage
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <UserLoginContext.Provider value={{ user, login, logout }}>
      {children}
    </UserLoginContext.Provider>
  );
};

export const useUser = () => useContext(UserLoginContext);

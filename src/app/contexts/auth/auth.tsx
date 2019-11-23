import React, { useState, useEffect } from 'react';
import { auth } from '../../../firebase-app';

export const AuthContext = React.createContext<firebase.User | null>(null);

export const AuthProvider: React.FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<firebase.User | null>(null);

  useEffect(() => {
    const currentUserLocalStorage: string | null = localStorage.getItem('authenticated');
    if (currentUser === null && currentUserLocalStorage !== null) {
      setCurrentUser(JSON.parse(currentUserLocalStorage));
    }
  }, [currentUser]);

  useEffect(() => {
    const unsubscribeFromAuth: firebase.Unsubscribe = auth.onAuthStateChanged(user => {
      localStorage.setItem('authenticated', JSON.stringify(user));
      setCurrentUser(user);
    });

    return function cleanup() {
      unsubscribeFromAuth();
    };
  }, []);

  return <AuthContext.Provider value={currentUser}>{children}</AuthContext.Provider>;
};

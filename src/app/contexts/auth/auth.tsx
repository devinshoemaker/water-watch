import React, { useState, useEffect } from 'react';
import { auth } from '../../../firebase-app';

export const AuthContext = React.createContext<boolean>(false);

export const AuthProvider: React.FC = ({ children }) => {
  const [authenticated, setAuthenticated] = useState<boolean>(!!localStorage.getItem('authenticated'));

  useEffect(() => {
    const unsubscribeFromAuth: firebase.Unsubscribe = auth.onAuthStateChanged(user => {
      localStorage.setItem('authenticated', (!!user).toString());
      setAuthenticated(!!user);
    });

    return function cleanup() {
      unsubscribeFromAuth();
    };
  }, []);

  return <AuthContext.Provider value={authenticated}>{children}</AuthContext.Provider>;
};

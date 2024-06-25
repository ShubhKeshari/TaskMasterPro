import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const login = (role) => {
    setUser({ role });
  };
  const logout = () => {
    setUser(null);
  };
  useEffect(() => {
    const defaultUser = { role: 'admin' };
    setUser(defaultUser);
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

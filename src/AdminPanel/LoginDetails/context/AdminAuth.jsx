// context/AdminAuth.js
import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    const storedUser = localStorage.getItem('admin_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
  }, []);

  // Admin credentials (in production, this would be handled by a backend)
  const adminCredentials = {
    username: 'admin',
    password: 'admin123'
  };

  const login = (username, password) => {
    if (username === adminCredentials.username && password === adminCredentials.password) {
      const userData = { username, role: 'admin' };
      setUser(userData);
      setIsAuthenticated(true);
      localStorage.setItem('admin_user', JSON.stringify(userData));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('admin_user');
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
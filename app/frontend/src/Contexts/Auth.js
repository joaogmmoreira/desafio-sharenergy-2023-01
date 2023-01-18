import React, { useState, useEffect, createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { setToken, createSession } from '../Services/Api';

export const AuthContext =  createContext();

export const AuthProvider = ({children}) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const recoveredUser = localStorage.getItem('user');

    if (recoveredUser) {
      setUser(JSON.parse(recoveredUser));
    }

    setLoading(false);
  }, []);

  const login = async (username, password) => {
    const response = await createSession(username, password);

    const loggedUser = response.data.message.username;
    const token = response.data.message.token;

    localStorage.setItem('user', JSON.stringify(loggedUser));
    localStorage.setItem('token', token);

    setToken(token);
    
    setUser(loggedUser);
    navigate('/users');
    
  };
  
  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    navigate('/login');
  }; 

  return(
    <AuthContext.Provider 
      value={{ authenticated: !!user, user, loading, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  )
}
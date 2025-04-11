import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../Services/axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = async (credentials) => {
    try {
      const response = await api.post('/v1/login', credentials);
      localStorage.setItem('authToken', response.data.token);
      setUser(response.data.user);
      return true; // Return success status
    } catch (error) {
      console.error('Login error:', error);
      throw error; // Re-throw the error to be caught in the Login component
    }
  };

  return (
    <AuthContext.Provider value={{ user, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
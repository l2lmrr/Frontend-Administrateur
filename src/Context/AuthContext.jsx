import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { authAPI } from '../Services/axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const verifyAuth = async () => {
      const token = localStorage.getItem('authToken');
      if (token) {
        try {
          const { data } = await authAPI.getUser();
          setUser(data);
        } catch (err) {
          localStorage.removeItem('authToken');
        }
      }
      setIsLoading(false);
    };
    verifyAuth();
  }, []);

  const register = async (formData) => {
    const { data } = await authAPI.register(formData);
    localStorage.setItem('authToken', data.token);
    setUser(data.user);
    navigate('/dashboard');
  };

  const login = async (credentials) => {
    const { data } = await authAPI.login(credentials);
    localStorage.setItem('authToken', data.token);
    setUser(data.user);
    navigate('/dashboard');
  };

  const logout = async () => {
    try {
      await authAPI.logout();
    } finally {
      localStorage.removeItem('authToken');
      setUser(null);
      navigate('/login');
    }
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      isLoading, 
      register, 
      login, 
      logout 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
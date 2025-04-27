import { createContext, useState, useEffect, ReactNode } from 'react';
import axios from '../lib/axios';

// Define types
interface AuthContextType {
  user: string | null;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, name: string, password: string) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

interface AuthProviderProps {
  children: ReactNode;
}

/**
 * Provides authentication context and state management for user authentication.
 *
 * This component wraps its children with an AuthContext.Provider, supplying
 * authentication-related state and functions, including `login`, `signup`, and `logout`.
 *
 * - Manages authentication state using React's `useState` and `useEffect` hooks.
 * - Persists user and token information to localStorage to maintain session across page reloads.
 * - Provides `login`, `signup`, and `logout` functions for user authentication management.
 *
 * @param {AuthProviderProps} props - The props for the AuthProvider component.
 * @param {ReactNode} props.children - The components that will be rendered within the provider.
 */

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<string | null>(localStorage.getItem('user'));
  const [token, setToken] = useState<string | null>(
    localStorage.getItem('token'),
  );

  useEffect(() => {
    localStorage.setItem('user', user || '');
    localStorage.setItem('token', token || '');
  }, [user, token]);

  const login = async (email: string, password: string) => {
    try {
      const res = await axios.post('auth/login', {
        email,
        password,
      });

      if (res.status !== 201) {
        throw new Error('Failed to login');
      }
      setUser(email);
      setToken(res.data.access_token);
    } catch (error) {
      throw error;
    }
  };

  const signup = async (email: string, name: string, password: string) => {
    try {
      const res = await axios.post('auth/signup', {
        email,
        name,
        password,
      });
      if (res.status !== 201) {
        throw new Error('Failed to signup');
      }
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ user, token, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

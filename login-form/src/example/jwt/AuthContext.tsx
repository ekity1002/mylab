import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import type { User, LoginCredentials, AuthResponse } from './types';
import { loginWithJWT, logoutWithJWT, checkToken } from './api';

interface AuthContextType {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  login: (credentials: LoginCredentials) => Promise<AuthResponse>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // 初回マウント時にトークンをチェック
  useEffect(() => {
    const initAuth = async () => {
      const response = await checkToken();
      if (response.success && response.user && response.token) {
        setUser(response.user);
        setToken(response.token);
      }
      setIsLoading(false);
    };

    initAuth();
  }, []);

  const login = async (credentials: LoginCredentials): Promise<AuthResponse> => {
    const response = await loginWithJWT(credentials);
    if (response.success && response.user && response.token) {
      setUser(response.user);
      setToken(response.token);
    }
    return response;
  };

  const logout = async (): Promise<void> => {
    await logoutWithJWT();
    setUser(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

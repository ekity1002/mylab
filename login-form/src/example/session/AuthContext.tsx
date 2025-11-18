import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import type { User, LoginCredentials, AuthResponse } from './types';
import { loginWithSession, logoutWithSession, checkSession } from './api';

interface AuthContextType {
  user: User | null;
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
  const [isLoading, setIsLoading] = useState(true);

  // 初回マウント時にセッションをチェック
  useEffect(() => {
    const initAuth = async () => {
      const response = await checkSession();
      if (response.success && response.user) {
        setUser(response.user);
      }
      setIsLoading(false);
    };

    initAuth();
  }, []);

  const login = async (credentials: LoginCredentials): Promise<AuthResponse> => {
    const response = await loginWithSession(credentials);
    if (response.success && response.user) {
      setUser(response.user);
    }
    return response;
  };

  const logout = async (): Promise<void> => {
    await logoutWithSession();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

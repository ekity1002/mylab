import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
// TODO: 必要な型とAPI関数をインポートしてください

// TODO: AuthContextの型を定義してください
// ヒント: user, isLoading, login, logoutを含むインターフェース
interface AuthContextType {
  // ここに実装してください
}

// TODO: createContextでAuthContextを作成してください
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// TODO: useAuthカスタムフックを実装してください
// 要件:
// 1. useContextを使ってAuthContextを取得
// 2. contextがundefinedの場合はエラーをthrow
// 3. contextを返す
export const useAuth = () => {
  // ここに実装してください
  throw new Error('Not implemented');
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  // TODO: user, isLoadingのstateを定義してください

  // TODO: useEffectで初回マウント時にセッションをチェックしてください
  // 要件:
  // 1. checkSession()を呼び出す
  // 2. 成功時はsetUser()でユーザー情報を設定
  // 3. 最後にsetIsLoading(false)を実行
  useEffect(() => {
    // ここに実装してください
  }, []);

  // TODO: login関数を実装してください
  // 要件:
  // 1. loginWithSession()を呼び出す
  // 2. 成功時はsetUser()でユーザー情報を設定
  // 3. レスポンスを返す
  const login = async (credentials: any): Promise<any> => {
    // ここに実装してください
    throw new Error('Not implemented');
  };

  // TODO: logout関数を実装してください
  // 要件:
  // 1. logoutWithSession()を呼び出す
  // 2. setUser(null)でユーザー情報をクリア
  const logout = async (): Promise<void> => {
    // ここに実装してください
    throw new Error('Not implemented');
  };

  return (
    <AuthContext.Provider value={{ user: null, isLoading: true, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

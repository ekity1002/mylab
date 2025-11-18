import type { LoginCredentials, AuthResponse, User } from './types';

// モックユーザーデータ
const MOCK_USER: User = {
  id: '1',
  username: 'testuser',
  email: 'test@example.com',
};

// セッションストレージを使った認証状態の管理
const SESSION_KEY = 'session_auth';

/**
 * セッションベース認証のログイン
 * サーバーサイドでセッションCookieが設定されることを想定
 * ここではsessionStorageを使ってセッションをシミュレート
 */
export const loginWithSession = async (
  credentials: LoginCredentials
): Promise<AuthResponse> => {
  // APIリクエストをシミュレート
  await new Promise(resolve => setTimeout(resolve, 500));

  // 簡易的な認証チェック
  if (credentials.username === 'testuser' && credentials.password === 'password123') {
    // セッションストレージに認証情報を保存
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(MOCK_USER));

    return {
      success: true,
      user: MOCK_USER,
    };
  }

  return {
    success: false,
    message: 'ユーザー名またはパスワードが正しくありません',
  };
};

/**
 * セッションベース認証のログアウト
 */
export const logoutWithSession = async (): Promise<void> => {
  await new Promise(resolve => setTimeout(resolve, 300));
  sessionStorage.removeItem(SESSION_KEY);
};

/**
 * 現在のセッション情報を取得
 */
export const getCurrentSession = (): User | null => {
  const sessionData = sessionStorage.getItem(SESSION_KEY);
  if (!sessionData) return null;

  try {
    return JSON.parse(sessionData);
  } catch {
    return null;
  }
};

/**
 * セッションの有効性をチェック
 */
export const checkSession = async (): Promise<AuthResponse> => {
  await new Promise(resolve => setTimeout(resolve, 200));

  const user = getCurrentSession();
  if (user) {
    return {
      success: true,
      user,
    };
  }

  return {
    success: false,
    message: 'セッションが見つかりません',
  };
};

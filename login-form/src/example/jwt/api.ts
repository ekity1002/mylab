import type { LoginCredentials, AuthResponse, User, DecodedToken } from './types';

// モックユーザーデータ
const MOCK_USER: User = {
  id: '1',
  username: 'testuser',
  email: 'test@example.com',
};

const TOKEN_KEY = 'jwt_token';

/**
 * 簡易的なJWTトークンを生成（実際のJWTではありません）
 * 本番環境ではサーバー側で適切にJWTを生成してください
 */
const generateMockToken = (user: User): string => {
  const header = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
  const payload = btoa(
    JSON.stringify({
      user,
      exp: Date.now() + 3600000, // 1時間後に期限切れ
      iat: Date.now(),
    })
  );
  const signature = btoa('mock-signature');

  return `${header}.${payload}.${signature}`;
};

/**
 * トークンをデコード（簡易版）
 */
const decodeMockToken = (token: string): DecodedToken | null => {
  try {
    const parts = token.split('.');
    if (parts.length !== 3) return null;

    const payload = JSON.parse(atob(parts[1]));
    return payload;
  } catch {
    return null;
  }
};

/**
 * トークンの有効性をチェック
 */
const isTokenValid = (token: string): boolean => {
  const decoded = decodeMockToken(token);
  if (!decoded) return false;

  // 有効期限のチェック
  return decoded.exp > Date.now();
};

/**
 * JWT認証のログイン
 */
export const loginWithJWT = async (
  credentials: LoginCredentials
): Promise<AuthResponse> => {
  // APIリクエストをシミュレート
  await new Promise(resolve => setTimeout(resolve, 500));

  // 簡易的な認証チェック
  if (credentials.username === 'testuser' && credentials.password === 'password123') {
    const token = generateMockToken(MOCK_USER);

    // localStorageにトークンを保存
    localStorage.setItem(TOKEN_KEY, token);

    return {
      success: true,
      user: MOCK_USER,
      token,
    };
  }

  return {
    success: false,
    message: 'ユーザー名またはパスワードが正しくありません',
  };
};

/**
 * JWT認証のログアウト
 */
export const logoutWithJWT = async (): Promise<void> => {
  await new Promise(resolve => setTimeout(resolve, 300));
  localStorage.removeItem(TOKEN_KEY);
};

/**
 * 保存されているトークンを取得
 */
export const getStoredToken = (): string | null => {
  return localStorage.getItem(TOKEN_KEY);
};

/**
 * トークンからユーザー情報を取得
 */
export const getUserFromToken = (): User | null => {
  const token = getStoredToken();
  if (!token) return null;

  if (!isTokenValid(token)) {
    localStorage.removeItem(TOKEN_KEY);
    return null;
  }

  const decoded = decodeMockToken(token);
  return decoded?.user || null;
};

/**
 * トークンの有効性をチェック
 */
export const checkToken = async (): Promise<AuthResponse> => {
  await new Promise(resolve => setTimeout(resolve, 200));

  const token = getStoredToken();
  if (!token) {
    return {
      success: false,
      message: 'トークンが見つかりません',
    };
  }

  if (!isTokenValid(token)) {
    localStorage.removeItem(TOKEN_KEY);
    return {
      success: false,
      message: 'トークンの有効期限が切れています',
    };
  }

  const user = getUserFromToken();
  if (user) {
    return {
      success: true,
      user,
      token,
    };
  }

  return {
    success: false,
    message: 'トークンが無効です',
  };
};

/**
 * リフレッシュトークンを使って新しいトークンを取得（モック）
 * 実際のアプリケーションでは、サーバーにリフレッシュトークンを送信して
 * 新しいアクセストークンを取得します
 */
export const refreshToken = async (): Promise<AuthResponse> => {
  await new Promise(resolve => setTimeout(resolve, 300));

  const user = getUserFromToken();
  if (!user) {
    return {
      success: false,
      message: 'ユーザー情報が見つかりません',
    };
  }

  const newToken = generateMockToken(user);
  localStorage.setItem(TOKEN_KEY, newToken);

  return {
    success: true,
    user,
    token: newToken,
  };
};

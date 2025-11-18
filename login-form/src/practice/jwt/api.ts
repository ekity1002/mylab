// TODO: 必要な型をtypes.tsからインポートしてください

// TODO: モックユーザーデータを定義してください
// ヒント: id: '1', username: 'testuser', email: 'test@example.com'

// TODO: localStorageのトークンキー名を定義してください
// ヒント: 'jwt_token' など

/**
 * 簡易的なJWTトークンを生成（モック）
 * TODO: この関数を実装してください
 *
 * 要件:
 * 1. header = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT' }))
 * 2. payload = btoa(JSON.stringify({ user, exp: Date.now() + 3600000, iat: Date.now() }))
 * 3. signature = btoa('mock-signature')
 * 4. `${header}.${payload}.${signature}` の形式で返す
 */
const generateMockToken = (user: any): string => {
  // ここに実装してください
  throw new Error('Not implemented');
};

/**
 * トークンをデコード
 * TODO: この関数を実装してください
 *
 * 要件:
 * 1. token.split('.')で3つのパーツに分割
 * 2. パーツが3つでない場合はnullを返す
 * 3. atob(parts[1])でペイロードをデコード
 * 4. JSON.parse()してDecodedToken型として返す
 * 5. エラーの場合はnullを返す
 */
const decodeMockToken = (token: string): any => {
  // ここに実装してください
  throw new Error('Not implemented');
};

/**
 * トークンの有効性をチェック
 * TODO: この関数を実装してください
 *
 * 要件:
 * 1. decodeMockToken()でトークンをデコード
 * 2. デコードできない場合はfalseを返す
 * 3. decoded.exp > Date.now() で有効期限をチェック
 */
const isTokenValid = (token: string): boolean => {
  // ここに実装してください
  throw new Error('Not implemented');
};

/**
 * JWT認証のログイン
 * TODO: この関数を実装してください
 *
 * 要件:
 * 1. credentialsを受け取り、AuthResponseを返す非同期関数
 * 2. await new Promise(resolve => setTimeout(resolve, 500)) でAPIリクエストをシミュレート
 * 3. username === 'testuser' && password === 'password123' の場合のみログイン成功
 * 4. 成功時はgenerateMockToken()でトークンを生成
 * 5. 成功時はlocalStorageにトークンを保存
 * 6. 成功時は { success: true, user: MOCK_USER, token } を返す
 * 7. 失敗時は { success: false, message: 'エラーメッセージ' } を返す
 */
export const loginWithJWT = async (credentials: any): Promise<any> => {
  // ここに実装してください
  throw new Error('Not implemented');
};

/**
 * JWT認証のログアウト
 * TODO: この関数を実装してください
 *
 * 要件:
 * 1. localStorageからトークンを削除
 * 2. await new Promise(resolve => setTimeout(resolve, 300)) でAPIリクエストをシミュレート
 */
export const logoutWithJWT = async (): Promise<void> => {
  // ここに実装してください
  throw new Error('Not implemented');
};

/**
 * 保存されているトークンを取得
 * TODO: この関数を実装してください
 */
export const getStoredToken = (): string | null => {
  // ここに実装してください
  throw new Error('Not implemented');
};

/**
 * トークンからユーザー情報を取得
 * TODO: この関数を実装してください
 *
 * 要件:
 * 1. getStoredToken()でトークンを取得
 * 2. トークンがない場合はnullを返す
 * 3. isTokenValid()でトークンの有効性をチェック
 * 4. 無効な場合はlocalStorageから削除してnullを返す
 * 5. 有効な場合はdecodeMockToken()でデコードしてuser情報を返す
 */
export const getUserFromToken = (): any => {
  // ここに実装してください
  throw new Error('Not implemented');
};

/**
 * トークンの有効性をチェック
 * TODO: この関数を実装してください
 *
 * 要件:
 * 1. getStoredToken()でトークンを取得
 * 2. await new Promise(resolve => setTimeout(resolve, 200)) でAPIリクエストをシミュレート
 * 3. トークンがない、または無効な場合は { success: false, message: 'エラーメッセージ' } を返す
 * 4. 有効な場合は { success: true, user, token } を返す
 */
export const checkToken = async (): Promise<any> => {
  // ここに実装してください
  throw new Error('Not implemented');
};

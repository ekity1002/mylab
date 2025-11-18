// TODO: 必要な型をtypes.tsからインポートしてください

// TODO: モックユーザーデータを定義してください
// ヒント: id: '1', username: 'testuser', email: 'test@example.com'

// TODO: セッションストレージのキー名を定義してください
// ヒント: 'session_auth' など

/**
 * セッションベース認証のログイン
 * TODO: この関数を実装してください
 *
 * 要件:
 * 1. credentialsを受け取り、AuthResponseを返す非同期関数
 * 2. await new Promise(resolve => setTimeout(resolve, 500)) でAPIリクエストをシミュレート
 * 3. username === 'testuser' && password === 'password123' の場合のみログイン成功
 * 4. 成功時はsessionStorageにユーザー情報を保存
 * 5. 成功時は { success: true, user: MOCK_USER } を返す
 * 6. 失敗時は { success: false, message: 'エラーメッセージ' } を返す
 */
export const loginWithSession = async (credentials: any): Promise<any> => {
  // ここに実装してください
  throw new Error('Not implemented');
};

/**
 * セッションベース認証のログアウト
 * TODO: この関数を実装してください
 *
 * 要件:
 * 1. sessionStorageから認証情報を削除
 * 2. await new Promise(resolve => setTimeout(resolve, 300)) でAPIリクエストをシミュレート
 */
export const logoutWithSession = async (): Promise<void> => {
  // ここに実装してください
  throw new Error('Not implemented');
};

/**
 * 現在のセッション情報を取得
 * TODO: この関数を実装してください
 *
 * 要件:
 * 1. sessionStorageから認証情報を取得
 * 2. 存在すればJSON.parse()してUser型として返す
 * 3. 存在しないかエラーの場合はnullを返す
 */
export const getCurrentSession = (): any => {
  // ここに実装してください
  throw new Error('Not implemented');
};

/**
 * セッションの有効性をチェック
 * TODO: この関数を実装してください
 *
 * 要件:
 * 1. getCurrentSession()を使ってセッションを取得
 * 2. await new Promise(resolve => setTimeout(resolve, 200)) でAPIリクエストをシミュレート
 * 3. セッションが存在すれば { success: true, user } を返す
 * 4. 存在しなければ { success: false, message: 'セッションが見つかりません' } を返す
 */
export const checkSession = async (): Promise<any> => {
  // ここに実装してください
  throw new Error('Not implemented');
};

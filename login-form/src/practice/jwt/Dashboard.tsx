// TODO: useAuthフックをインポートしてください
import './styles.css';

export const Dashboard = () => {
  // TODO: useAuthからuser, token, logoutを取得してください

  // TODO: handleLogout関数を実装してください
  const handleLogout = async () => {
    // ここに実装してください
  };

  // TODO: トークンを見やすく表示するために分割してください
  // ヒント: token ? `${token.substring(0, 20)}...${token.substring(token.length - 20)}` : ''
  const displayToken = '';

  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <h2 className="dashboard-title">ダッシュボード</h2>
        <p className="dashboard-subtitle">JWT認証でログイン中</p>

        <div className="user-info">
          <h3>ユーザー情報</h3>
          {/* TODO: user?.id, user?.username, user?.emailを表示してください */}
          <div className="info-row">
            <span className="info-label">ID:</span>
            <span className="info-value">{/* ここに実装 */}</span>
          </div>
          <div className="info-row">
            <span className="info-label">ユーザー名:</span>
            <span className="info-value">{/* ここに実装 */}</span>
          </div>
          <div className="info-row">
            <span className="info-label">メール:</span>
            <span className="info-value">{/* ここに実装 */}</span>
          </div>
        </div>

        <div className="session-info">
          <h3>JWT情報</h3>
          {/* TODO: displayTokenを表示してください */}
          <div className="token-display">
            <p className="token-label">アクセストークン:</p>
            <code className="token-value">{/* ここに実装 */}</code>
          </div>
          <p>
            JWT認証では、認証情報がlocalStorageに保存されます。
            ブラウザを閉じても、トークンが有効期限内であればログイン状態が維持されます。
          </p>
          <ul className="feature-list">
            <li>トークン: localStorageに保存</li>
            <li>ブラウザを閉じてもログイン状態を維持</li>
            <li>トークンには有効期限がある（1時間）</li>
            <li>APIリクエストにトークンを含めて送信</li>
            <li>ステートレスな認証方式</li>
          </ul>
        </div>

        {/* TODO: onClickイベントでhandleLogoutを呼び出してください */}
        <button className="logout-button">
          ログアウト
        </button>
      </div>
    </div>
  );
};

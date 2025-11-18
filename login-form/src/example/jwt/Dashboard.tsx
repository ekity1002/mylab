import { useAuth } from './AuthContext';
import './styles.css';

export const Dashboard = () => {
  const { user, token, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  // トークンを見やすく表示するために分割
  const displayToken = token
    ? `${token.substring(0, 20)}...${token.substring(token.length - 20)}`
    : '';

  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <h2 className="dashboard-title">ダッシュボード</h2>
        <p className="dashboard-subtitle">JWT認証でログイン中</p>

        <div className="user-info">
          <h3>ユーザー情報</h3>
          <div className="info-row">
            <span className="info-label">ID:</span>
            <span className="info-value">{user?.id}</span>
          </div>
          <div className="info-row">
            <span className="info-label">ユーザー名:</span>
            <span className="info-value">{user?.username}</span>
          </div>
          <div className="info-row">
            <span className="info-label">メール:</span>
            <span className="info-value">{user?.email}</span>
          </div>
        </div>

        <div className="session-info">
          <h3>JWT情報</h3>
          <div className="token-display">
            <p className="token-label">アクセストークン:</p>
            <code className="token-value">{displayToken}</code>
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

        <button onClick={handleLogout} className="logout-button">
          ログアウト
        </button>
      </div>
    </div>
  );
};

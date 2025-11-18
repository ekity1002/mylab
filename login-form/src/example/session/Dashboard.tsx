import { useAuth } from './AuthContext';
import './styles.css';

export const Dashboard = () => {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <h2 className="dashboard-title">ダッシュボード</h2>
        <p className="dashboard-subtitle">セッションベース認証でログイン中</p>

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
          <h3>セッション情報</h3>
          <p>
            セッションベース認証では、認証情報がsessionStorageに保存されます。
            ブラウザのタブを閉じると、セッションは自動的に削除されます。
          </p>
          <ul className="feature-list">
            <li>認証状態: sessionStorageに保存</li>
            <li>タブを閉じると自動的にログアウト</li>
            <li>同一オリジン内でのみ有効</li>
            <li>サーバー側でセッションCookieを管理するのが一般的</li>
          </ul>
        </div>

        <button onClick={handleLogout} className="logout-button">
          ログアウト
        </button>
      </div>
    </div>
  );
};

import { useState, FormEvent } from 'react';
// TODO: useAuthフックをインポートしてください
import './styles.css';

export const LoginForm = () => {
  // TODO: useAuthからloginを取得してください

  // TODO: 以下のstateを定義してください
  // - username (string)
  // - password (string)
  // - error (string)
  // - isSubmitting (boolean)

  // TODO: handleSubmit関数を実装してください
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    // ここに実装してください
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">JWT認証</h2>
        <p className="login-description">
          localStorageを使用してJWTトークンを管理します
        </p>

        {/* TODO: formタグにonSubmitイベントを設定してください */}
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="username">ユーザー名</label>
            {/* TODO: inputタグにvalue, onChange, disabledを設定してください */}
            <input
              id="username"
              type="text"
              placeholder="testuser"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">パスワード</label>
            {/* TODO: inputタグにvalue, onChange, disabledを設定してください */}
            <input
              id="password"
              type="password"
              placeholder="password123"
              required
            />
          </div>

          {/* TODO: errorが存在する場合のみエラーメッセージを表示してください */}

          {/* TODO: buttonにdisabledを設定し、isSubmittingの状態に応じてテキストを変更してください */}
          <button
            type="submit"
            className="submit-button"
          >
            ログイン
          </button>

          <div className="hint-box">
            <p><strong>テスト用アカウント:</strong></p>
            <p>ユーザー名: testuser</p>
            <p>パスワード: password123</p>
          </div>
        </form>
      </div>
    </div>
  );
};

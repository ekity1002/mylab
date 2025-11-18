import { describe, it, expect, beforeEach } from 'vitest';
// TODO: 実装したAPI関数をインポートしてください

describe('Session API', () => {
  beforeEach(() => {
    sessionStorage.clear();
  });

  describe('loginWithSession', () => {
    // TODO: 正しい認証情報でログインできることをテストしてください
    it.todo('正しい認証情報でログインできる');

    // TODO: 間違った認証情報でログインできないことをテストしてください
    it.todo('間違った認証情報でログインできない');

    // TODO: ログイン成功時にsessionStorageに保存されることをテストしてください
    it.todo('ログイン成功時にsessionStorageに保存される');
  });

  describe('logoutWithSession', () => {
    // TODO: ログアウトするとsessionStorageから削除されることをテストしてください
    it.todo('ログアウトするとsessionStorageから削除される');
  });

  describe('getCurrentSession', () => {
    // TODO: セッションがある場合、ユーザー情報を返すことをテストしてください
    it.todo('セッションがある場合、ユーザー情報を返す');

    // TODO: セッションがない場合、nullを返すことをテストしてください
    it.todo('セッションがない場合、nullを返す');
  });

  describe('checkSession', () => {
    // TODO: セッションがある場合、成功を返すことをテストしてください
    it.todo('セッションがある場合、成功を返す');

    // TODO: セッションがない場合、失敗を返すことをテストしてください
    it.todo('セッションがない場合、失敗を返す');
  });
});

// ヒント: tests/example/session/api.test.ts を参考にしてください

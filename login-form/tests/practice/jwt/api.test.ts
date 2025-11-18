import { describe, it, expect, beforeEach } from 'vitest';
// TODO: 実装したAPI関数をインポートしてください

describe('JWT API', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  describe('loginWithJWT', () => {
    // TODO: 正しい認証情報でログインできることをテストしてください
    it.todo('正しい認証情報でログインできる');

    // TODO: 間違った認証情報でログインできないことをテストしてください
    it.todo('間違った認証情報でログインできない');

    // TODO: ログイン成功時にlocalStorageに保存されることをテストしてください
    it.todo('ログイン成功時にlocalStorageに保存される');

    // TODO: トークンが正しい形式であることをテストしてください
    it.todo('トークンが正しい形式である');
  });

  describe('logoutWithJWT', () => {
    // TODO: ログアウトするとlocalStorageから削除されることをテストしてください
    it.todo('ログアウトするとlocalStorageから削除される');
  });

  describe('getStoredToken', () => {
    // TODO: トークンがある場合、トークンを返すことをテストしてください
    it.todo('トークンがある場合、トークンを返す');

    // TODO: トークンがない場合、nullを返すことをテストしてください
    it.todo('トークンがない場合、nullを返す');
  });

  describe('getUserFromToken', () => {
    // TODO: トークンがある場合、ユーザー情報を返すことをテストしてください
    it.todo('トークンがある場合、ユーザー情報を返す');

    // TODO: トークンがない場合、nullを返すことをテストしてください
    it.todo('トークンがない場合、nullを返す');
  });

  describe('checkToken', () => {
    // TODO: トークンがある場合、成功を返すことをテストしてください
    it.todo('トークンがある場合、成功を返す');

    // TODO: トークンがない場合、失敗を返すことをテストしてください
    it.todo('トークンがない場合、失敗を返す');
  });
});

// ヒント: tests/example/jwt/api.test.ts を参考にしてください

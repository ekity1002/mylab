import { describe, it, expect, beforeEach } from 'vitest';
import {
  loginWithSession,
  logoutWithSession,
  getCurrentSession,
  checkSession,
} from '../../../src/example/session/api';

describe('Session API', () => {
  beforeEach(() => {
    sessionStorage.clear();
  });

  describe('loginWithSession', () => {
    it('正しい認証情報でログインできる', async () => {
      const response = await loginWithSession({
        username: 'testuser',
        password: 'password123',
      });

      expect(response.success).toBe(true);
      expect(response.user).toBeDefined();
      expect(response.user?.username).toBe('testuser');
    });

    it('間違った認証情報でログインできない', async () => {
      const response = await loginWithSession({
        username: 'wronguser',
        password: 'wrongpassword',
      });

      expect(response.success).toBe(false);
      expect(response.message).toBeDefined();
    });

    it('ログイン成功時にsessionStorageに保存される', async () => {
      await loginWithSession({
        username: 'testuser',
        password: 'password123',
      });

      const session = sessionStorage.getItem('session_auth');
      expect(session).toBeDefined();
      expect(session).not.toBeNull();
    });
  });

  describe('logoutWithSession', () => {
    it('ログアウトするとsessionStorageから削除される', async () => {
      await loginWithSession({
        username: 'testuser',
        password: 'password123',
      });

      expect(sessionStorage.getItem('session_auth')).not.toBeNull();

      await logoutWithSession();

      expect(sessionStorage.getItem('session_auth')).toBeNull();
    });
  });

  describe('getCurrentSession', () => {
    it('セッションがある場合、ユーザー情報を返す', async () => {
      await loginWithSession({
        username: 'testuser',
        password: 'password123',
      });

      const user = getCurrentSession();
      expect(user).toBeDefined();
      expect(user?.username).toBe('testuser');
    });

    it('セッションがない場合、nullを返す', () => {
      const user = getCurrentSession();
      expect(user).toBeNull();
    });
  });

  describe('checkSession', () => {
    it('セッションがある場合、成功を返す', async () => {
      await loginWithSession({
        username: 'testuser',
        password: 'password123',
      });

      const response = await checkSession();
      expect(response.success).toBe(true);
      expect(response.user).toBeDefined();
    });

    it('セッションがない場合、失敗を返す', async () => {
      const response = await checkSession();
      expect(response.success).toBe(false);
      expect(response.message).toBeDefined();
    });
  });
});

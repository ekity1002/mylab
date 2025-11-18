import { describe, it, expect, beforeEach } from 'vitest';
import {
  loginWithJWT,
  logoutWithJWT,
  getStoredToken,
  getUserFromToken,
  checkToken,
} from '../../../src/example/jwt/api';

describe('JWT API', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  describe('loginWithJWT', () => {
    it('正しい認証情報でログインできる', async () => {
      const response = await loginWithJWT({
        username: 'testuser',
        password: 'password123',
      });

      expect(response.success).toBe(true);
      expect(response.user).toBeDefined();
      expect(response.token).toBeDefined();
      expect(response.user?.username).toBe('testuser');
    });

    it('間違った認証情報でログインできない', async () => {
      const response = await loginWithJWT({
        username: 'wronguser',
        password: 'wrongpassword',
      });

      expect(response.success).toBe(false);
      expect(response.message).toBeDefined();
    });

    it('ログイン成功時にlocalStorageに保存される', async () => {
      await loginWithJWT({
        username: 'testuser',
        password: 'password123',
      });

      const token = localStorage.getItem('jwt_token');
      expect(token).toBeDefined();
      expect(token).not.toBeNull();
    });

    it('トークンが正しい形式である', async () => {
      const response = await loginWithJWT({
        username: 'testuser',
        password: 'password123',
      });

      expect(response.token).toBeDefined();
      const parts = response.token!.split('.');
      expect(parts).toHaveLength(3);
    });
  });

  describe('logoutWithJWT', () => {
    it('ログアウトするとlocalStorageから削除される', async () => {
      await loginWithJWT({
        username: 'testuser',
        password: 'password123',
      });

      expect(localStorage.getItem('jwt_token')).not.toBeNull();

      await logoutWithJWT();

      expect(localStorage.getItem('jwt_token')).toBeNull();
    });
  });

  describe('getStoredToken', () => {
    it('トークンがある場合、トークンを返す', async () => {
      await loginWithJWT({
        username: 'testuser',
        password: 'password123',
      });

      const token = getStoredToken();
      expect(token).toBeDefined();
      expect(token).not.toBeNull();
    });

    it('トークンがない場合、nullを返す', () => {
      const token = getStoredToken();
      expect(token).toBeNull();
    });
  });

  describe('getUserFromToken', () => {
    it('トークンがある場合、ユーザー情報を返す', async () => {
      await loginWithJWT({
        username: 'testuser',
        password: 'password123',
      });

      const user = getUserFromToken();
      expect(user).toBeDefined();
      expect(user?.username).toBe('testuser');
    });

    it('トークンがない場合、nullを返す', () => {
      const user = getUserFromToken();
      expect(user).toBeNull();
    });
  });

  describe('checkToken', () => {
    it('トークンがある場合、成功を返す', async () => {
      await loginWithJWT({
        username: 'testuser',
        password: 'password123',
      });

      const response = await checkToken();
      expect(response.success).toBe(true);
      expect(response.user).toBeDefined();
      expect(response.token).toBeDefined();
    });

    it('トークンがない場合、失敗を返す', async () => {
      const response = await checkToken();
      expect(response.success).toBe(false);
      expect(response.message).toBeDefined();
    });
  });
});

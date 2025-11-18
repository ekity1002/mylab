# ログイン認証ハンズオン環境

セッションベース認証とJWT認証の違いを学ぶためのReact + TypeScript ハンズオン環境です。

## プロジェクト概要

このプロジェクトは、以下の2つの認証方式を実装・比較するための学習環境です：

1. **セッションベース認証**: sessionStorageを使用したセッション管理
2. **JWT認証**: localStorageを使用したトークンベース認証

お手本コードと実装用テンプレートが用意されており、自分のペースで学習できます。

## ディレクトリ構成

```
login-form/
├── src/
│   ├── example/           # お手本実装
│   │   ├── session/      # セッションベース認証（完成版）
│   │   └── jwt/          # JWT認証（完成版）
│   └── practice/         # 実装用テンプレート
│       ├── session/      # セッションベース認証（TODO付き）
│       └── jwt/          # JWT認証（TODO付き）
├── tests/                # テストファイル
│   ├── example/          # お手本のテスト
│   │   ├── session/
│   │   └── jwt/
│   └── practice/         # 実装用テストテンプレート
│       ├── session/
│       └── jwt/
├── docs/                 # ドキュメント
│   └── DIFFERENCES.md    # 認証方式の違いを詳しく解説
└── README.md             # このファイル
```

## セットアップ

### 1. 依存関係のインストール

```bash
npm install
```

### 2. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで http://localhost:5173 を開きます。

### 3. テストの実行

```bash
# テストを実行
npm test

# テストをUIモードで実行
npm run test:ui

# カバレッジレポートを生成
npm run test:coverage
```

## 学習の進め方

### ステップ1: お手本を確認

まず、完成版のコードを確認して、認証の仕組みを理解しましょう。

#### セッションベース認証のお手本

```bash
# src/example/session/ のファイルを確認
├── types.ts          # 型定義
├── api.ts            # APIモック（sessionStorage使用）
├── AuthContext.tsx   # 認証コンテキスト
├── LoginForm.tsx     # ログインフォーム
├── Dashboard.tsx     # ダッシュボード
├── App.tsx           # メインアプリ
└── styles.css        # スタイル
```

#### JWT認証のお手本

```bash
# src/example/jwt/ のファイルを確認
├── types.ts          # 型定義
├── api.ts            # APIモック（localStorage使用）
├── AuthContext.tsx   # 認証コンテキスト
├── LoginForm.tsx     # ログインフォーム
├── Dashboard.tsx     # ダッシュボード
├── App.tsx           # メインアプリ
└── styles.css        # スタイル
```

### ステップ2: 違いを理解

`docs/DIFFERENCES.md` を読んで、両者の違いを理解しましょう。

主な違い：
- **保存場所**: sessionStorage vs localStorage
- **ライフサイクル**: タブを閉じると消える vs 永続的
- **データ形式**: ユーザー情報 vs JWTトークン
- **有効期限**: なし vs トークンの有効期限

### ステップ3: 自分で実装

`src/practice/` フォルダ内のテンプレートを使って、自分で実装してみましょう。

各ファイルには `TODO` コメントがあり、実装のヒントが記載されています。

#### 実装の順序（推奨）

1. **型定義** (`types.ts`)
   - User、LoginCredentials、AuthResponseの型を定義

2. **API層** (`api.ts`)
   - ログイン、ログアウト、セッション/トークンチェックの関数を実装

3. **認証コンテキスト** (`AuthContext.tsx`)
   - useAuthフックとAuthProviderを実装

4. **UIコンポーネント**
   - `LoginForm.tsx`: ログインフォーム
   - `Dashboard.tsx`: ログイン後のダッシュボード
   - `App.tsx`: メインアプリケーション

### ステップ4: テストを書く

実装が完了したら、ユニットテストを書いてみましょう。

```bash
# テストファイルの場所
tests/practice/session/  # セッションベース認証のテスト
tests/practice/jwt/      # JWT認証のテスト
```

お手本のテスト (`tests/example/`) を参考にしてください。

## テスト用アカウント

両方の認証方式で、以下のアカウントを使用できます：

```
ユーザー名: testuser
パスワード: password123
```

## 主な技術スタック

- **React 19**: UIライブラリ
- **TypeScript**: 型安全性
- **Vite**: ビルドツール
- **Vitest**: テストフレームワーク
- **@testing-library/react**: Reactコンポーネントのテスト

## 認証方式の比較

### セッションベース認証

- **保存場所**: sessionStorage（本番環境ではサーバー側Cookie）
- **ライフサイクル**: ブラウザのタブを閉じると消える
- **特徴**:
  - サーバー側で完全に制御可能
  - セッションの即座の無効化が可能
  - CSRF対策が必要

### JWT認証

- **保存場所**: localStorage（本番環境ではHttpOnly Cookie推奨）
- **ライフサイクル**: 有効期限まで永続的
- **特徴**:
  - ステートレスな認証
  - マイクロサービスに適している
  - トークンの無効化が困難

詳細は `docs/DIFFERENCES.md` を参照してください。

## ファイル構成

### お手本 (`src/example/`)

完全に動作する実装例です。コードを読んで理解を深めましょう。

### 実装用 (`src/practice/`)

TODOコメント付きのテンプレートです。お手本を見ながら自分で実装してください。

## よくある質問

### Q1: セッションベース認証とJWT認証、どちらを使うべき？

プロジェクトの要件によります：

- **セッションベース**: モノリシックアプリ、強力なセキュリティが必要な場合
- **JWT**: SPA、マイクロサービス、モバイルアプリの場合

### Q2: 本番環境で使用できますか？

このプロジェクトは学習目的です。本番環境では以下の対策が必要です：

- サーバー側での適切な認証実装
- HttpOnlyフラグ付きCookie
- HTTPS通信
- 適切な有効期限設定
- CSRF/XSS対策
- パスワードのハッシュ化

### Q3: localStorageとsessionStorageの違いは？

- **localStorage**: ブラウザを閉じても永続的
- **sessionStorage**: タブを閉じると削除される

### Q4: なぜlocalStorageにJWTを保存するのは危険？

XSS（クロスサイトスクリプティング）攻撃に脆弱です。本番環境では：

- HttpOnly Cookie + CSRF対策
- または、適切なXSS対策を実装

## セキュリティについて

### 警告

このプロジェクトは学習目的であり、本番環境での使用は推奨されません。

### 本番環境で必要な対策

1. **サーバー側実装**
   - 適切な認証ライブラリを使用
   - パスワードのハッシュ化（bcrypt、argon2など）

2. **Cookie設定**
   ```
   HttpOnly: JavaScriptからアクセス不可
   Secure: HTTPS通信のみ
   SameSite: CSRF対策
   ```

3. **トークン管理**
   - 短い有効期限
   - リフレッシュトークンの実装
   - トークンのブラックリスト

4. **その他**
   - HTTPS通信の強制
   - CORS設定
   - レート制限
   - 多要素認証（MFA）

## コマンド一覧

```bash
# 開発サーバー起動
npm run dev

# ビルド
npm run build

# プレビュー
npm run preview

# リント
npm run lint

# テスト実行
npm test

# テストUI
npm run test:ui

# カバレッジ
npm run test:coverage
```

## トラブルシューティング

### ポート番号が使用中

別のポートを指定してください：

```bash
npm run dev -- --port 3000
```

### テストが失敗する

キャッシュをクリアしてください：

```bash
npm run test -- --clearCache
```

## 参考資料

- [React公式ドキュメント](https://react.dev/)
- [TypeScript公式ドキュメント](https://www.typescriptlang.org/)
- [Vitest公式ドキュメント](https://vitest.dev/)
- [JWT.io](https://jwt.io/)
- [OWASP認証チートシート](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html)

## ライセンス

このプロジェクトは学習目的で作成されています。

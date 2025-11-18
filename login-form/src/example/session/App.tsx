import { AuthProvider, useAuth } from './AuthContext';
import { LoginForm } from './LoginForm';
import { Dashboard } from './Dashboard';

const SessionAuthApp = () => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      }}>
        読み込み中...
      </div>
    );
  }

  return user ? <Dashboard /> : <LoginForm />;
};

export const App = () => {
  return (
    <AuthProvider>
      <SessionAuthApp />
    </AuthProvider>
  );
};

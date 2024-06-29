import { createContext, useContext, useState, ReactNode } from 'react';

type AuthContextType = {
  userEmail: string | null;
  login: (username: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUserEmail] = useState<string | null>(() => {
    const storedUser = window.localStorage.getItem('user');
    return storedUser ? storedUser : null;
  });

  const login = (username: string) => {
    setUserEmail(username);
    window.localStorage.setItem('user', username);
  };

  const logout = () => {
    setUserEmail(null);
    window.localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ userEmail: user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// eslint-disable-next-line react-refresh/only-export-components
export { AuthProvider, useAuth };

import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { AuthProvider, useAuth } from '../../auth/AuthContext';
import ProtectedRoute from './ProtectedRoute';
import { describe, it, expect } from 'vitest';

// Helper to render with router and auth context
const renderWithRouterAndAuth = (
  ui: React.ReactElement,
  { route = '/' } = {}
) => {
  window.history.pushState({}, 'Test page', route);
  return render(ui, {
    wrapper: ({ children }) => (
      <MemoryRouter initialEntries={[route]}>
        <AuthProvider>{children}</AuthProvider>
      </MemoryRouter>
    ),
  });
};

describe('ProtectedRoute', () => {
  it('redirects to login if user is not authenticated', () => {
    // Arrange
    renderWithRouterAndAuth(
      <>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <div>Protected Content</div>
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<div>Login Page</div>} />
        </Routes>
      </>
    );

    // Act
    const protectedPageElem = screen.queryByText('Protected Content');
    const loginPageElem = screen.getByText('Login Page');

    // Assert
    expect(protectedPageElem).not.toBeInTheDocument();
    expect(loginPageElem).toBeInTheDocument();
  });

  it('renders the protected component if user is authenticated', () => {
    // Act
    const AuthWrapper = ({ children }: { children: React.ReactNode }) => {
      const auth = useAuth();
      const navigate = useNavigate();

      React.useEffect(() => {
        auth.login('test user');
        navigate('/protected');
      }, [auth, navigate]);
      return <>{children}</>;
    };

    renderWithRouterAndAuth(
      <AuthWrapper>
        <Routes>
          <Route
            path="/protected"
            element={
              <ProtectedRoute>
                <div>Protected Content</div>
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<div>Login Page</div>} />
        </Routes>
      </AuthWrapper>,
      { route: '/' }
    );

    // Act
    const protectedPageElem = screen.getByText('Protected Content');
    const loginPageElem = screen.queryByText('Login Page');

    // Assert
    expect(protectedPageElem).toBeInTheDocument();
    expect(loginPageElem).not.toBeInTheDocument();
  });
});

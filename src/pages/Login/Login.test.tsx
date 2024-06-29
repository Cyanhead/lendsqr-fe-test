import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Login from './Login';
import { MemoryRouter } from 'react-router-dom';
import { AuthProvider } from '../../auth/AuthContext';

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

describe('Login', () => {
  it('should render', () => {
    // Arrange
    renderWithRouterAndAuth(<Login />);

    // Act
    const loginElem = screen.getByRole('heading', { name: /welcome/i });

    // Assert
    expect(loginElem).toBeInTheDocument();
  });
});

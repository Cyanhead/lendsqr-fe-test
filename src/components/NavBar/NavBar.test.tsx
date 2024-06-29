import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import NavBar from './NavBar';
import { AuthProvider } from '../../auth/AuthContext';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

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

describe('NavBar', () => {
  it('should render', () => {
    // Arrange
    renderWithRouterAndAuth(<NavBar />);

    // Act
    const navBarElem = screen.getByRole('banner');
    const logoElem = screen.getByRole('link', { name: /logo/i });

    // Assert
    expect(navBarElem).toBeInTheDocument();
    expect(logoElem).toBeInTheDocument();
  });
});

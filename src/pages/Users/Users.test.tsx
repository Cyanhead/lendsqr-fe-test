import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Users from './Users';
import { BrowserRouter } from 'react-router-dom';

const renderWithRouter = (ui: React.ReactElement, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return render(ui, {
    wrapper: BrowserRouter,
  });
};

describe('Users', () => {
  it('should render', () => {
    // Arrange
    renderWithRouter(<Users />);

    // Act
    const usersElem = screen.getByText('Users');
    // screen.debug(usersElem); // DELETE

    // Assert
    expect(usersElem).toBeInTheDocument();
  });
});

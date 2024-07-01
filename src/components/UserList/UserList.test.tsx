import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import UserList from './UserList';
import { BrowserRouter } from 'react-router-dom';

const renderWithRouter = (ui: React.ReactElement, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return render(ui, { wrapper: BrowserRouter });
};

describe.skip('UserList', () => {
  it('should render', () => {
    // Arrange
    renderWithRouter(<UserList />);

    // Act
    const userListElem = screen.queryByRole('table');
    // screen.debug(userListElem); // DELETE

    // Assert
    expect(userListElem).toBeInTheDocument();
  });
});

// TODO: write comprehensive test to

import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import SideBar from './SideBar';
import { BrowserRouter } from 'react-router-dom';

const renderWithRouter = (ui: React.ReactElement, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return render(ui, { wrapper: BrowserRouter });
};

describe('SideBar', () => {
  it('should render', () => {
    // Arrange
    renderWithRouter(<SideBar showSideBar={false} />);

    // Act
    const sideBarButtonElem = screen.getByRole('link', { name: /dashboard/i });

    // Assert
    expect(sideBarButtonElem).toBeInTheDocument();
  });
});

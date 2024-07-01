import { describe, expect, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import SideBarButton from './SideBarButton';
import { Icons } from '../../uikit';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const renderWithRouter = (ui: React.ReactElement, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return render(ui, { wrapper: BrowserRouter });
};

describe('SideBarButton', () => {
  it('should render', () => {
    // Arrange
    renderWithRouter(
      <SideBarButton to="/test-route" icon={Icons.UserCog}>
        Test
      </SideBarButton>
    );

    // Act
    const sideBarButtonElem = screen.getByRole('link');
    const sideBarButtonIconElem = screen.getByRole('img');

    // Assert
    expect(sideBarButtonElem).toBeInTheDocument();
    expect(sideBarButtonIconElem).toBeInTheDocument();
  });

  it('should navigate to the correct path when clicked', () => {
    // Arrange
    renderWithRouter(
      <Routes>
        <Route
          path="/"
          element={
            <SideBarButton to="/test-route" icon={Icons.UserCog}>
              Test
            </SideBarButton>
          }
        />
        <Route path="/test-route" element={<div>Test Route</div>} />
      </Routes>,
      { route: '/' }
    );

    // Act
    const sideBarButtonElem = screen.getByRole('link');
    fireEvent.click(sideBarButtonElem);

    // Assert
    expect(screen.getByText('Test Route')).toBeInTheDocument();
  });
});

import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Logo from './Logo';
import { BrowserRouter } from 'react-router-dom';

const renderWithRouter = (ui: React.ReactElement, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return render(ui, { wrapper: BrowserRouter });
};

describe('Logo', () => {
  it('renders the Logo', () => {
    // Arrange: render the component
    renderWithRouter(<Logo />);

    // Act: get the component instance
    const logoImg = screen.getByAltText(/logo/i);
    const logoLink = screen.getByRole('link');

    // Assert: check if the component is on the screen
    expect(logoImg).toBeInTheDocument();
    expect(logoLink).toHaveAttribute('href', '/');
  });
});

import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Link from './Link';
import { BrowserRouter } from 'react-router-dom';

const renderWithRouter = (ui: React.ReactElement, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return render(ui, { wrapper: BrowserRouter });
};

describe('Link', () => {
  it('should render', () => {
    // Arrange
    renderWithRouter(<Link to="/test">Test url</Link>);

    // Act
    const linkElem = screen.getByText(/test url/i);

    // Assert
    expect(linkElem).toBeInTheDocument();
  });
});

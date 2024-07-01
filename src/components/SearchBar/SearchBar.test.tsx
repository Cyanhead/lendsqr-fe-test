import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  it('should render', () => {
    // Arrange
    render(<SearchBar />);

    // Act
    const searchBarElem = screen.getByPlaceholderText(/search/i);

    // Assert
    expect(searchBarElem).toBeInTheDocument();
  });
});

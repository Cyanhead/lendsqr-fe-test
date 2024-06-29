import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Icon from './Icon';

describe('Icon', () => {
  it('should render', () => {
    // Arrange
    render(<Icon src="test" alt="test-icon" />);

    // Act
    const iconElem = screen.getByRole('img');

    // Assert
    expect(iconElem).toBeInTheDocument();
    expect(iconElem).toHaveAttribute('alt', 'test-icon');
  });
});

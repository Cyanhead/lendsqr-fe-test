import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import StatusLabel from './StatusLabel';

describe('StatusLabel', () => {
  it('should render', () => {
    // Arrange
    render(<StatusLabel>Active</StatusLabel>);

    // Act
    const statusLabelElem = screen.getByText(/active/i);

    // Assert
    expect(statusLabelElem).toHaveStyle('color: #39cd62');
  });
});

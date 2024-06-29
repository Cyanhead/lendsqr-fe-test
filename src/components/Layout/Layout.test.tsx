import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Layout from './Layout';

describe('Layout', () => {
  it('should render', () => {
    // Arrange
    render(<Layout.Container>Test</Layout.Container>);

    // Act
    const layoutElem = screen.getByText('Test');

    // Assert
    expect(layoutElem).toBeInTheDocument();
  });
});

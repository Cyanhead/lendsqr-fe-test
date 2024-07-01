import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import PageTemplate from './PageTemplate';

describe('PageTemplate', () => {
  it('should render', () => {
    // Arrange
    render(
      <PageTemplate
        pageTitle={'Test page'}
        topComponent={undefined}
        bottomComponent={undefined}
      />
    );

    // Act
    const titleElem = screen.getByRole('heading', { name: /test page/i });

    // Assert
    expect(titleElem).toBeInTheDocument();
  });
});

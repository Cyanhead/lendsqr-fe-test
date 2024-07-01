import { describe, expect, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import Menu from './Menu';

describe('Menu', () => {
  const TestElement = () => (
    <Menu
      options={[
        {
          // type: 'text',
          label: 'test option 1',
          icon: null,
          onClick: () => {},
        },
      ]}
    >
      Click me
    </Menu>
  );

  it('should render', () => {
    // Arrange
    render(<TestElement />);

    // Act
    const menuElem = screen.getByRole('button', { name: /click me/i });

    // Assert
    expect(menuElem).toBeInTheDocument();
  });

  it('should render options when clicked', () => {
    // Arrange
    render(<TestElement />);

    // Act
    const menuElem = screen.getByRole('button', { name: /click me/i });
    fireEvent.click(menuElem);
    const optionElem = screen.getByRole('button', { name: /test option 1/i });

    // Assert
    expect(optionElem).toBeInTheDocument();
  });
});

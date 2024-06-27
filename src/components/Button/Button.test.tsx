import { describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import Button from './Button';

// Test suite for the Button component
describe('Button component', () => {
  it('renders correctly with children', () => {
    // Arrange
    render(<Button>Click me</Button>);

    // Act
    const buttonElement = screen.getByRole('button');

    // Assert
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent('Click me');
  });

  it('applies the primary variant style by default', () => {
    // Arrange
    render(<Button>Primary Button</Button>);

    // Act
    const buttonElement = screen.getByRole('button');

    // Assert
    expect(buttonElement).toHaveStyle('background-color: #39cdcc');
  });

  it('applies the secondary variant when passed', () => {
    // Arrange
    render(<Button variant="secondary">Secondary Button</Button>);

    // Act
    const buttonElement = screen.getByRole('button');

    // Assert
    expect(buttonElement).toHaveStyle('background-color: inherit');
  });

  it('calls the onClick handler when clicked', () => {
    // Arrange
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    // Act
    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement);

    // Assert
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('does not call onClick handler when disabled', () => {
    // Arrange
    const handleClick = vi.fn();
    render(
      <Button onClick={handleClick} disabled>
        Click me
      </Button>
    );

    // Act
    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement);

    // Assert
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('applies the danger variant styles', () => {
    // Arrange
    render(
      <Button variant="secondary" color="danger">
        Danger Button
      </Button>
    );

    // Act
    const buttonElement = screen.getByRole('button');

    // Assert
    expect(buttonElement).toHaveStyle('border-color: #e4033b');
  });
});

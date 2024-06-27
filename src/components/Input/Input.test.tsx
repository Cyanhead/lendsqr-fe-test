import { describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import Input from './Input';

describe('Input', () => {
  it('renders the input component', () => {
    // Arrange
    render(<Input value="" onChange={() => {}} />);

    // Act
    const inputElement = screen.getByRole('textbox');

    // Assert
    expect(inputElement).toBeInTheDocument();
  });

  it('allows user to input text', () => {
    // Arrange
    const handleChange = vi.fn();
    render(<Input value="" onChange={handleChange} />);

    // Act
    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'test input' } });

    // Assert
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('displays the correct value', () => {
    // Arrange
    render(<Input value="initial value" onChange={() => {}} />);

    // Act
    const inputElement = screen.getByRole('textbox');

    // Assert
    expect(inputElement).toHaveValue('initial value');
  });
});

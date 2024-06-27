import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import TextInput from './TextInput';

describe('TextInput', () => {
  it('should render the child input element', () => {
    // Arrange
    render(<TextInput id="test" placeholder="" />);

    // Act
    const textInputElem = screen.getByRole('textbox');

    // Assert
    expect(textInputElem).toBeInTheDocument();
  });
});

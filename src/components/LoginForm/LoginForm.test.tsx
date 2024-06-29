import { describe, expect, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import LoginForm from './LoginForm';
import { MemoryRouter } from 'react-router-dom';
import { AuthProvider } from '../../auth/AuthContext';

// Helper to render with router and auth context
const renderWithRouterAndAuth = (
  ui: React.ReactElement,
  { route = '/' } = {}
) => {
  window.history.pushState({}, 'Test page', route);
  return render(ui, {
    wrapper: ({ children }) => (
      <MemoryRouter initialEntries={[route]}>
        <AuthProvider>{children}</AuthProvider>
      </MemoryRouter>
    ),
  });
};

// vi.mock('./auth/AuthContext', () => {
//   const actual = vi.importActual('./auth/AuthContext');
//   return {
//     ...actual,
//     useAuth: vi.fn(),
//   };
// });

describe('LoginForm', () => {
  it('renders the login form with email and password inputs and a submit button', () => {
    // Arrange
    renderWithRouterAndAuth(<LoginForm />);

    // Act
    const emailInputElem = screen.getByPlaceholderText(/email/i);
    const passwordInputElem = screen.getByPlaceholderText(/password/i);
    const submitButtonElem = screen.getByRole('button', { name: /log in/i });

    // Assert
    expect(emailInputElem).toBeInTheDocument();
    expect(passwordInputElem).toBeInTheDocument();
    expect(submitButtonElem).toBeInTheDocument();
  });

  it('handles user input', () => {
    renderWithRouterAndAuth(<LoginForm />);

    const emailInputElem = screen.getByPlaceholderText(/email/i);
    const passwordInputElem = screen.getByPlaceholderText(/password/i);

    fireEvent.change(emailInputElem, { target: { value: 'test email' } });
    fireEvent.change(passwordInputElem, { target: { value: 'password' } });

    expect(emailInputElem).toHaveValue('test email');
    expect(passwordInputElem).toHaveValue('password');
  });

  // TODO
  // it('calls login with email and password when form is submitted', () => {
  //   const loginMock = vi.fn();
  //   (useAuth as unknown as vi.Mock).mockReturnValue({
  //     userEmail: null,
  //     login: loginMock,
  //     logout: vi.fn(),
  //   });

  //   renderWithRouterAndAuth(<LoginForm />);

  //   const emailInputElem = screen.getByPlaceholderText(/email/i);
  //   const submitButtonElem = screen.getByRole('button', { name: /log in/i });

  //   fireEvent.change(emailInputElem, { target: { value: 'test email' } });
  //   fireEvent.click(submitButtonElem);

  //   expect(loginMock).toHaveBeenCalledWith('test email');
  // });

  it('displays validation messages when inputs are empty and form is submitted', () => {
    renderWithRouterAndAuth(<LoginForm />);

    const submitButtonElem = screen.getByRole('button', { name: /log in/i });
    fireEvent.click(submitButtonElem);

    const emailInputElem = screen.getByPlaceholderText(/email/i);
    const passwordInputElem = screen.getByPlaceholderText(/password/i);

    expect(emailInputElem).toBeInvalid();
    expect(passwordInputElem).toBeInvalid();
  });
});

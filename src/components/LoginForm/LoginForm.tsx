import { useState } from 'react';
import styles from './LoginForm.module.scss';
import Button from '../Button';
import { useAuth } from '../../auth/AuthContext';
import { useNavigate } from 'react-router-dom';
import Input from '../Input';

const LoginForm = () => {
  const [formState, setFormState] = useState({
    email: '',
    password: '',
  });

  const { login } = useAuth();
  const navigate = useNavigate();

  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    const nextState = { ...formState, email: e.target.value };
    setFormState(nextState);
  }

  function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
    const nextState = { ...formState, password: e.target.value };
    setFormState(nextState);
  }

  function verifyPassword() {
    if (formState.email !== formState.password) {
      window.alert('Your email must match your password!');
      return false;
    }
    return true;
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (verifyPassword()) {
      login(formState.email);
      navigate('/');
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h1>Welcome!</h1>
      <p>Enter details to login.</p>

      <Input
        classes={styles.loginInput}
        id="email"
        name="email"
        type="text"
        placeholder="Email"
        value={formState.email}
        onChange={handleEmailChange}
        required
      />
      <Input
        classes={styles.loginInput}
        id="password"
        name="password"
        type="password"
        placeholder="Password"
        value={formState.password}
        onChange={handlePasswordChange}
        required
      />

      <button
        type="button"
        className={styles.forgotPass}
        onClick={() => window.alert('Use your email as your password!')}
      >
        FORGOT PASSWORD?
      </button>

      <Button classes={styles.loginButton} type="submit">
        LOG IN
      </Button>
    </form>
  );
};

export default LoginForm;

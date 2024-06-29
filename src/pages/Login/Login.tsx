// import { LoginPropsType } from './Login.type';
import { Layout, LoginForm, Logo } from '../../components';
import styles from './Login.module.scss';
import loginImg from '../../assets/login_illustration.svg';
import { useAuth } from '../../auth/AuthContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { userEmail } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (userEmail !== null) {
      navigate(-1);
    }
  }, [navigate, userEmail]);

  return (
    <Layout.FlexRow style={styles.wrap}>
      <Layout.FlexColumn justifyContent="center" style={styles.left}>
        <Layout.FlexRow justifyContent="flex-start" style={styles.nav}>
          <Logo />
        </Layout.FlexRow>
        <img src={loginImg} alt="illustration" />
      </Layout.FlexColumn>
      <Layout.FlexColumn
        style={styles.right}
        justifyContent="center"
        hasBoxShadow
      >
        <LoginForm />
      </Layout.FlexColumn>
    </Layout.FlexRow>
  );
};

export default Login;

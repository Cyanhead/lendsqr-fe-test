import { LogoPropsType } from './Logo.type';
import styles from './Logo.module.scss';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

const Logo = ({ size = 'normal' }: LogoPropsType) => {
  const homePath = '/';

  if (size === 'small') {
    return (
      <Link to={homePath} className={styles.smallWrap}>
        <img className={styles.logo} src={logo} alt="logo" />
      </Link>
    );
  }

  return (
    <Link to={homePath} className={styles.wrap}>
      <img className={styles.logo} src={logo} alt="logo" />
    </Link>
  );
};

export default Logo;

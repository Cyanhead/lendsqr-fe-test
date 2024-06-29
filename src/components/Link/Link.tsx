import { LinkPropsType } from './Link.type';
// import Layout from '../Layout';
import styles from './Link.module.scss';
import { Link as RouterLink } from 'react-router-dom';

const Link = ({ isExternal, children, to, ...linkProps }: LinkPropsType) => {
  if (isExternal)
    return (
      <a
        href={to}
        className={styles.link}
        target="_blank"
        rel="noopener noreferrer"
        {...linkProps}
      >
        {children}
      </a>
    );

  return (
    <RouterLink to={to} className={styles.link} {...linkProps}>
      {children}
    </RouterLink>
  );
};

export default Link;

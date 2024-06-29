import { IconPropsType } from './Icon.type';
import styles from './Icon.module.scss';
import { CSSProperties } from 'react';

const Icon = ({ src, alt = 'icon', width, ...iconProps }: IconPropsType) => {
  const styleProps: CSSProperties = {
    '--width': width,
  } as CSSProperties;

  return (
    <div className={styles.wrap} style={styleProps}>
      <img className={styles.icon} src={src} alt={alt} {...iconProps} />
    </div>
  );
};

export default Icon;

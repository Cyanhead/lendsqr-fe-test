import { StatusLabelPropsType } from './StatusLabel.type';
import styles from './StatusLabel.module.scss';

const StatusLabel = ({ children }: StatusLabelPropsType) => {
  switch (children.toLowerCase()) {
    case 'active':
      return (
        <div className={styles.wrap}>
          <div className={styles.active}>{children}</div>
        </div>
      );
    case 'pending':
      return (
        <div className={styles.wrap}>
          <div className={styles.pending}>{children}</div>{' '}
        </div>
      );
    case 'inactive':
      return (
        <div className={styles.wrap}>
          <div className={styles.inactive}>{children}</div>{' '}
        </div>
      );

    default:
      return (
        <div className={styles.wrap}>
          <div className={styles.blacklisted}>{children}</div>{' '}
        </div>
      );
  }
};

export default StatusLabel;

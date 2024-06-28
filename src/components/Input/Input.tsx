import { InputPropsType } from './Input.type';
import styles from './Input.module.scss';
import { forwardRef } from 'react';

const Input = forwardRef<HTMLInputElement, InputPropsType>(
  ({ classes, ...props }, ref) => {
    const classNames = [styles.input, classes].join(' ');

    return <input className={classNames} ref={ref} {...props} />;
  }
);

export default Input;

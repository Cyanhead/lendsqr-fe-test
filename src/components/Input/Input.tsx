import { InputPropsType } from './Input.type';
import styles from './Input.module.scss';

const Input = (props: InputPropsType) => {
  return <input className={`${styles.input} ${props.classes}`} {...props} />;
};

export default Input;

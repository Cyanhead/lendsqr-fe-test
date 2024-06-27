import { ButtonPropsType } from './Button.type';
import styles from './Button.module.scss';

const Button = (props: ButtonPropsType) => {
  const {
    type = 'submit',
    children,
    variant = 'primary',
    color = 'normal',
    classes,
    onClick,
    disabled,
  } = props;

  const classNames = [
    styles.button,
    styles[variant],
    styles[color],
    classes,
    disabled && styles.disabled,
  ].join(' ');

  if (variant === 'secondary')
    return (
      <button
        className={classNames}
        type={type}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    );

  return (
    <button
      className={classNames}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;

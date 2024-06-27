export type ButtonPropsType = {
  type?: 'submit' | 'button';
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  color?: 'normal' | 'danger' | 'accent';
  classes?: string;
  onClick?: () => void;
  disabled?: boolean;
};

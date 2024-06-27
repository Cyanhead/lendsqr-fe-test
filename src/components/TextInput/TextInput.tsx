import { TextInputPropsType } from './TextInput.type';
import Input from '../Input';

const TextInput = ({
  id,
  classes,
  type,
  placeholder,
  value,
  onChange,
}: TextInputPropsType) => {
  return (
    <Input
      id={id}
      classes={classes}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default TextInput;

import { SideBarButtonPropsType } from './SideBarButton.type';
import { Icon } from '../../uikit';
import styles from './SideBarButton.module.scss';
import { NavLink } from 'react-router-dom';

const SideBarButton = ({
  icon,
  to,
  children = 'Sidebar button',
}: SideBarButtonPropsType) => {
  function toKebabCase(word: string) {
    return word.split(' ').join('-').toLowerCase();
  }

  const path = toKebabCase(to);

  return (
    <NavLink
      to={path}
      className={({ isActive }) => (isActive ? styles.active : styles.wrap)}
    >
      <Icon src={icon} />
      {children}
    </NavLink>
  );
};

export default SideBarButton;

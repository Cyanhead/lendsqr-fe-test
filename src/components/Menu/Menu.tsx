import { useRef, useState } from 'react';
import { MenuPropsType } from './Menu.type';
import styles from './Menu.module.scss';
import { useClickOutside } from '../../hooks';

const Menu = ({
  children,
  options,
  anchor = 'bottom',
  willUseParentPosition,
}: MenuPropsType) => {
  const [showMenu, setShowMenu] = useState(false);

  const menuButtonRef = useRef<HTMLDivElement>(null);
  useClickOutside([menuButtonRef], () => setShowMenu(false));
  let anchorClass: CSSModuleClasses[string];
  switch (anchor) {
    case 'top':
      anchorClass = styles.top;
      break;
    case 'left':
      anchorClass = styles.left;
      break;
    case 'right':
      anchorClass = styles.right;
      break;
    default:
      anchorClass = styles.bottom;
      break;
  }

  const menuPopupClassNames = [anchorClass, styles.menuList].join(' ');

  return (
    <div
      ref={menuButtonRef}
      className={willUseParentPosition ? styles.wrap : styles.positionRelative}
    >
      <button
        onClick={() => setShowMenu(!showMenu)}
        type="button"
        className={styles.menuButton}
      >
        {children}
      </button>
      {showMenu && (
        <ul className={menuPopupClassNames}>
          {options.map(option => {
            if (option.type === 'text')
              return (
                <li
                  key={option.label}
                  className={`${styles.menuOption} ${styles.menuTextOnly}`}
                >
                  {option.label}
                </li>
              );

            return (
              <li key={option.label} className={styles.menuOption}>
                <button
                  className={styles.menuButtonContent}
                  onClick={option.onClick}
                  type="button"
                >
                  {option.icon}
                  {option.label}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Menu;

import { useRef, useState } from 'react';
import { MenuPropsType } from './Menu.type';
import styles from './Menu.module.scss';
import { useClickOutside } from '../../hooks';

const Menu = ({ children, options }: MenuPropsType) => {
  const [showMenu, setShowMenu] = useState(false);

  const menuButtonRef = useRef<HTMLDivElement>(null);
  useClickOutside([menuButtonRef], () => setShowMenu(false));

  return (
    <div ref={menuButtonRef} className={styles.wrap}>
      <button
        onClick={() => setShowMenu(!showMenu)}
        type="button"
        className={styles.menuButton}
      >
        {children}
      </button>
      {showMenu && (
        <ul className={`${styles.menuList}`}>
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

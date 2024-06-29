import { useEffect, useState, useRef } from 'react';
import { MenuPropsType } from './Menu.type';
import styles from './Menu.module.scss';

const Menu = ({ children, options }: MenuPropsType) => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // wartch for clicks outside of the menu and close the menu if clicked
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setShowMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={menuRef} className={styles.wrap}>
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

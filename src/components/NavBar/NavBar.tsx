import { Icon, Icons, Layout } from '../../uikit';
import Link from '../Link';
import Logo from '../Logo';
import SearchBar from '../SearchBar';
import styles from './NavBar.module.scss';
import avatar from '../../assets/avatar.png';
import { useAuth } from '../../auth/AuthContext';
import Menu from '../Menu';
import { truncateString } from '../../helper';
import { NavBarPropsType } from './NavBar.type';

const NavBar = ({ toggleSideBar }: NavBarPropsType) => {
  const { userEmail, logout } = useAuth();
  const shortenedUserName = userEmail && truncateString(userEmail);

  return (
    <header>
      <Layout.FlexRow classes={styles.wrap} hasBoxShadow gap="12px">
        <button type="button" className={styles.mobileMenu}>
          <Icon
            src={Icons.Menu}
            alt="menu icon"
            width="100%"
            onClick={toggleSideBar}
          />
        </button>

        <Logo size="small" />

        <SearchBar />

        <Layout.FlexRow classes={styles.rightGroup}>
          <nav className={styles.desktopOnly}>
            <Link to="docs" isExternal>
              Docs
            </Link>
          </nav>

          <Icon src={Icons.Bell} alt="bell icon" width={22} />

          <Menu
            options={[
              {
                type: 'text',
                label: shortenedUserName ?? 'Guest User',
                icon: null,
                onClick: () => {},
              },
              {
                label: 'Logout',
                icon: <Icon src={Icons.Logout} />,
                onClick: logout,
              },
            ]}
          >
            <Icon src={avatar} width={48} />
            <span className={styles.desktopOnly}>
              {shortenedUserName ?? 'Guest User'}
            </span>
            <Icon src={Icons.CaretDown} width={20} />
          </Menu>
        </Layout.FlexRow>
      </Layout.FlexRow>
    </header>
  );
};

export default NavBar;

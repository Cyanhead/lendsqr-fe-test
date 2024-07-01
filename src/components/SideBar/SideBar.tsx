import { Icon, Icons, Layout } from '../../uikit';
import SideBarButton from '../SideBarButton';
import styles from './SideBar.module.scss';
import { SideBarPropsType } from './SideBar.type';
import SideBarSection from '../SideBarSection';
import Link from '../Link';

const SideBar = ({ showSideBar, sideBarRef }: SideBarPropsType) => {
  const sections = [
    {
      title: 'customers',
      options: [
        { name: 'users', icon: Icons.UserFriends },
        { name: 'guarantors', icon: Icons.Users },
        { name: 'loans', icon: Icons.CashBag },
        { name: 'decision models', icon: Icons.Handshake },
        { name: 'savings', icon: Icons.PiggyBank },
        { name: 'loan requests', icon: Icons.HandCash },
        { name: 'whitelist', icon: Icons.UserCheck },
        { name: 'karma', icon: Icons.UserTimes },
      ],
    },
    {
      title: 'businesses',
      options: [
        { name: 'organization', icon: Icons.Briefcase },
        { name: 'loan products', icon: Icons.HandCash },
        { name: 'savings products', icon: Icons.Bank },
        { name: 'fees and charges', icon: Icons.Coins },
        { name: 'transactions', icon: Icons.PhoneSwap },
        { name: 'services', icon: Icons.Galaxy },
        { name: 'service accounts', icon: Icons.UserCog },
        { name: 'settlements', icon: Icons.Scroll },
        { name: 'reports', icon: Icons.Chart },
      ],
    },
    {
      title: 'settings',
      options: [
        { name: 'preferences', icon: Icons.Sliders },
        { name: 'fees and pricing', icon: Icons.BadgePercentage },
        { name: 'audit logs', icon: Icons.Clipboard },
      ],
    },
  ];

  return (
    <Layout.FlexRow
      classes={showSideBar ? styles.visible : styles.hidden}
      hasBoxShadow
      ref={sideBarRef}
    >
      <div className={styles.spacer}>
        <SideBarButton to="switch-organization" icon={Icons.Briefcase}>
          Switch organization <Icon src={Icons.CaretDownLine} />
        </SideBarButton>
      </div>
      <div className={styles.spacer}>
        <SideBarButton to="/dashboard" icon={Icons.Home}>
          Dashboard
        </SideBarButton>
      </div>
      {sections.map(({ title, options }, index) => (
        <SideBarSection key={index} title={title} options={options} />
      ))}

      <nav className={styles.mobileOnly}>
        <Link to="docs" isExternal>
          Docs
        </Link>
      </nav>
    </Layout.FlexRow>
  );
};

export default SideBar;

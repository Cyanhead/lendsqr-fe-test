import { SideBarSectionPropsType } from './SideBarSection.type';
import { Layout } from '../../uikit';
import SideBarButton from '../SideBarButton';
import styles from './SideBarSection.module.scss';

const SideBarSection = ({ title, options }: SideBarSectionPropsType) => {
  return (
    <Layout.FlexRow classes={styles.wrap}>
      <p className={styles.title}>{title}</p>
      {options.map(({ name, icon }, index) => {
        return (
          <SideBarButton key={index} to={name} icon={icon}>
            {name}
          </SideBarButton>
        );
      })}
    </Layout.FlexRow>
  );
};

export default SideBarSection;

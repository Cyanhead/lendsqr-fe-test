import { PageTemplatePropsType } from './PageTemplate.type';
import { Icon, Icons, Layout } from '../../uikit';
import Link from '../Link';
import styles from './PageTemplate.module.scss';

const PageTemplate = ({
  prevPage,
  pageTitle,
  topComponent,
  bottomComponent,
}: PageTemplatePropsType) => {
  return (
    <Layout.FlexColumn classes={styles.wrap}>
      <Layout.FlexColumn gap="20px">
        {prevPage && (
          <Link className={styles.backLink} to="#">
            <Icon src={Icons.ArrowLeft} width="30px" /> Back to {prevPage}
          </Link>
        )}
        <h2 className={styles.title}>{pageTitle}</h2>
      </Layout.FlexColumn>
      {topComponent}
      {bottomComponent}
    </Layout.FlexColumn>
  );
};

export default PageTemplate;

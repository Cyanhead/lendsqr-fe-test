// import { UsersPropsType } from './Users.type';
import { useEffect } from 'react';
import { PageTemplate, UserList } from '../../components';
import { Icon, Icons, Layout } from '../../uikit';
import styles from './Users.module.scss';

// const Users = ({}: UsersPropsType) => {

const Users = () => {
  const cards = [
    {
      icon: Icons.CardUserFriends,
      label: 'users',
      count: 1234,
    },
    {
      icon: Icons.CardUsers,
      label: 'active users',
      count: 1234,
    },
    {
      icon: Icons.CardDatabase,
      label: 'users with loans',
      count: 1234,
    },
    {
      icon: Icons.CardCoins,
      label: 'users with savings',
      count: 1234,
    },
  ];

  useEffect(() => {}, []);

  return (
    <PageTemplate
      pageTitle="Users"
      topComponent={
        <Layout.GridRow classes={styles.grid} gap="26px">
          {cards.map(({ icon, label, count }, index) => (
            <Layout.FlexColumn key={index} classes={styles.card} gap="12px">
              <Icon src={icon} width="40px" />
              <p className={styles.label}>{label}</p>
              <p className={styles.count}>{count}</p>
            </Layout.FlexColumn>
          ))}
        </Layout.GridRow>
      }
      bottomComponent={<UserList />}
    />
  );
};

export default Users;

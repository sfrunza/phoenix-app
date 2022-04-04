import React from 'react';
import AccountNotifications from 'views/Account/Notifications';
import { requireCustomerAuth } from 'lib/requireCustomerAuth';

const AccountNotificationsPage = () => {
  return <AccountNotifications />;
};

export const getServerSideProps = requireCustomerAuth(() => {
  return {
    props: {},
  };
});

export default AccountNotificationsPage;

import React from 'react';
import AccountNotifications from 'views/Account/Notifications';
import { getSession } from 'next-auth/react';

const AccountNotificationsPage = () => {
  return <AccountNotifications />;
};

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/account/login',
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
};
export default AccountNotificationsPage;

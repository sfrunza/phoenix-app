import React from 'react';
import AccountBilling from 'views/Account/Billing';
import { getSession } from 'next-auth/react';

const AccountBillingPage = () => {
  return <AccountBilling />;
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
export default AccountBillingPage;

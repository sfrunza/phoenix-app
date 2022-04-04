import React from 'react';
import AccountRequests from 'views/Account/Requests';
import { getSession } from 'next-auth/react';

const AccountRequestsPage = () => {
  return <AccountRequests />;
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
export default AccountRequestsPage;

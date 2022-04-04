import React from 'react';
import AccountJob from 'views/Account/Job';
import { getSession } from 'next-auth/react';

const AccountRequestPage = () => {
  return <AccountJob />;
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

export default AccountRequestPage;

import React from 'react';
import AccountSecurity from 'views/Account/Security';
import { getSession } from 'next-auth/react';

const AccountSecurityPage = () => {
  return <AccountSecurity />;
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
export default AccountSecurityPage;

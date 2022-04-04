import React from 'react';
import AccountGeneral from 'views/Account/General';
import { getSession } from 'next-auth/react';

const AccountGeneralPage = () => {
  return <AccountGeneral />;
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
export default AccountGeneralPage;

import React from 'react';
import { getSession } from 'next-auth/react';
import CustomersPage from 'dash/Customers';

const Customers = ({ session }) => {
  return <CustomersPage />;
};

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/dashboard/login',
        permanent: false,
      },
    };
  } else if (session && session.user.role !== 'ADMIN') {
    return {
      redirect: { destination: '/404' },
    };
  }

  return {
    props: { session },
  };
};
export default Customers;

import React from 'react';
import { getSession } from 'next-auth/react';
import Colors from 'dash/Colors';

const Calendar = ({ session }) => {
  return <Colors />;
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
export default Calendar;

import React from 'react';
import AccountRequests from 'views/Account/Requests';
import prisma from 'lib/prisma';
import { getSession } from 'next-auth/react';

const AccountRequestsPage = ({ jobs }) => {
  return <AccountRequests jobs={jobs} />;
};

export const getServerSideProps = async ({ req, res }) => {
  const session = await getSession({ req });
  let jobs = [];

  if (session) {
    jobs = await prisma.job.findMany({
      where: {
        customer: {
          email: session.user.email,
        },
      },
      select: {
        id: true,
        movingDate: true,
        status: true,
        addresses: {
          select: {
            city: true,
            state: true,
            isOrigin: true,
            isDestination: true,
          },
        },
      },
      orderBy: {
        id: 'desc',
      },
    });
  }

  return {
    props: { jobs },
  };
};

export default AccountRequestsPage;

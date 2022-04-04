import React from 'react';
import AccountRequests from 'views/Account/Requests';
import { requireCustomerAuth } from 'lib/requireCustomerAuth';

const AccountRequestsPage = () => {
  return <AccountRequests />;
};

export const getServerSideProps = requireCustomerAuth(() => {
  return {
    props: {
    },
  };
});
export default AccountRequestsPage;

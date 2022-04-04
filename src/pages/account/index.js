import React from 'react';
import AccountGeneral from 'views/Account/General';
import { requireCustomerAuth } from 'lib/requireCustomerAuth';

const AccountGeneralPage = () => {
  return <AccountGeneral />;
};

export const getServerSideProps = requireCustomerAuth(() => {
  return { props: {} };
});

export default AccountGeneralPage;

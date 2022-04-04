import React from 'react';
import AccountBilling from 'views/Account/Billing';
import { requireCustomerAuth } from 'lib/requireCustomerAuth';

const AccountBillingPage = () => {
  return <AccountBilling />;
};

export const getServerSideProps = requireCustomerAuth(() => {
  return {
    props: {},
  };
});

export default AccountBillingPage;

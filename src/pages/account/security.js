import React from 'react';
import AccountSecurity from 'views/Account/Security';
import { requireCustomerAuth } from 'lib/requireCustomerAuth';

const AccountSecurityPage = () => {
  return <AccountSecurity />;
};

export const getServerSideProps = requireCustomerAuth(() => {
  return {
    props: {},
  };
});

export default AccountSecurityPage;

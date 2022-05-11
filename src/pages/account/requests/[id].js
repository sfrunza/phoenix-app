import React from 'react';
import AccountJob from 'views/Account/Job';

const AccountRequestPage = ({ id }) => {
  return <AccountJob id={id} />;
};

export async function getServerSideProps(ctx) {
  let id = ctx.query.id;
  return {
    props: {
      id
    },
  };
}

export default AccountRequestPage;

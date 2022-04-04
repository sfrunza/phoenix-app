import React from 'react';
import { getCsrfToken, getSession } from 'next-auth/react';
import SigninCover from 'views/SigninCover';
import PropTypes from 'prop-types';

export default function SignIn({ csrfToken }) {
  // return (
  //   <form method="post" action="/api/auth/signin/email">
  //     <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
  //     <label>
  //       Email address
  //       <input type="email" id="email" name="email" />
  //     </label>
  //     <button type="submit">Sign in with Email</button>
  //   </form>
  // )
  return <SigninCover csrfToken={csrfToken} />;
}

SignIn.propTypes = {
  csrfToken: PropTypes.string.isRequired,
};

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps(context) {
  const { req } = context;
  const session = await getSession({ req });

  if (session) {
    return {
      redirect: { destination: '/' },
    };
  }

  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
}

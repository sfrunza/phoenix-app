export function requireCustomerAuth(gssp) {
  return async (context) => {
    const { req } = context;
    const token = req.cookies['next-auth.session-token'];

    // console.log(req.cookies);

    if (!token) {
      // Redirect to login page
      return {
        redirect: {
          destination: '/api/auth/signin/email',
          statusCode: 302,
        },
      };
    }

    return await gssp(context); // Continue on to call `getServerSideProps` logic
  };
}

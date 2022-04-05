import NextAuth from 'next-auth';
// import Providers from 'next-auth/providers';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
// import GitHubProvider from 'next-auth/providers/github';
import EmailProvider from 'next-auth/providers/email';
import CredentialsProvider from 'next-auth/providers/credentials';
import prisma from 'lib/prisma';

const authHandler = (req, res) => NextAuth(req, res, options);
export default authHandler;

const options = {
  // adapter: PrismaAdapter(prisma),
  secret: process.env.SECRET,
  // cookie: {
  //   secure: process.env.NODE_ENV && process.env.NODE_ENV === 'production',
  // },
  pages: {
    signIn: '/account/login',
    // verifyRequest: '/account/verify-request',
    // newUser: '/account',
  },
  // redirect: false,
  // session: {
  //   strategy: 'jwt',
  // },
  // session: { jwt: true },
  providers: [
    // GitHubProvider({
    //   clientId: process.env.GITHUB_ID,
    //   clientSecret: process.env.GITHUB_SECRET,
    // }),
    // EmailProvider({
    //   server: {
    //     host: process.env.SMTP_HOST,
    //     port: process.env.SMTP_PORT,
    //     auth: {
    //       user: process.env.SMTP_USER,
    //       pass: process.env.SMTP_PASSWORD,
    //     },
    //   },
    //   from: process.env.SMTP_FROM,
    // }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'email.@mail.com' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const result = await prisma.user.findFirst({
          where: {
            email: credentials.email,
            password: credentials.password,
          },
          select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
            phone: true,
            role: true,
          },
        });

        if (result) {
          return result;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      // session.accessToken = token.accessToken;
      session.user = token.user;
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (user) {
        token.accessToken = user._id;
        token.user = user;
      }
      return token;
    },
    // async jwt({ token, user, account }) {
    //   if (account && user) {
    //     return {
    //       ...token,
    //       accessToken: user.data.token,
    //       refreshToken: user.data.refreshToken,
    //     };
    //   }
    //   return token;
    // },
    // async session({ session, token }) {
    //   session.user.accessToken = token.accessToken;
    //   session.user.refreshToken = token.refreshToken;
    //   session.user.accessTokenExpires = token.accessTokenExpires;
    //   return session;
    // },
    // async signIn() {
    //   const isAllowedToSignIn = true;
    //   if (isAllowedToSignIn) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // },
    // async redirect({ baseUrl, url }) {
    //   if (url.startsWith(baseUrl)) return url;
    //   // Allows relative callback URLs
    //   else if (url.startsWith('/')) return new URL(url, baseUrl).toString();
    //   return baseUrl;
    // },
    // async session({ session, token, user }) {
    //   console.log('user', user);
    //   console.log('toke', token);
    //   console.log('session', session);
    //   // Send properties to the client, like an access_token from a provider.
    //   // session.accessToken = token.accessToken;
    //   session.user = token;
    //   return session;
    // },
    // async jwt({ token, account }) {
    //   console.log('account', account);
    //   console.log('token jwt', token);
    //   // Persist the OAuth access_token to the token right after signin
    //   if (account) {
    //     token.accessToken = account.access_token;
    //   }
    //   return token;
    // },
    // async signIn({ user, account, profile, email, credentials }) {
    //   return true;
    // },
    // async redirect({ url, baseUrl }) {
    //   return url.startsWith(baseUrl) ? url : baseUrl;
    // },
    // async jwt(token, data) {
    //   if (data) {
    //     token.accessToken = data.accessToken || data?.token;
    //     // Set the values you need in the session
    //     token.user = {
    //       isVerified: data?.user?.isVerified,
    //       active: data?.user?.active,
    //       role: data?.user?.role,
    //       _id: data.user?._id,
    //       username: data?.user?.username,
    //     };
    //   }
    //   return token;
    // },
    // async session({ session, token, user }) {
    //   session.accessToken = token.accessToken;
    //   return session;
    // },
  },
};

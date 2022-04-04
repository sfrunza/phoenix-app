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
  adapter: PrismaAdapter(prisma),
  secret: process.env.SECRET,
  cookie: {
    secure: process.env.NODE_ENV && process.env.NODE_ENV === 'production',
  },
  // pages: {
  //   signIn: '/account/login',
  //   verifyRequest: '/account/verify-request', // (used for check email message)
  //   newUser: '/account', // New users will be directed here on first sign in (leave the property out if not of interest)
  // },
  redirect: false,
  // session: {
  //   strategy: "jwt",
  // },
  providers: [
    // GitHubProvider({
    //   clientId: process.env.GITHUB_ID,
    //   clientSecret: process.env.GITHUB_SECRET,
    // }),
    EmailProvider({
      server: {
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD,
        },
      },
      from: process.env.SMTP_FROM,
    }),
    // CredentialsProvider({
    //   name: 'Credentials',
    //   credentials: {
    //     email: { label: 'Email', type: 'text', placeholder: 'email.@mail.com' },
    //     password: { label: 'Password', type: 'password' },
    //   },
    //   async authorize(credentials) {
    //     const result = await prisma.user.findFirst({
    //       where: {
    //         email: credentials.email,
    //         password: credentials.password,
    //       },
    //     });

    //     if (result) {
    //       return result;
    //     } else {
    //       return null;
    //     }
    //   },
    // }),
  ],
  callbacks: {
    async signIn() {
      const isAllowedToSignIn = true;
      if (isAllowedToSignIn) {
        return true;
      } else {
        return false;
      }
    },
    async redirect({ baseUrl }) {
      return baseUrl + '/account';
    },
    async session({ session, user }) {
      session.user = user;
      return session;
    },
    //   async jwt({ token, user }) {
    //     if (user) {
    //       token.id = user.id;
    //       token.userRole = user.role;
    //     }
    //     return token;
    //   },
  },
};

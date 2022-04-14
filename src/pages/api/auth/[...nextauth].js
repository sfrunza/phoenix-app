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
    // signIn: '/account/login',
  },
  providers: [
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
      session.user = token.user;
      if (token.user.id) {
        const result = await prisma.user.findFirst({
          where: {
            email: token.user.email,
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
        console.log(result);
        session.user = result;
        token.user = result;
      }
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (user) {
        token.accessToken = user._id;
        token.user = user;
      }
      return token;
    },
  },
};

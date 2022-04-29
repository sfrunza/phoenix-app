import prisma from 'lib/prisma';
import { getSession } from 'next-auth/react';

export default async function (req, res) {
  const session = await getSession({ req });
  //   console.log(session);
  try {
    if (session) {
      if (req.method === 'GET') {
        const user = await prisma.user.findUnique({
          where: { email: session.user.email },
        });
        res.status(200);
        res.json({ user });
      } else if (req.method === 'PUT') {
        const data = req.body;
        const user = await prisma.user.update({
          where: { id: Number(data.id) },
          data,
        });
        res.json(user);
      } else {
        throw new Error(
          `The HTTP ${req.method} method is not supported at this route.`,
        );
      }
    } else {
      res.status(200);
      res.json({ user: { message: 'You are not signed in' } });
    }
  } catch (e) {
    // console.error(e);
    res.status(500);
    res.json({ error: 'sorry unsable to fetch user' });
  } finally {
    await prisma.$disconnect();
  }
}

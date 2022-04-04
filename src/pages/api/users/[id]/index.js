// import { getSession } from 'next-auth/react';
import prisma from 'lib/prisma';

// DELETE /api/user/:id
export default async function handle(req, res) {
  const userId = req.query.id;
  try {
    if (req.method === 'DELETE') {
      const user = await prisma.user.delete({
        where: { id: Number(userId) },
      });
      res.json(user);
    } else if (req.method === 'GET') {
      const user = await prisma.user.findUnique({
        where: { id: Number(userId) },
        select: {
          id: true,
          firstName: true,
          lastName: true,
          email: true,
          role: true,
          // jobs: {
          //     select: {
          //         service: true,
          //     },
          // },
        },
      });
      res.json(user);
    } else if (req.method === 'PUT') {
      const data = req.body;
      const user = await prisma.user.update({
        where: { id: Number(userId) },
        data,
      });
      res.json(user);
    } else {
      throw new Error(
        `The HTTP ${req.method} method is not supported at this route.`,
      );
    }
  } catch (e) {
    console.error(e);
    res.status(500);
    res.json({ error: 'sorry unsable to fetch user' });
  } finally {
    await prisma.$disconnect();
  }
}

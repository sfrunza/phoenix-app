import prisma from 'lib/prisma';
// import { getSession } from 'next-auth/react';

export default async function (req, res) {
  try {
    const users = await prisma.user.findMany({
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
      orderBy: {
        id: 'desc',
      },
    });
    res.status(200);
    res.json({ users });
  } catch (e) {
    console.error(e);
    res.status(500);
    res.json({ error: 'sorry unsable to fetch users' });
  } finally {
    await prisma.$disconnect();
  }
}

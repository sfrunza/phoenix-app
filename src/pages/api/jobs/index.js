import prisma from 'lib/prisma';
import { getSession } from 'next-auth/react';

export default async function (req, res) {
  const session = await getSession({ req });
  // if(!session) return null

  // console.log(session)

  try {
    if (session && session.user.role === 'CUSTOMER') {
      const jobs = await prisma.job.findMany({
        where: {
          customer: {
            email: session.user.email,
          },
        },
        include: { addresses: true },
        orderBy: {
          id: 'desc',
        },
      });
      res.status(200);
      res.json({ jobs });
    } else if (session && session.user.role === 'ADMIN') {
      const jobs = await prisma.job.findMany({
        include: { addresses: true, customer: true },
        orderBy: {
          id: 'desc',
        },
      });
      res.status(200);
      res.json({ jobs });
    } else {
      res.status(401).send({ message: 'Unauthorized' });
    }
  } catch (e) {
    console.error(e);
    res.status(500);
    res.json({ error: 'sorry unsable to fetch jobs' });
  } finally {
    await prisma.$disconnect();
  }
}

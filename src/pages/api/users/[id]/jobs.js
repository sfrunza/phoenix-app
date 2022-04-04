import prisma from 'lib/prisma';
// import { getSession } from 'next-auth/react';

export default async function (req, res) {
  const userId = req.query.id;

  // console.log(req.query);
  try {
    const jobs = await prisma.job.findMany({
      where: {
        customer: { id: Number(userId) },
      },
      include: {
        addresses: true,
      },
      orderBy: {
        id: 'desc',
      },
    });
    res.status(200);
    res.json({ jobs });
  } catch (e) {
    console.error(e);
    res.status(500);
    res.json({ error: 'sorry unsable to fetch users' });
  } finally {
    await prisma.$disconnect();
  }
}

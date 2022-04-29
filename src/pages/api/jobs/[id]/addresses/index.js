import prisma from 'lib/prisma';
// import { getSession } from 'next-auth/react';

export default async function (req, res) {
  const jobId = req.query.id;

  // console.log(req.query);
  try {
    const addresses = await prisma.address.findMany({
      where: {
        job: { id: Number(jobId) },
      },
      orderBy: {
        id: 'desc',
      },
    });
    res.status(200);
    res.json(addresses);
  } catch (e) {
    console.error(e);
    res.status(500);
    res.json({ error: 'sorry unsable to fetch addresses' });
  } finally {
    await prisma.$disconnect();
  }
}

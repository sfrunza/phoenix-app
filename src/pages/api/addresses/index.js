import prisma from 'lib/prisma';
import { getSession } from 'next-auth/react';

export default async function (req, res) {
  const session = await getSession({ req });
  // if(!session) return null

  // console.log(session)

  try {
    if (session) {
      const addresses = await prisma.address.findMany();
      res.status(200);
      res.json({ addresses });
    } else {
      res.status(401).send({ message: 'Unauthorized' });
    }
  } catch (e) {
    console.error(e);
    res.status(500);
    res.json({ error: 'sorry unsable to fetch addresses' });
  } finally {
    await prisma.$disconnect();
  }
}

import prisma from 'lib/prisma';
// import { getSession } from 'next-auth/react';

export default async function (req, res) {
  const {
    movingDate,
    deliveryDate,
    startTime,
    size,
    service,
    additionalInfo,
    userId,
  } = req.body;
  //   const session = await getSession({ req });
  //   let currentUser = null;

  //   if (session) {
  //     currentUser = await prisma.user.findUnique({
  //       where: { email: session.user.email },
  //     });
  //   }

  console.log(req.body);

  try {
    const result = await prisma.job.create({
      data: {
        movingDate,
        deliveryDate,
        startTime,
        size,
        service,
        additionalInfo,
        customer: { connect: { id: userId } },
      },
    });
    res.json(result);
  } catch (e) {
    console.error(e);
    res.status(500);
    res.json({ error: 'sorry unsable to create user' });
  } finally {
    await prisma.$disconnect();
  }
}

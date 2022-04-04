import prisma from 'lib/prisma';
// import { getSession } from 'next-auth/react';

export default async function (req, res) {
  const {
    address,
    city,
    zip,
    state,
    apt,
    floor,
    isOrigin,
    isDestination,
    jobId,
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
    const result = await prisma.address.create({
      data: {
        address,
        city,
        zip,
        state,
        apt,
        floor,
        isOrigin,
        isDestination,
        job: { connect: { id: jobId } },
      },
    });
    res.json(result);
  } catch (e) {
    console.error(e);
    res.status(500);
    res.json({ error: 'sorry unsable to create address' });
  } finally {
    await prisma.$disconnect();
  }
}

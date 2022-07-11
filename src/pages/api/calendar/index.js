import prisma from 'lib/prisma';

export default async function (req, res) {
  const start = req.query.start;
  const end = req.query.end;
  try {
    let jobs = await prisma.job.findMany({
      where: {
        movingDate: {
          lte: end,
          gte: start,
        },
      },
      include: { addresses: true, customer: true },
      orderBy: {
        id: 'desc',
      },
    });

    // let deliveryJobs = await prisma.job.findMany({
    //   where: {
    //     deliveryDate: {
    //       lte: end,
    //       gte: start,
    //     },
    //   },
    //   include: { addresses: true, customer: true },
    //   orderBy: {
    //     id: 'desc',
    //   },
    // });

    // let arr = jobs.concat(deliveryJobs);

    res.status(200);
    res.json({ jobs });
  } catch (e) {
    console.error(e);
    res.status(500);
    res.json({ error: 'sorry unsable to fetch jobs' });
  } finally {
    await prisma.$disconnect();
  }
}

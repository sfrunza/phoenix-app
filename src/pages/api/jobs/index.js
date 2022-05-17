import prisma from 'lib/prisma';

export default async function (req, res) {
  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);
  const offset = page * limit;
  const filter = req.query.filter;
  const search = req.query.search || '';

  try {
    let total = 0;
    let jobs = [];
    if (search !== '') {
      let totalJobs = null;
      if (isNaN(search)) {
        jobs = await prisma.job.findMany({
          where: {
            customer: {
              OR: [
                {
                  firstName: {
                    contains: search,
                    mode: 'insensitive',
                  },
                },
                {
                  lastName: {
                    contains: search,
                    mode: 'insensitive',
                  },
                },
              ],
            },
          },
          skip: offset,
          take: limit,
          include: { addresses: true, customer: true },
          orderBy: {
            id: 'desc',
          },
        });
        totalJobs = await prisma.job.findMany(  {where: {
          customer: {
            OR: [
              {
                firstName: {
                  contains: search,
                  mode: 'insensitive',
                },
              },
              {
                lastName: {
                  contains: search,
                  mode: 'insensitive',
                },
              },
            ],
          },
        },});
      } else {
        jobs = await prisma.job.findMany({
          where: {
            id: {
              equals: Number(search),
            },
          },
          skip: offset,
          take: limit,
          include: { addresses: true, customer: true },
          orderBy: {
            id: 'desc',
          },
        });

        totalJobs = await prisma.job.findMany( {where: {
          id: {
            equals: Number(search),
          },
        },});
      }

      total = totalJobs.length;
    } else if (filter) {
      jobs = await prisma.job.findMany({
        where: {
          status: filter,
        },
        skip: offset,
        take: limit,
        include: { addresses: true, customer: true },
        orderBy: {
          id: 'desc',
        },
      });
      let totalJobs = await prisma.job.findMany({
        where: {
          status: filter,
        },
      });
      total = totalJobs.length;
    } else {
      jobs = await prisma.job.findMany({
        skip: offset,
        take: limit,
        include: { addresses: true, customer: true },
        orderBy: {
          id: 'desc',
        },
      });
      let totalJobs = await prisma.job.findMany();
      total = totalJobs.length;
    }

    res.status(200);
    res.json({ jobs: jobs, total });
  } catch (e) {
    console.error(e);
    res.status(500);
    res.json({ error: 'sorry unsable to fetch jobs' });
  } finally {
    await prisma.$disconnect();
  }
}

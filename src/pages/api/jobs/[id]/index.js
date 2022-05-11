// import { getSession } from 'next-auth/react';
import prisma from 'lib/prisma';

// DELETE /api/job/:id
export default async function handle(req, res) {
  const jobId = req.query.id;
  console.log(req.query);
  try {
    if (req.method === 'DELETE') {
      const job = await prisma.job.delete({
        where: { id: parseInt(jobId) },
      });
      res.json({ job });
    } else if (req.method === 'GET') {
      const job = await prisma.job.findUnique({
        where: { id: parseInt(jobId) },
        include: {
          addresses: true,
        },
      });
      res.json({ job });
    } else if (req.method === 'PUT') {
      const data = req.body;
      const job = await prisma.job.update({
        where: { id: Number(jobId) },
        data,
      });
      res.json({ job });
    } else {
      throw new Error(
        `The HTTP ${req.method} method is not supported at this route.`,
      );
    }
  } catch (e) {
    console.error(e);
    res.status(500);
    res.json({ error: 'sorry unsable to fetch job' });
  } finally {
    await prisma.$disconnect();
  }
}

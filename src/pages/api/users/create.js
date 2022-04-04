import prisma from 'lib/prisma';
// import { getSession } from 'next-auth/react';

export default async function (req, res) {
  const { email } = req.body;

  try {
    let existingUser = await prisma.user.findUnique({
      where: { email: email },
    });
    if (existingUser) {
      res.json(existingUser);
    } else {
      const result = await prisma.user.create({
        data: req.body,
      });
      res.json(result);
    }
  } catch (e) {
    console.error(e);
    res.status(500);
    res.json({ error: 'sorry unsable to create user' });
  } finally {
    await prisma.$disconnect();
  }
}
